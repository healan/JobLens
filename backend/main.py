from __future__ import annotations

import base64
import hashlib
import hmac
import json
import os
import sqlite3
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "auth.db"
TOKEN_SECRET = os.environ.get("JOBLENS_AUTH_SECRET", "dev-joblens-secret")
PBKDF2_ITERATIONS = 120_000

app = FastAPI(title="JobLens Auth API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AuthPayload(BaseModel):
    name: str | None = Field(default=None, max_length=120)
    email: str = Field(min_length=3, max_length=255)
    password: str = Field(min_length=8, max_length=256)


class AuthUser(BaseModel):
    id: int
    name: str
    email: str
    created_at: str


class AuthResponse(BaseModel):
    user: AuthUser
    token: str


def now_iso() -> str:
    return datetime.now(tz=UTC).isoformat()


def ensure_db() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(str(DB_PATH)) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                password_salt TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.commit()


def get_connection() -> sqlite3.Connection:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(str(DB_PATH))
    connection.row_factory = sqlite3.Row
    return connection


def normalize_email(email: str) -> str:
    return email.strip().lower()


def validate_payload(payload: AuthPayload, require_name: bool) -> None:
    if require_name and (payload.name is None or len(payload.name.strip()) < 2):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Name is required")

    if "@" not in payload.email or payload.email.strip().startswith("@"): 
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Enter a valid email address")

    if len(payload.password) < 8:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Password must be at least 8 characters")


def hash_password(password: str, salt: str | None = None) -> tuple[str, str]:
    password_salt = salt or os.urandom(16).hex()
    password_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        password_salt.encode("utf-8"),
        PBKDF2_ITERATIONS,
    ).hex()
    return password_salt, password_hash


def encode_token(payload: dict[str, Any]) -> str:
    header = {"alg": "HS256", "typ": "JWT"}
    header_segment = base64.urlsafe_b64encode(json.dumps(header, separators=(",", ":")).encode("utf-8")).rstrip(b"=").decode("ascii")
    payload_segment = base64.urlsafe_b64encode(json.dumps(payload, separators=(",", ":")).encode("utf-8")).rstrip(b"=").decode("ascii")
    signing_input = f"{header_segment}.{payload_segment}".encode("ascii")
    signature = hmac.new(TOKEN_SECRET.encode("utf-8"), signing_input, hashlib.sha256).digest()
    signature_segment = base64.urlsafe_b64encode(signature).rstrip(b"=").decode("ascii")
    return f"{header_segment}.{payload_segment}.{signature_segment}"


def decode_token(token: str) -> dict[str, Any] | None:
    try:
        header_segment, payload_segment, signature_segment = token.split(".")
    except ValueError:
        return None

    signing_input = f"{header_segment}.{payload_segment}".encode("ascii")
    expected_signature = hmac.new(TOKEN_SECRET.encode("utf-8"), signing_input, hashlib.sha256).digest()
    received_signature = base64.urlsafe_b64decode(signature_segment + "==")

    if not hmac.compare_digest(expected_signature, received_signature):
        return None

    padded_payload = payload_segment + "=" * (-len(payload_segment) % 4)
    try:
        return json.loads(base64.urlsafe_b64decode(padded_payload).decode("utf-8"))
    except json.JSONDecodeError:
        return None


def to_user(row: sqlite3.Row) -> AuthUser:
    return AuthUser(
        id=row["id"],
        name=row["name"],
        email=row["email"],
        created_at=row["created_at"],
    )


def get_user_by_email(connection: sqlite3.Connection, email: str) -> sqlite3.Row | None:
    return connection.execute(
        "SELECT * FROM users WHERE email = ?",
        (email,),
    ).fetchone()


def get_user_by_id(connection: sqlite3.Connection, user_id: int) -> sqlite3.Row | None:
    return connection.execute(
        "SELECT * FROM users WHERE id = ?",
        (user_id,),
    ).fetchone()


@app.on_event("startup")
def startup() -> None:
    ensure_db()


ensure_db()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.get("/lantest")
def lantest():
    return {"message": "Hello, Lantest!"}


@app.post("/api/auth/signup", response_model=AuthResponse)
def signup(payload: AuthPayload) -> AuthResponse:
    validate_payload(payload, require_name=True)
    email = normalize_email(payload.email)
    name = payload.name.strip() if payload.name else ""

    with get_connection() as connection:
        existing_user = get_user_by_email(connection, email)
        if existing_user is not None:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="An account with this email already exists",
            )

        password_salt, password_hash = hash_password(payload.password)
        created_at = now_iso()
        cursor = connection.execute(
            """
            INSERT INTO users (name, email, password_hash, password_salt, created_at)
            VALUES (?, ?, ?, ?, ?)
            """,
            (name, email, password_hash, password_salt, created_at),
        )
        connection.commit()
        user_id = cursor.lastrowid
        user_row = get_user_by_id(connection, int(user_id))

    if user_row is None:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to create user")

    token = encode_token({"sub": user_row["id"], "email": user_row["email"]})
    return AuthResponse(user=to_user(user_row), token=token)


@app.post("/api/auth/signin", response_model=AuthResponse)
def signin(payload: AuthPayload) -> AuthResponse:
    validate_payload(payload, require_name=False)
    email = normalize_email(payload.email)

    with get_connection() as connection:
        user_row = get_user_by_email(connection, email)
        if user_row is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

        _, password_hash = hash_password(payload.password, user_row["password_salt"])
        if not hmac.compare_digest(password_hash, user_row["password_hash"]):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    token = encode_token({"sub": user_row["id"], "email": user_row["email"]})
    return AuthResponse(user=to_user(user_row), token=token)


@app.get("/api/auth/me", response_model=AuthUser)
def me(request: Request) -> AuthUser:
    authorization = request.headers.get("authorization", "")
    scheme, _, token = authorization.partition(" ")

    if scheme.lower() != "bearer" or not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing token")

    payload = decode_token(token)
    if payload is None or "sub" not in payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    with get_connection() as connection:
        user_row = get_user_by_id(connection, int(payload["sub"]))

    if user_row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    return to_user(user_row)
