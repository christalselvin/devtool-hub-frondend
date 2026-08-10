import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PermissionTable from "../../components/admin/PermissionTable";
import { getPermissions } from "../../services/adminService";
import type { Permission } from "../../types/admin";
import CreatePermissionModal from "../../components/admin/CreatePermissionModal";

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadPermissions = async () => {
    try {
      const res = await getPermissions();

      setPermissions(res.data ?? []);
    } catch {
      toast.error("Failed to load permissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPermissions();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
  <div className="space-y-6">

    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        Permission Management
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="rounded bg-blue-600 px-5 py-2 text-white"
      >
        Create Permission
      </button>

    </div>

    <PermissionTable
      permissions={permissions}
      refresh={loadPermissions}
    />

    <CreatePermissionModal
      open={open}
      onClose={() => setOpen(false)}
      onSuccess={loadPermissions}
    />

  </div>
);
}
