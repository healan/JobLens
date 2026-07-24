export type AuthUser = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export type AuthResult = {
  user: AuthUser;
  token: string;
};

const TOKEN_KEY = 'joblens_auth_token';
const USER_KEY = 'joblens_auth_user';

async function requestAuth(path: '/signin' | '/signup', body: Record<string, string>) {
  const response = await fetch(`/api/auth${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.detail || 'Authentication request failed');
  }

  return payload as AuthResult;
}

export function storeAuth(auth: AuthResult) {
  localStorage.setItem(TOKEN_KEY, auth.token);
  localStorage.setItem(USER_KEY, JSON.stringify(auth.user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): AuthUser | null {
  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as AuthUser;
  } catch {
    return null;
  }
}

export function signIn(email: string, password: string) {
  return requestAuth('/signin', { email, password });
}

export function signUp(name: string, email: string, password: string) {
  return requestAuth('/signup', { name, email, password });
}
