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
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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

      setUser(profile.data);

      toast.success("Login successful!");

      navigate(redirectTo);
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-orange-50/70 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      {/* Login container */}
      <div className="relative z-10 w-full max-w-[430px] -translate-y-10 sm:-translate-y-8 lg:translate-y-8 xl:translate-y-12">
        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Welcome back
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Sign in to continue to your developer toolkit.
          </p>
        </div>

        {/* Login card */}
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

          <div className="p-6  sm:p-8">
            {searchParams.get("redirect") && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Log in to continue to that tool.
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
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

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  size="lg"
                  className="h-12 rounded-xl"
                >
                  {isSubmitting ? "Logging in…" : "Login"}
                </Button>
              </div>
            </form>

            <div className="mt-7 border-t border-slate-100 pt-6 text-center">
              <p className="text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-orange-500 transition hover:text-orange-600"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-4 md:mt-0 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Fast tools. Simple workflow. Built for developers.
        </div>
      </div>
    </main>
  );
}