import StatsCard from "../components/dashboard/StatsCard";
import QuickTools from "../components/dashboard/QuickTools";
import RecentHistory from "../components/dashboard/RecentHistory";
import PageHeader from "../components/ui/Pageheader";
import { GridIcon } from "../components/ui/Icons";

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Overview"
        title="Welcome back 👋"
        description="Here's what's available in your toolkit today."
        icon={<GridIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <StatsCard title="Developer Tools" value={10} />
        <StatsCard title="History" value={0} />
        <StatsCard title="Account" value="Active" />
      </div>

      <QuickTools />

      <RecentHistory />
    </div>
  );
}