import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

import UserGrowthChart from "../../components/admin/UserGrowthChart";
import RoleDistributionChart from "../../components/admin/RoleDistributionChart";
import TopToolsChart from "../../components/admin/TopToolsChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const revenueSeries = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      data: [4200, 5400, 6100, 7800, 9200, 10400, 12650],
      borderColor: "#4f46e5",
      backgroundColor: "rgba(79, 70, 229, 0.15)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const planMix = {
  labels: ["Pro", "Free"],
  datasets: [
    {
      data: [71, 118],
      backgroundColor: ["#4f46e5", "#f59e0b"],
      borderWidth: 0,
    },
  ],
};

const usageSummary = [
  { label: "Pro plan API", value: "1.2M requests" },
  { label: "Free plan API", value: "420K requests" },
  { label: "Average conversion", value: "6.8%" },
  { label: "Churn", value: "2.1%" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
        <p className="text-slate-500">System statistics and monetization insights.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Users</h3>
          <p className="mt-2 text-4xl font-bold text-indigo-600">145</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Roles</h3>
          <p className="mt-2 text-4xl font-bold text-indigo-600">4</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Permissions</h3>
          <p className="mt-2 text-4xl font-bold text-indigo-600">12</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Tools</h3>
          <p className="mt-2 text-4xl font-bold text-indigo-600">15</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <UserGrowthChart />
        <RoleDistributionChart />
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Revenue Overview</h2>
            <span className="text-sm text-slate-500">₹12.65k this month</span>
          </div>
          <div className="h-72">
            <Line
              data={revenueSeries}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { beginAtZero: false, grid: { color: "rgba(148, 163, 184, 0.15)" } },
                  x: { grid: { display: false } },
                },
              }}
            />
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Plan Mix</h2>
          <div className="h-64">
            <Doughnut
              data={planMix}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: "bottom" as const } },
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <TopToolsChart />

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Usage Summary</h2>
          <div className="space-y-4">
            {usageSummary.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                <span className="text-sm font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}