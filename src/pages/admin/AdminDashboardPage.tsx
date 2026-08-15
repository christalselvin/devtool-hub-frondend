import { useEffect, useState } from "react";
import UserGrowthChart from "../../components/admin/UserGrowthChart";
import RoleDistributionChart from "../../components/admin/RoleDistributionChart";
import TopToolsChart from "../../components/admin/TopToolsChart";
import AdminStats from "../../components/admin/AdminStats";
import { getDashboardStats } from "../../services/adminService";

const fallbackActivity = [
  { time: "09:00", label: "New user signed up", detail: "3 new accounts registered" },
  { time: "11:20", label: "API usage spike", detail: "12,500 requests processed" },
  { time: "13:45", label: "Pro upgrade", detail: "7 premium subscriptions" },
  { time: "16:10", label: "JSON tool popular", detail: "Top traffic this hour" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);

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
      });
    }
  };

  const dashboardStats = [
    { title: "Users", value: stats?.total_users ?? 0 },
    { title: "Active Users", value: stats?.active_users ?? 0 },
    { title: "Tools", value: stats?.total_tools ?? 0 },
    { title: "History", value: stats?.total_history ?? 0 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Super Admin Dashboard</h1>
        </div>
        <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          Live system status
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <AdminStats key={item.title} title={item.title} value={item.value} />
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
            <span className="text-sm text-slate-500">Last 24 hrs</span>
          </div>

          <div className="space-y-5">
            {fallbackActivity.map((event, index) => (
              <div key={event.time} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-indigo-600" />
                  {index !== fallbackActivity.length - 1 && <div className="mt-2 h-full w-px bg-slate-200" />}
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
