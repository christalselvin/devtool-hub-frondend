export interface User {
  id: string;

  first_name: string;

  last_name?: string;

  username: string;

  email: string;

  phone?: string;

  is_active: boolean;

  is_verified: boolean;
}