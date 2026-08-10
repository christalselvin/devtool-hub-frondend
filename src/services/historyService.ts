import api from "../api/axios";

export const getHistory = async () => {
  const response = await api.get("/history/");
  return response.data;
};

export const getHistoryItem = async (id: string) => {
  const response = await api.get(`/history/${id}`);
  return response.data;
};

export const deleteHistory = async (id: string) => {
  const response = await api.delete(`/history/${id}`);
  return response.data;
};

export const clearHistory = async () => {
  const response = await api.delete("/history/");
  return response.data;
};