import { useState } from "react";
import toast from "react-hot-toast";

import { createRole } from "../../services/adminService";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateRoleModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  const save = async () => {
    if (!name.trim()) {
      toast.error("Role name is required");
      return;
    }

    try {
      await createRole({
        name,
        description,
      });

      toast.success("Role created");

      setName("");
      setDescription("");

      onSuccess();
      onClose();
    } catch {
      toast.error("Create failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Create Role
        </h2>

        <div className="space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Role Name"
            className="w-full rounded border p-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full rounded border p-3"
            rows={4}
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
            Create
          </button>

        </div>

      </div>

    </div>
  );
}
