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

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500">
          System statistics and usage insights.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-slate-500">
            Users
          </h3>

          <p className="mt-2 text-4xl font-bold">
            145
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-slate-500">
            Roles
          </h3>

          <p className="mt-2 text-4xl font-bold">
            4
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-slate-500">
            Permissions
          </h3>

          <p className="mt-2 text-4xl font-bold">
            12
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-slate-500">
            Tools
          </h3>

          <p className="mt-2 text-4xl font-bold">
            15
          </p>
        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <UserGrowthChart />

        <RoleDistributionChart />

      </div>

      <TopToolsChart />

    </div>
  );
}