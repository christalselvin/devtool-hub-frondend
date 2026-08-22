import { create } from "zustand";
import type { User } from "../types/user";

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
  user: null,

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  setUser: (user) => set({ user }),

  hasPermission: (permission) => {
    const user = get().user;
    return Boolean(user?.is_superuser || user?.roles?.includes("Superadmin") || user?.permissions?.includes(permission));
  },

  hasRole: (role) => {
    const user = get().user;
    return Boolean(user?.roles?.includes(role));
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null });
  },
}));
