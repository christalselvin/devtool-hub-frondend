import { useState } from "react";
import type { AdminUser } from "../../types/admin";
import toast from "react-hot-toast";
import AssignRoleModal from "./AssignRoleModal";
import EditUserModal from "./EditUserModal";
import { deleteUser } from "../../services/adminService";
import { toggleUserStatus } from "../../services/adminService";

interface Props {
  users: AdminUser[];
}

export default function UserTable({ users }: Props) {
  const [search, setSearch] = useState("");
  const [openRole, setOpenRole] = useState(false);

  const filtered = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.username} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const [selected, setSelected] = useState<any>(null);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border p-3"
      />

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-center">Active</th>
              <th className="px-6 py-3 text-center">Verified</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-6 py-4">
                  {user.first_name} {user.last_name}
                </td>

                <td className="px-6 py-4">{user.username}</td>

                <td className="px-6 py-4">{user.email}</td>

                <td className="px-6 py-4 text-center">
                  {user.is_active ? "✅" : "❌"}
                </td>

                <td className="px-6 py-4 text-center">
                  {user.is_verified ? "✅" : "❌"}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelected(user);
                        setOpen(true);
                      }}
                      className="rounded bg-blue-600 px-3 py-1 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={async () => {
                        if (!confirm("Delete user?")) return;

                        try {
                          await deleteUser(user.id);

                          toast.success("Deleted");

                          location.reload();
                        } catch {
                          toast.error("Delete failed");
                        }
                      }}
                      className="rounded bg-red-600 px-3 py-1 text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setSelected(user);
                        setOpenRole(true);
                      }}
                      className="rounded bg-green-600 px-3 py-1 text-white"
                    >
                      Roles
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          await toggleUserStatus(user.id);

                          toast.success("Status updated");

                          location.reload();
                        } catch {
                          toast.error("Failed");
                        }
                      }}
                      className={`rounded px-3 py-1 text-white ${
                        user.is_active ? "bg-yellow-600" : "bg-green-600"
                      }`}
                    >
                      {user.is_active ? "Deactivate" : "Activate"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditUserModal
        user={selected}
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => location.reload()}
      />

      <AssignRoleModal
  user={selected}
  open={openRole}
  onClose={() => setOpenRole(false)}
  onSuccess={() => location.reload()}
/>
    </div>
  );
}
