import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getStoredToken } from '../lib/auth';

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();

  if (!getStoredToken()) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
}
