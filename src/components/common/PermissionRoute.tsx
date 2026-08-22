import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";
import { isAdminUser } from "../../utils/permissions";

interface Props {
  permission: string;
  children: ReactNode;
  adminOnly?: boolean;
}

export default function PermissionRoute({ permission, children, adminOnly = false }: Props) {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const hasPermission = useAuthStore((state) => state.hasPermission);

  if (!token) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdminUser(user)) return <Navigate to="/dashboard" replace />;
  if (!hasPermission(permission)) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}
