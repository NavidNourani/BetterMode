import { tokenAtom } from '@/atoms/authAtom';
import { useAtomValue } from 'jotai';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAtomValue(tokenAtom);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAtomValue(tokenAtom);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
