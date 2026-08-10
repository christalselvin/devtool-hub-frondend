import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";

import type {
  LoginPayload,
  RegisterPayload,
  LoginResponse,
} from "../types/auth";

import type { User } from "../types/user";

/**
 * Login
 */
export const login = async (
  data: LoginPayload
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    API_ENDPOINTS.AUTH.LOGIN,
    data
  );

  return response.data;
};

/**
 * Register
 */
export const register = async (
  data: RegisterPayload
) => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.REGISTER,
    data
  );

  return response.data;
};

/**
 * Current Logged-in User
 */
export const getProfile = async (): Promise<{
  success: boolean;
  message: string;
  data: User;
}> => {
  const response = await api.get(
    API_ENDPOINTS.AUTH.PROFILE
  );

  return response.data;
};

/**
 * Refresh Access Token
 */
export const refreshToken = async () => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.REFRESH
  );

  return response.data;
};

/**
 * Logout
 */
export const logout = async () => {
  const response = await api.post(
    API_ENDPOINTS.AUTH.LOGOUT
  );

  return response.data;
};

export const updateProfile = async (data: any) => {
  const response = await api.put(
    "/users/profile",
    data
  );

  return response.data;
};

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const response = await api.patch(
    "/users/change-password",
    {
      current_password: oldPassword,
      new_password: newPassword,
    }
  );

  return response.data;
};