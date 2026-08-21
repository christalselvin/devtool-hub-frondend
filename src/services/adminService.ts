import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";
import type {
  DashboardStats,
  AdminUser,
  Role,
  Permission,
} from "../types/admin";

export const getDashboardStats = async (): Promise<{
  success: boolean;
  data: DashboardStats;
}> => {
  const res = await api.get(API_ENDPOINTS.ADMIN.DASHBOARD);

  return res.data;
};

export const getUsers = async (): Promise<{
  success: boolean;
  data: AdminUser[];
}> => {
  const res = await api.get(`${API_ENDPOINTS.ADMIN.USERS}/`);

  return res.data;
};

export const getRoles = async (): Promise<{
  success: boolean;
  data: Role[];
}> => {
  const res = await api.get(API_ENDPOINTS.ADMIN.ROLES);

  return res.data;
};

export const getPermissions = async (): Promise<{
  success: boolean;
  data: Permission[];
}> => {
  const res = await api.get(API_ENDPOINTS.ADMIN.PERMISSIONS);

  return res.data;
};

export const updateUser = async (id: string, data: any) => {
  const response = await api.put(`/users/${id}`, data);

  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);

  return response.data;
};

export const toggleUserStatus = async (id: string) => {
  const res = await api.patch(`/users/${id}/toggle-active`);

  return res.data;
};

export const createRole = async (data: {
  name: string;
  description?: string;
}) => {
  const res = await api.post("/admin/roles", data);
  return res.data;
};

export const updateRole = async (
  id: string,
  data: {
    name: string;
    description?: string;
  },
) => {
  const res = await api.put(`/admin/roles/${id}`, data);

  return res.data;
};

export const deleteRole = async (id: string) => {
  const res = await api.delete(`/admin/roles/${id}`);

  return res.data;
};

export const createPermission = async (data: {
  name: string;
  description?: string;
}) => {
  const res = await api.post("/admin/permissions", data);

  return res.data;
};

export const updatePermission = async (
  id: string,
  data: {
    name: string;
    description?: string;
  },
) => {
  const res = await api.put(`/admin/permissions/${id}`, data);

  return res.data;
};

export const deletePermission = async (id: string) => {
  const res = await api.delete(`/admin/permissions/${id}`);

  return res.data;
};

export const removeRole = async (userId: string, roleId: string) => {
  const res = await api.delete(`/admin/users/${userId}/roles/${roleId}`);

  return res.data;
};

export const assignRole = async (userId: string, roleId: string) => {
  const res = await api.post(`/admin/users/${userId}/roles/${roleId}`);

  return res.data;
};

export const assignPermission = async (
  roleId: string,
  permissionId: string
) => {
  const res = await api.post(
    `/admin/roles/${roleId}/permissions/${permissionId}`
  );

  return res.data;
};

export const removePermission = async (
  roleId: string,
  permissionId: string
) => {
  const res = await api.delete(
    `/admin/roles/${roleId}/permissions/${permissionId}`
  );

  return res.data;
};

export const getAuditLogs = async (): Promise<{
  success: boolean;
  data: any[];
}> => {
  const res = await api.get("/admin/audit-logs");
  return res.data;
};


export const getSettings = async () => {
  const res = await api.get("/admin/settings");

  return res.data;
};

export const updateSettings = async (data: {
  site_name: string;
  site_description?: string;
  maintenance_mode: boolean;
  registration_enabled: boolean;
  email_verification_required: boolean;
  max_upload_size_mb: number;
}) => {
  const res = await api.put("/admin/settings", data);

  return res.data;
};