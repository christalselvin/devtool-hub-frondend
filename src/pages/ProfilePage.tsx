import { useEffect, useState } from "react";

import { getProfile } from "../services/authService";

import ProfileCard from "../components/profile/ProfileCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import PageHeader from "../components/ui/PageHeader";
import { UserIcon } from "../components/ui/Icons";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setError(null);

    try {
      const res = await getProfile();
      setUser(res.data);
    } catch {
      setError("Unable to load profile");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!user && !error) {
    return (
      <div className="space-y-4">
        <div className="h-24 animate-pulse rounded-2xl border border-slate-200 bg-slate-100" />
        <div className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-slate-100" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center shadow-sm">
        <p className="text-lg font-semibold text-red-700">{error}</p>
        <button
          onClick={() => void load()}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
        >
          Retry
        </button>
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
