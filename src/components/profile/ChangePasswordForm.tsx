import { useState } from "react";
import toast from "react-hot-toast";

import {
  changePassword,
} from "../../services/authService";

export default function ChangePasswordForm() {

  const [current, setCurrent] = useState("");

  const [next, setNext] = useState("");

  const submit = async () => {
    try {

      await changePassword(
        current,
        next
      );

      toast.success("Password changed");

      setCurrent("");

      setNext("");

    } catch {

      toast.error("Change failed");

    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow space-y-4">

      <h2 className="text-xl font-bold">
        Change Password
      </h2>

      <input
        type="password"
        value={current}
        onChange={(e) =>
          setCurrent(e.target.value)
        }
        placeholder="Current Password"
        className="w-full rounded border p-3"
      />

      <input
        type="password"
        value={next}
        onChange={(e) =>
          setNext(e.target.value)
        }
        placeholder="New Password"
        className="w-full rounded border p-3"
      />

      <button
        onClick={submit}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Change Password
      </button>

    </div>
  );
}