import toast from "react-hot-toast";

import { deletePermission } from "../../services/adminService";

import type { Permission } from "../../types/admin";

interface Props {
  permissions: Permission[];
  refresh: () => void;
}

export default function PermissionTable({
  permissions,
  refresh,
}: Props) {

  const remove = async (id: string) => {

    if (!confirm("Delete permission?")) return;

    try {

      await deletePermission(id);

      toast.success("Permission deleted");

      refresh();

    } catch {

      toast.error("Delete failed");

    }
  };

  return (

    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-3 text-left">
              Name
            </th>

            <th className="px-6 py-3 text-left">
              Description
            </th>

            <th className="px-6 py-3 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {permissions.map((permission) => (

            <tr
              key={permission.id}
              className="border-t"
            >

              <td className="px-6 py-4">
                {permission.name}
              </td>

              <td className="px-6 py-4">
                {permission.description}
              </td>

              <td className="px-6 py-4 text-center">

                <button
                  onClick={() => remove(permission.id)}
                  className="rounded bg-red-600 px-4 py-2 text-white"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}
