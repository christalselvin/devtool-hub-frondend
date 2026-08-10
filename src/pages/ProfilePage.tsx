import { useEffect, useState } from "react";

import {
  getProfile,
} from "../services/authService";

import ProfileCard from "../components/profile/ProfileCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

export default function ProfilePage() {

  const [user, setUser] = useState<any>(null);

  const load = async () => {
    const res = await getProfile();

    setUser(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      <ProfileCard user={user} />

      <EditProfileForm
        user={user}
        refresh={load}
      />

      <ChangePasswordForm />

    </div>
  );
}