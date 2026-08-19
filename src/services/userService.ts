import api from "../api/axios";

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface UpdateProfilePayload {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  errors?: Record<string, string[]>;
}

const userService = {
  async getProfile(): Promise<UserProfile> {
    const response = await api.get<ApiResponse<UserProfile>>("/users/profile");
    return response.data.data;
  },

  async updateProfile(payload: UpdateProfilePayload): Promise<UserProfile> {
    const response = await api.put<ApiResponse<UserProfile>>(
      "/users/profile",
      payload,
    );
    return response.data.data;
  },

  async changePassword(payload: ChangePasswordPayload): Promise<string> {
    const response = await api.patch<ApiResponse<null>>(
      "/users/change-password",
      payload,
    );
    return response.data.message ?? "Password changed successfully.";
  },
};

export default userService;
