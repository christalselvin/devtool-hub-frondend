import { useEffect, useState } from "react";
import UserGrowthChart from "../../components/admin/UserGrowthChart";
import RoleDistributionChart from "../../components/admin/RoleDistributionChart";
import TopToolsChart from "../../components/admin/TopToolsChart";
import AdminStats from "../../components/admin/AdminStats";
import { getDashboardStats } from "../../services/adminService";

const activityMap = {
  "7d": [
    { time: "Today", label: "New user signed up", detail: "3 new accounts registered" },
    { time: "12h ago", label: "API usage spike", detail: "12,500 requests processed" },
    { time: "18h ago", label: "Pro upgrade", detail: "7 premium subscriptions" },
    { time: "1d ago", label: "JSON tool popular", detail: "Top traffic this period" },
  ],
  "30d": [
    { time: "3d ago", label: "Revenue milestone", detail: "₹18,500 collected this month" },
    { time: "7d ago", label: "Plan upgrade burst", detail: "24 users moved to Pro" },
    { time: "12d ago", label: "Burst in API calls", detail: "1.2M requests handled" },
    { time: "21d ago", label: "New tool launch", detail: "QR tool adoption increased 18%" },
  ],
  "90d": [
    { time: "30d ago", label: "Quarterly growth", detail: "+42% user acquisition" },
    { time: "48d ago", label: "High-value customers", detail: "Pro plan retention at 75%" },
    { time: "62d ago", label: "API access expansion", detail: "50k requests/mo plan adopted widely" },
    { time: "86d ago", label: "Traffic campaign success", detail: "SEO pages drove 28% more visitors" },
  ],
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [range, setRange] = useState<"7d" | "30d" | "90d">("30d");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await getDashboardStats();
      setStats(res.data);
    } catch (err) {
      console.error(err);
      setStats({
        total_users: 182,
        active_users: 96,
        total_tools: 15,
        total_history: 3421,
        monthly_revenue: 18450,
        active_subscriptions: 71,
        conversion_rate: 6.8,
        api_requests: 142000,
      });
    }
  };

  const dashboardStats = [
    { title: "Users", value: stats?.total_users ?? 0 },
    { title: "Active Users", value: stats?.active_users ?? 0 },
    { title: "Revenue", value: `₹${(stats?.monthly_revenue ?? 0).toLocaleString()}` },
    { title: "API Requests", value: `${(stats?.api_requests ?? 0).toLocaleString()}` },
    { title: "Subscriptions", value: stats?.active_subscriptions ?? 0 },
    { title: "Conversion", value: `${(stats?.conversion_rate ?? 0).toFixed(1)}%` },
  ];

  const activity = activityMap[range];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Super Admin Dashboard</h1>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          {(["7d", "30d", "90d"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRange(item)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                range === item
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map((item) => (
          <AdminStats key={item.title} title={item.title} value={item.value as number | string} />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <UserGrowthChart />
        <RoleDistributionChart />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <TopToolsChart />

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recent Timeline</h2>
            <span className="text-sm text-slate-500">{range}</span>
          </div>

          <div className="space-y-5">
            {activity.map((event, index) => (
              <div key={`${event.time}-${index}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-indigo-600" />
                  {index !== activity.length - 1 && <div className="mt-2 h-full w-px bg-slate-200" />}
                </div>

                <div className="flex-1 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{event.time}</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{event.label}</p>
                  <p className="text-sm text-slate-600">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
