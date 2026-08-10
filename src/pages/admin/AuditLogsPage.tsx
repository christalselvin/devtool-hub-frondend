import { useEffect, useState } from "react";
import { getAuditLogs } from "../../services/adminService";
import AuditLogTable from "../../components/admin/AuditLogTable";

interface AuditLog {
  id: string;
  user_id?: string | null;
  action: string;
  resource: string;
  details?: string | null;
  ip_address?: string | null;
  created_at?: string;
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  const load = async () => {
    const res = await getAuditLogs();
    setLogs(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Audit Logs
        </h1>

        <p className="text-slate-500">
          Track every important system action.
        </p>
      </div>

      <AuditLogTable logs={logs} />
    </div>
  );
}
