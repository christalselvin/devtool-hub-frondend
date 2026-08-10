import { useEffect, useState } from "react";

import UserTable from "../../components/admin/UserTable";

import {
  getUsers,
} from "../../services/adminService";

import type {
  AdminUser,
} from "../../types/admin";

export default function UsersPage() {

  const [users, setUsers] = useState<AdminUser[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {

      const res = await getUsers();

      setUsers(res.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        User Management
      </h1>

      <UserTable users={users} />

    </div>
  );
}
