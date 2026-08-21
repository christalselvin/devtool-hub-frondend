import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

interface RegisterData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: RegisterData) => void;
  loading?: boolean;
}

export default function RegisterForm({
  onSubmit,
  loading = false,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm<RegisterData>();

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      {/* Orange top line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-orange-500"
      />

      {/* Soft orange shade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-orange-100/70 via-orange-50/30 to-transparent"
      />

      <div className="relative p-6 sm:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* First + Last name */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                First name
              </label>

              <input
                id="first_name"
                {...register("first_name")}
                placeholder="First name"
                autoComplete="given-name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="mb-2 block text-sm font-semibold text-slate-800"
              >
                Last name
              </label>

              <input
                id="last_name"
                {...register("last_name")}
                placeholder="Last name"
                autoComplete="family-name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Username
            </label>

            <input
              id="username"
              {...register("username")}
              placeholder="Username"
              autoComplete="username"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email"
              autoComplete="email"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
              />

              <button
                type="button"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                onClick={() =>
                  setShowPassword((value) => !value)
                }
                className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-slate-400 transition hover:text-orange-500 focus:outline-none focus:text-orange-500"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Create account */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(249,115,22,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_12px_24px_rgba(249,115,22,0.25)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}