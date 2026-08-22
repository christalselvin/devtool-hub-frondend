import { create } from "zustand";
import type { User } from "../types/user";

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  logout: () => void;
}

const storedUser = localStorage.getItem("user");
const normalize = (value: string) => value.trim().toLowerCase().replace(/[\s-]+/g, "_");
const adminRoles = new Set(["admin", "superadmin", "super_admin"]);

export const useAuthStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
  user: storedUser ? (JSON.parse(storedUser) as User) : null,

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  updateUser: (updates) => {
    const user = get().user;
    if (!user) return;
    const updatedUser = { ...user, ...updates };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    set({ user: updatedUser });
  },

  hasPermission: (permission) => {
    const user = get().user;
    if (!user) return false;
    return Boolean(
      user.is_superuser ||
        user.roles.some((role) => adminRoles.has(normalize(role))) ||
        user.permissions.some((item) => normalize(item) === normalize(permission))
    );
  },

  hasRole: (role) => {
    const user = get().user;
    return Boolean(user?.roles.some((item) => normalize(item) === normalize(role)));
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ token: null, user: null });
  },
}));
