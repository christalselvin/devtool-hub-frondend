import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const {
    token,
    user,
    setToken,
    setUser,
    logout,
  } = useAuthStore();

  return {
    token,
    user,
    setToken,
    setUser,
    logout,
    isAuthenticated: !!token,
  };
};