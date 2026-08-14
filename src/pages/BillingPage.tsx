import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createApiKey,
  getBillingSummary,
  getPlans,
  listApiKeys,
  revokeApiKey,
  type ApiKeySummary,
  type BillingSummary,
  type Plan,
} from "../services/billingService";

export default function BillingPage() {
  const [summary, setSummary] = useState<BillingSummary | null>(null);
  const [plans, setPlans] = useState<Record<string, Plan>>({});
  const [keys, setKeys] = useState<ApiKeySummary[]>([]);
  const [newKey, setNewKey] = useState<string | null>(null);
  const [name, setName] = useState("My API key");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const [billing, availablePlans, apiKeys] = await Promise.all([
        getBillingSummary(),
        getPlans(),
        listApiKeys(),
      ]);
      setSummary(billing);
      setPlans(availablePlans);
      setKeys(apiKeys);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load billing information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const generateKey = async () => {
    try {
      const created = await createApiKey(name);
      setNewKey(created.api_key);
      setKeys(await listApiKeys());
      toast.success("API key created");
    } catch (error) {
      console.error(error);
      toast.error("Unable to create API key");
    }
  };

  const revoke = async (id: string) => {
    try {
      await revokeApiKey(id);
      setKeys(await listApiKeys());
      toast.success("API key revoked");
    } catch (error) {
      console.error(error);
      toast.error("Unable to revoke API key");
    }
  };

  if (loading) return <div className="p-6">Loading billing...</div>;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Billing & API</h1>
        <p className="mt-1 text-slate-600">Use DevTools Hub for free or upgrade when you need higher API limits.</p>
      </div>

      {summary && (
        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Current plan</p>
              <p className="text-2xl font-bold capitalize">{summary.plan}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">API usage</p>
              <p className="text-2xl font-bold">{summary.usage.toLocaleString()} / {summary.monthly_limit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Price</p>
              <p className="text-2xl font-bold">₹{summary.price_inr}/month</p>
            </div>
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-blue-600"
              style={{ width: `${Math.min(100, (summary.usage / summary.monthly_limit) * 100)}%` }}
            />
          </div>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(plans).map(([plan, details]) => (
          <div key={plan} className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold capitalize">{plan}</h2>
            <p className="mt-2 text-3xl font-bold">₹{details.price_inr}<span className="text-sm font-normal text-slate-500">/month</span></p>
            <p className="mt-3 text-slate-600">{details.monthly_api_requests.toLocaleString()} API requests/month</p>
            <p className="mt-1 text-slate-600">{details.history_limit === null ? "Unlimited history" : `${details.history_limit} saved history items`}</p>
            {plan === "pro" && (
              <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700" disabled>
                Payments coming next
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-bold">Developer API keys</h2>
        <p className="mt-1 text-sm text-slate-500">Free accounts receive 1,000 metered API requests per month.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input value={name} onChange={(e) => setName(e.target.value)} className="flex-1 rounded-lg border p-3" placeholder="Key name" />
          <button onClick={generateKey} className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white">Create API key</button>
        </div>

        {newKey && (
          <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4">
            <p className="font-semibold">Copy this key now. It will not be shown again.</p>
            <code className="mt-2 block break-all rounded bg-white p-3">{newKey}</code>
          </div>
        )}

        <div className="mt-5 divide-y">
          {keys.map((key) => (
            <div key={key.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
              <div>
                <p className="font-semibold">{key.name}</p>
                <p className="text-sm text-slate-500">{key.prefix}•••••••• · {key.is_active ? "Active" : "Revoked"}</p>
              </div>
              {key.is_active && <button onClick={() => void revoke(key.id)} className="text-sm font-semibold text-red-600">Revoke</button>}
            </div>
          ))}
          {keys.length === 0 && <p className="py-4 text-slate-500">No API keys yet.</p>}
        </div>
      </div>
    </div>
  );
}
