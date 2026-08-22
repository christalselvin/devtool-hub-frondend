export interface User {
  id: string;
  first_name: string;
  last_name?: string;
  username: string;
  email: string;
  phone?: string;
  profile_image?: string;
  is_active: boolean;
  is_verified: boolean;
  is_superuser?: boolean;
  roles: string[];
  permissions: string[];
}
