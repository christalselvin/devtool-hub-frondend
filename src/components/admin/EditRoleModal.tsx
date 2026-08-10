import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateRole } from "../../services/adminService";

interface Props {
  role: any;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EditRoleModal({
  role,
  open,
  onClose,
  onSuccess,
}: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (role) {
      setName(role.name ?? "");
      setDescription(role.description ?? "");
    }
  }, [role]);

  if (!open || !role) return null;

  const save = async () => {
    try {
      await updateRole(role.id, {
        name,
        description,
      });

      toast.success("Role updated");

      onSuccess();
      onClose();
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Edit Role
        </h2>

        <div className="space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-3"
          />

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
