import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";

export const getHistory = async () => {
  const response = await api.get(`${API_ENDPOINTS.TOOLS.HISTORY.LIST}/`);
  return response.data;
};

export const getHistoryItem = async (id: string) => {
  const response = await api.get(`${API_ENDPOINTS.TOOLS.HISTORY.LIST}/${id}`);
  return response.data;
};

export const deleteHistory = async (id: string) => {
  const response = await api.delete(`${API_ENDPOINTS.TOOLS.HISTORY.DELETE}/${id}`);
  return response.data;
};

export const clearHistory = async () => {
  const response = await api.delete(`${API_ENDPOINTS.TOOLS.HISTORY.CLEAR}/`);
  return response.data;
};