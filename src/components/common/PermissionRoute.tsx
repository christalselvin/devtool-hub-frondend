import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";

interface Props {
  permission: string;
  children: ReactNode;
}

export default function PermissionRoute({ permission, children }: Props) {
  const token = useAuthStore((state) => state.token);
  const hasPermission = useAuthStore((state) => state.hasPermission);

  if (!token) return <Navigate to="/login" replace />;
  if (!hasPermission(permission)) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}
