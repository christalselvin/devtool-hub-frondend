export interface DashboardStats {
  total_users: number;
  active_users: number;
  total_tools: number;
  total_history: number;
}

export interface AdminUser {
  id: string;
  first_name: string;
  last_name?: string;
  username: string;
  email: string;
  is_active: boolean;
  is_verified: boolean;
}

export interface Permission {
  id: string;
  name: string;
  description?: string | null;
}

export interface Role {
  id: string;
  name: string;
  description?: string | null;
  is_active?: boolean;
  permissions?: Permission[];
}