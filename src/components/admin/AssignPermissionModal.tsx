import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getPermissions,
  assignPermission,
  removePermission,
} from "../../services/adminService";

interface Props {
  role: any;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AssignPermissionModal({
  role,
  open,
  onClose,
  onSuccess,
}: Props) {
  const [permissions, setPermissions] = useState<any[]>([]);

  useEffect(() => {
    if (!open) return;

    loadPermissions();
  }, [open]);

  const loadPermissions = async () => {
    try {
      const res = await getPermissions();

      setPermissions(res.data);
    } catch {
      toast.error("Failed to load permissions");
    }
  };

  if (!open || !role) return null;

  const hasPermission = (permission: any) =>
    role.permissions?.some(
      (p: any) => p.id === permission.id
    );

  const togglePermission = async (permission: any) => {
    try {
      if (hasPermission(permission)) {
        await removePermission(role.id, permission.id);

        toast.success("Permission removed");
      } else {
        await assignPermission(role.id, permission.id);

        toast.success("Permission assigned");
      }

      onSuccess();

      onClose();
    } catch {
      toast.error("Operation failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-4">

          <h2 className="text-2xl font-bold">
            Manage Permissions
          </h2>

          <p className="mt-1 text-gray-500">
            {role.name}
          </p>

        </div>

        <div className="max-h-[450px] overflow-y-auto p-6">

          <div className="space-y-3">

            {permissions.map((permission) => (

              <div
                key={permission.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>

                  <h3 className="font-semibold">
                    {permission.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {permission.description}
                  </p>

                </div>

                <button
                  onClick={() =>
                    togglePermission(permission)
                  }
                  className={`rounded px-4 py-2 text-white ${
                    hasPermission(permission)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {hasPermission(permission)
                    ? "Remove"
                    : "Assign"}
                </button>

              </div>

            ))}

          </div>

        </div>

        <div className="flex justify-end border-t px-6 py-4">

          <button
            onClick={onClose}
            className="rounded bg-slate-700 px-5 py-2 text-white hover:bg-slate-800"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}