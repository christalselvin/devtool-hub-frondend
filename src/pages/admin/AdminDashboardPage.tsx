import { useEffect, useState } from "react";

import AdminStats from "../../components/admin/AdminStats";

import { getDashboardStats } from "../../services/adminService";

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
    }
  };

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <AdminStats
          title="Users"
          value={stats.total_users}
        />

        <AdminStats
          title="Active Users"
          value={stats.active_users}
        />

        <AdminStats
          title="Tools"
          value={stats.total_tools}
        />

        <AdminStats
          title="History"
          value={stats.total_history}
        />

      </div>

    </div>
  );
}
