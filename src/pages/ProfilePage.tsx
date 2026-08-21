import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  User,
  ShieldCheck,
  Wrench,
  History,
  Pencil,
  Save,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

import { updateProfile } from "../services/authService";
import { useAuthStore } from "../store/authStore";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const [editing, setEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [username, setUsername] = useState(user?.username || "");

  const displayName =
    [user?.first_name, user?.last_name].filter(Boolean).join(" ") ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "Developer";

  const initials =
    displayName
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0] || "")
      .join("")
      .slice(0, 2)
      .toUpperCase() || "D";

  const handleEdit = () => {
    setFirstName(user?.first_name || "");
    setLastName(user?.last_name || "");
    setUsername(user?.username || "");
    setEditing(true);
  };

  const handleCancel = () => {
    setFirstName(user?.first_name || "");
    setLastName(user?.last_name || "");
    setUsername(user?.username || "");
    setEditing(false);
  };

  const handleSave = async () => {
    if (!firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!username.trim()) {
      toast.error("Username is required");
      return;
    }

    try {
      setIsSaving(true);

      const result = await updateProfile({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        username: username.trim(),
      });

      updateUser(result.data);

      setEditing(false);

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Unable to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="relative min-h-full overflow-hidden bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-orange-100/60 blur-[110px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-160px] left-[-180px] h-[360px] w-[360px] rounded-full bg-orange-50/70 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        {/* Page Heading */}
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">
            Profile
          </h1>

          <p className="mt-1.5 text-sm text-slate-500">
            Manage your account and developer workspace.
          </p>
        </div>

        {/* Profile Header */}
        <section className="relative mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.05)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

          <div
            aria-hidden
            className="pointer-events-none absolute right-[-80px] top-[-100px] h-56 w-56 rounded-full bg-orange-100/70 blur-3xl"
          />

          <div className="relative flex flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex min-w-0 items-center gap-4">
              {/* Avatar */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-[0_8px_20px_rgba(249,115,22,0.22)]">
                {initials}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="truncate text-xl font-black tracking-tight text-slate-950">
                    {displayName}
                  </h2>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>

                <p className="mt-0.5 text-sm text-slate-500">
                  @{user?.username || "developer"}
                </p>

                {user?.email && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <Mail className="h-3.5 w-3.5" />
                    {user.email}
                  </p>
                )}
              </div>
            </div>

            {!editing && (
              <button
                type="button"
                onClick={handleEdit}
                className="inline-flex h-10 w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                <Pencil className="h-4 w-4" />
                Edit profile
              </button>
            )}
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Personal Information */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
                  Account
                </p>

                <h2 className="mt-0.5 text-base font-black text-slate-950">
                  Personal information
                </h2>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <User className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-4 p-5">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ProfileInput
                  id="first_name"
                  label="First name"
                  value={firstName}
                  disabled={!editing}
                  onChange={setFirstName}
                />

                <ProfileInput
                  id="last_name"
                  label="Last name"
                  value={lastName}
                  disabled={!editing}
                  onChange={setLastName}
                />
              </div>

              {/* Username */}
              <ProfileInput
                id="username"
                label="Username"
                value={username}
                disabled={!editing}
                onChange={setUsername}
              />

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-bold text-slate-600"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="email"
                    value={user?.email || ""}
                    disabled
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3.5 text-sm font-medium text-slate-500"
                  />
                </div>

                <p className="mt-1.5 text-[11px] text-slate-400">
                  Email address cannot be changed here.
                </p>
              </div>

              {/* Edit Actions */}
              {editing && (
                <div className="flex flex-wrap justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={isSaving}
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    className="inline-flex h-10 items-center gap-2 rounded-xl bg-orange-500 px-4 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Save className="h-4 w-4" />
                    {isSaving ? "Saving..." : "Save changes"}
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Developer Workspace */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
                  Workspace
                </p>

                <h2 className="mt-0.5 text-base font-black text-slate-950">
                  Developer activity
                </h2>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <Wrench className="h-4 w-4" />
              </div>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-2 gap-3">
                <ProfileStat
                  icon={Wrench}
                  label="Tools"
                  value="10"
                />

                <ProfileStat
                  icon={History}
                  label="Tool runs"
                  value="0"
                />
              </div>

              <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-emerald-500 shadow-sm">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Workspace ready
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Your developer tools are available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Security */}
        <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
                Security
              </p>

              <h2 className="mt-0.5 text-base font-black text-slate-950">
                Account security
              </h2>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {/* Password */}
            <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Password
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Keep your account secure with a strong password.
                </p>
              </div>

              <button
                type="button"
                className="w-fit shrink-0 rounded-lg px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-50"
              >
                Change password
              </button>
            </div>

            {/* Email Verification */}
            <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Email verification
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Your account email is connected.
                </p>
              </div>

              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------------------------------------
   Reusable Profile Input
---------------------------------------------- */

function ProfileInput({
  id,
  label,
  value,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold text-slate-600"
      >
        {label}
      </label>

      <input
        id={id}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-800 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-default disabled:text-slate-600"
      />
    </div>
  );
}

/* ---------------------------------------------
   Workspace Statistic
---------------------------------------------- */

function ProfileStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wrench;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-500 shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <p className="mt-3 text-[11px] font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-0.5 text-xl font-black tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}