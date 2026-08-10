export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  first_name: string;
  last_name?: string;
  username: string;
  email: string;
  password: string;
  phone?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;

  data: {
    user_id: string;
    access_token: string;
    refresh_token: string;
  };
}