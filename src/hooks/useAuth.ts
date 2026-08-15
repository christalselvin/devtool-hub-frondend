import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const {
    token,
    user,
    setToken,
    setUser,
    logout,
  } = useAuthStore();

  const isSuperAdmin = !!(
    user &&
    (user.is_superuser ||
      user.is_admin ||
      user.role === "admin" ||
      user.role === "superadmin" ||
      user.role === "super_admin" ||
      user.roles?.includes("admin") ||
      user.roles?.includes("superadmin") ||
      user.roles?.includes("super_admin"))
  );

  return {
    token,
    user,
    setToken,
    setUser,
    logout,
    isAuthenticated: !!token,
    isSuperAdmin,
  };
};