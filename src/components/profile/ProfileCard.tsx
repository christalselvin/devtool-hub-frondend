import type { User } from "../../types/user";

interface Props {
  user: User | null;
}

export default function ProfileCard({
  user,
}: Props) {
  if (!user) {
    return null;
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        My Profile
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Name:</strong>{" "}
          {user.first_name} {user.last_name}
        </p>

        <p>
          <strong>Username:</strong>{" "}
          {user.username}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user.email}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {user.phone || "-"}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {user.is_active ? "Active" : "Inactive"}
        </p>

      </div>

    </div>
  );
}