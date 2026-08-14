import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { ShieldIcon, TrashIcon } from "../components/ui/Icons";

// NOTE: AdminPage.tsx was uploaded empty, so this is a fresh implementation
// built to match the rest of the toolkit's design system. Wire `loadUsers`,
// `updateRole`, and `removeUser` up to your real admin/user service.

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "suspended";
}

export default function AdminPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    setLoading(true);
    try {
      // Replace with: const res = await getAllUsers(); setUsers(res.data);
      setUsers([]);
    } catch {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const removeUser = async (id: string) => {
    if (!confirm("Remove this user?")) return;
    try {
      // Replace with: await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("User removed");
    } catch {
      toast.error("Failed to remove user");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Admin"
        title="User Management"
        description="View, manage, and moderate registered accounts."
        icon={<ShieldIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        <Card>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Total Users
          </p>
          <p className="mt-1 text-2xl font-bold text-ink">{users.length}</p>
        </Card>
        <Card>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Active
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-700">
            {users.filter((u) => u.status === "active").length}
          </p>
        </Card>
        <Card>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Suspended
          </p>
          <p className="mt-1 text-2xl font-bold text-red-600">
            {users.filter((u) => u.status === "suspended").length}
          </p>
        </Card>
      </div>

      <Card padded={false} className="overflow-hidden">
        {loading ? (
          <div className="space-y-3 p-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 animate-pulse rounded-lg bg-slate-100" />
            ))}
          </div>
        ) : users.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-14 text-center">
            <ShieldIcon className="h-8 w-8 text-slate-300" />
            <p className="font-medium text-ink">No users to show</p>
            <p className="max-w-xs text-sm text-slate-500">
              Connect this page to your user service to see registered
              accounts here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Role</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-medium text-ink">{u.name}</td>
                    <td className="px-5 py-3.5 text-slate-500">{u.email}</td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={[
                          "rounded-full px-2.5 py-0.5 text-xs font-medium",
                          u.status === "active"
                            ? "bg-teal-50 text-teal-700"
                            : "bg-red-50 text-red-600",
                        ].join(" ")}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <Button
                        onClick={() => removeUser(u.id)}
                        variant="danger"
                        size="sm"
                        icon={<TrashIcon className="h-3.5 w-3.5" />}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}