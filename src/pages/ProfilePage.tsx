import { useEffect, useState } from "react";

import { getProfile } from "../services/authService";

import ProfileCard from "../components/profile/ProfileCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import PageHeader from "../components/ui/PageHeader";
import { UserIcon } from "../components/ui/Icons";

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
    return (
      <div className="space-y-4">
        <div className="h-24 animate-pulse rounded-2xl border border-slate-200 bg-slate-100" />
        <div className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Account"
        title="My Profile"
        description="Manage your personal details and password."
        icon={<UserIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        <ProfileCard user={user} />
        <EditProfileForm user={user} refresh={load} />
      </div>

      <ChangePasswordForm />
    </div>
  );
}
