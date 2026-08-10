import StatsCard from "../components/dashboard/StatsCard";
import QuickTools from "../components/dashboard/QuickTools";
import RecentHistory from "../components/dashboard/RecentHistory";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        Welcome 👋
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <StatsCard
          title="Developer Tools"
          value={10}
        />

        <StatsCard
          title="History"
          value={0}
        />

        <StatsCard
          title="Account"
          value="Active"
        />

      </div>

      <QuickTools />

      <RecentHistory />

    </div>
  );
}