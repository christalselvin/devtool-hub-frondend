import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getRoles } from "../../services/adminService";
import RoleTable from "../../components/admin/RoleTable";
import CreateRoleModal from "../../components/admin/CreateRoleModal";
import type { Role } from "../../types/admin";

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadRoles = async () => {
    try {
      const res = await getRoles();
      setRoles(res.data ?? []);
    } catch {
      toast.error("Failed to load roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

return (
  <div className="space-y-6">

    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        Role Management
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="rounded bg-blue-600 px-5 py-2 text-white"
      >
        Create Role
      </button>

    </div>

    <RoleTable
      roles={roles}
      refresh={loadRoles}
    />

    <CreateRoleModal
      open={open}
      onClose={() => setOpen(false)}
      onSuccess={loadRoles}
    />

  </div>
);
}
