import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { updateUser } from "../../services/adminService";

export default function EditUserModal({
  user,
  open,
  onClose,
  onSuccess,
}: any) {

  const [form, setForm] = useState({
  first_name: "",
  last_name: "",
  username: "",
  email: "",
});

  useEffect(() => {
  if (user) {
    setForm({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      username: user.username || "",
      email: user.email || "",
    });
  }
}, [user]);
  if (!open || !user) return null;

  const save = async () => {
    try {

      await updateUser(user.id, form);

      toast.success("User updated");

      onSuccess();

      onClose();

    } catch {

      toast.error("Update failed");

    }
  };

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-xl bg-white p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Edit User
        </h2>

        <div className="space-y-4">

          <input
            value={form.first_name}
            onChange={(e)=>
              setForm({
                ...form,
                first_name:e.target.value
              })
            }
            className="w-full rounded border p-3"
          />

          <input
            value={form.last_name}
            onChange={(e)=>
              setForm({
                ...form,
                last_name:e.target.value
              })
            }
            className="w-full rounded border p-3"
          />

          <input
            value={form.username}
            onChange={(e)=>
              setForm({
                ...form,
                username:e.target.value
              })
            }
            className="w-full rounded border p-3"
          />

          <input
            value={form.email}
            onChange={(e)=>
              setForm({
                ...form,
                email:e.target.value
              })
            }
            className="w-full rounded border p-3"
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={save}
            className="rounded bg-blue-600 px-5 py-2 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>

  );
}