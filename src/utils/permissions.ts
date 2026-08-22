import type { User } from "../types/user";

type RoleLike = string | { name?: string };

type UserWithRoles = User & {
  role?: RoleLike;
  roles?: RoleLike[];
  is_admin?: boolean;
  is_superuser?: boolean;
};

const ADMIN_ROLES = new Set(["admin", "superadmin", "super_admin"]);

function roleName(role: RoleLike | undefined) {
  return (typeof role === "string" ? role : role?.name)
    ?.toLowerCase()
    .replace(/[\s-]+/g, "_");
}

export function isAdminUser(user: User | null) {
  if (!user) return false;

  const candidate = user as UserWithRoles;
  return Boolean(
    candidate.is_admin ||
      candidate.is_superuser ||
      ADMIN_ROLES.has(roleName(candidate.role) ?? "") ||
      candidate.roles?.some((role) =>
        ADMIN_ROLES.has(roleName(role) ?? "")
      )
  );
}
