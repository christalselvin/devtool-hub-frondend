import { useState } from "react";
import toast from "react-hot-toast";

import type { Role } from "../../types/admin";

import {
  deleteRole,
} from "../../services/adminService";

import EditRoleModal from "./EditRoleModal";
import AssignPermissionModal from "./AssignPermissionModal";

interface Props {
  roles: Role[];
  refresh: () => void;
}

export default function RoleTable({
  roles,
  refresh,
}: Props) {
  const [search, setSearch] = useState("");

  const [selected, setSelected] =
    useState<Role | null>(null);

  const [editOpen, setEditOpen] =
    useState(false);

  const [permissionOpen, setPermissionOpen] =
    useState(false);

  const filtered = roles.filter((role) =>
    `${role.name} ${role.description ?? ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const remove = async (id: string) => {
    if (!confirm("Delete this role?")) return;

    try {
      await deleteRole(id);

      toast.success("Role deleted");

      refresh();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <>
      <div className="rounded-xl bg-white shadow">

        <div className="border-b p-5">

          <input
            placeholder="Search roles..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3"
          />

        </div>

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-left">
                Description
              </th>

              <th className="px-6 py-4 text-center">
                Permissions
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((role) => (

              <tr
                key={role.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <p className="font-semibold">
                    {role.name}
                  </p>

                </td>

                <td className="px-6 py-5">

                  {role.description || "-"}

                </td>

                <td className="px-6 py-5 text-center">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

                    {role.permissions?.length ?? 0}

                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelected(role);
                        setEditOpen(true);
                      }}
                      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        setSelected(role);
                        setPermissionOpen(true);
                      }}
                      className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                      Permissions
                    </button>

                    <button
                      onClick={() => remove(role.id)}
                      className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <EditRoleModal
        role={selected}
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSuccess={refresh}
      />

      <AssignPermissionModal
        role={selected}
        open={permissionOpen}
        onClose={() => setPermissionOpen(false)}
        onSuccess={refresh}
      />
    </>
  );
}