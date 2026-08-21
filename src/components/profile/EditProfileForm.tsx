import { useState } from "react";
import toast from "react-hot-toast";

import {
  updateProfile,
} from "../../services/authService";

export default function EditProfileForm({
  user,
  refresh,
}: any) {

  const [form, setForm] = useState({
    first_name: user.first_name,
    last_name: user.last_name || "",
    username: user.username || "",
  });

  const submit = async () => {
    try {
      await updateProfile(form);

      toast.success("Profile updated");

      refresh();

    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow space-y-4">

      <h2 className="text-xl font-bold">
        Edit Profile
      </h2>

      <input
        value={form.first_name}
        onChange={(e) =>
          setForm({
            ...form,
            first_name: e.target.value,
          })
        }
        className="w-full rounded border p-3"
        placeholder="First Name"
      />

      <input
        value={form.last_name}
        onChange={(e) =>
          setForm({
            ...form,
            last_name: e.target.value,
          })
        }
        className="w-full rounded border p-3"
        placeholder="Last Name"
      />

      <input
        value={form.username}
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
        className="w-full rounded border p-3"
        placeholder="Username"
      />

      <button
        onClick={submit}
        className="rounded bg-blue-600 px-5 py-2 text-white"
      >
        Save Changes
      </button>

    </div>
  );
}