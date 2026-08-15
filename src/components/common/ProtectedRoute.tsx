import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const { isAuthenticated, isSuperAdmin } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (location.pathname.startsWith("/admin") && !isSuperAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}