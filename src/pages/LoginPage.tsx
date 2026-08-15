import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { login, getProfile } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { Input, Label, FieldError } from "../components/ui/Field";
import Button from "../components/ui/Button";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // If we arrived here from a tool click while logged out, this sends
  // the user back to that exact tool after a successful login.
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await login(data);

      setToken(result.data.access_token);

      const profile = await getProfile();
      const loggedInUser = profile.data;

      setUser(loggedInUser);

      const isAdminUser = !!(
        loggedInUser.is_superuser ||
        loggedInUser.is_admin ||
        loggedInUser.role === "admin" ||
        loggedInUser.role === "superadmin" ||
        loggedInUser.role === "super_admin" ||
        loggedInUser.roles?.includes("admin") ||
        loggedInUser.roles?.includes("superadmin") ||
        loggedInUser.roles?.includes("super_admin")
      );

      toast.success("Login successful!");

      navigate(isAdminUser ? "/admin" : redirectTo);
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 py-10 sm:px-6">
      <div className="w-full max-w-md">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-700 font-mono text-lg font-bold text-white">
            {"</>"}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to access your developer toolkit
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03] sm:p-8">
          {searchParams.get("redirect") && (
            <div className="mb-5 rounded-lg border border-indigo-100 bg-indigo-50 px-3.5 py-2.5 text-sm text-indigo-700">
              Log in to continue to that tool.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                placeholder="you@example.com"
              />
              <FieldError>{errors.email?.message}</FieldError>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
                placeholder="••••••••"
              />
              <FieldError>{errors.password?.message}</FieldError>
            </div>

            <Button type="submit" disabled={isSubmitting} fullWidth size="lg">
              {isSubmitting ? "Logging in…" : "Login"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-indigo-700 hover:text-indigo-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}