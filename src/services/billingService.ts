import api from "../api/axios";

const BILLING_ENDPOINTS = {
  PLANS: "/billing/plans",
  ME: "/billing/me",
  API_KEYS: "/billing/api-keys",
} as const;

export interface Plan {
  price_inr: number;
  monthly_api_requests: number;
  history_limit: number | null;
}

export interface BillingSummary {
  plan: "free" | "pro";
  status: string;
  current_period_end: string | null;
  usage: number;
  monthly_limit: number;
  price_inr: number;
}

export interface ApiKeySummary {
  id: string;
  name: string;
  prefix: string;
  is_active: boolean;
  last_used_at: string | null;
  created_at: string;
}

export const getPlans = async () => {
  const response = await api.get<{ data: Record<string, Plan> }>(BILLING_ENDPOINTS.PLANS);
  return response.data.data;
};

export const getBillingSummary = async () => {
  const response = await api.get<{ data: BillingSummary }>(BILLING_ENDPOINTS.ME);
  return response.data.data;
};

export const listApiKeys = async () => {
  const response = await api.get<{ data: ApiKeySummary[] }>(BILLING_ENDPOINTS.API_KEYS);
  return response.data.data;
};

export const createApiKey = async (name: string) => {
  const response = await api.post<{ data: { id: string; name: string; api_key: string } }>(
    BILLING_ENDPOINTS.API_KEYS,
    { name },
  );
  return response.data.data;
};

export const revokeApiKey = async (id: string) => {
  const response = await api.delete(`${BILLING_ENDPOINTS.API_KEYS}/${id}`);
  return response.data;
};
