import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getRoles,
  assignRole,
  removeRole,
} from "../../services/adminService";

interface Props {
  user: any;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AssignRoleModal({
  user,
  open,
  onClose,
  onSuccess,
}: Props) {
  const [roles, setRoles] = useState<any[]>([]);

  useEffect(() => {
    if (!open) return;

    loadRoles();
  }, [open]);

  const loadRoles = async () => {
    try {
      const res = await getRoles();
      setRoles(res.data);
    } catch {
      toast.error("Failed to load roles");
    }
  };

  if (!open || !user) return null;

  const hasRole = (role: any) =>
    user.roles?.some((r: any) => r.id === role.id);

  const toggleRole = async (role: any) => {
    try {
      if (hasRole(role)) {
        await removeRole(user.id, role.id);
        toast.success("Role removed");
      } else {
        await assignRole(user.id, role.id);
        toast.success("Role assigned");
      }

      onSuccess();
      onClose();
    } catch {
      toast.error("Operation failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-4">
          <h2 className="text-2xl font-bold">
            Manage Roles
          </h2>

          <p className="mt-1 text-gray-500">
            {user.first_name} {user.last_name}
          </p>
        </div>

        <div className="max-h-[450px] overflow-y-auto p-6">
          <div className="space-y-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold">
                    {role.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {role.description || "No description"}
                  </p>
                </div>

                <button
                  onClick={() => toggleRole(role)}
                  className={`rounded px-4 py-2 text-white ${
                    hasRole(role)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {hasRole(role) ? "Remove" : "Assign"}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}