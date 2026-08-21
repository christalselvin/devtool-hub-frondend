import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

import { register as registerUser } from "../services/authService";
import { Input, Label, FieldError } from "../components/ui/Field";
import Button from "../components/ui/Button";

const registerSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().optional(),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);

      toast.success("Registration successful");

      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 sm:px-6">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-orange-50/70 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      {/* Register container */}
      <div className="relative z-10 w-full max-w-[500px] -translate-y-8 sm:-translate-y-6 lg:-translate-y-2">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Create your account
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Free access to the full developer toolkit.
          </p>
        </div>

        {/* Register card */}
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
          {/* Orange top line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-orange-500"
          />

          {/* Soft orange top shade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-orange-100/70 via-orange-50/30 to-transparent"
          />

          <div className="relative p-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              {/* First + Last name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first_name">First name</Label>

                  <Input
                    id="first_name"
                    {...register("first_name")}
                    placeholder="Jane"
                  />

                  <FieldError>
                    {errors.first_name?.message}
                  </FieldError>
                </div>

                <div>
                  <Label htmlFor="last_name">Last name</Label>

                  <Input
                    id="last_name"
                    {...register("last_name")}
                    placeholder="Doe"
                  />

                  <FieldError>
                    {errors.last_name?.message}
                  </FieldError>
                </div>
              </div>

              {/* Username */}
              <div>
                <Label htmlFor="username">Username</Label>

                <Input
                  id="username"
                  {...register("username")}
                  placeholder="janedoe"
                />

                <FieldError>
                  {errors.username?.message}
                </FieldError>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                />

                <FieldError>
                  {errors.email?.message}
                </FieldError>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="••••••••"
                    className="pr-12"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-slate-400 transition hover:text-orange-500 focus:outline-none focus:text-orange-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <FieldError>
                  {errors.password?.message}
                </FieldError>
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>

                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+1 555 000 0000"
                />

                <FieldError>
                  {errors.phone?.message}
                </FieldError>
              </div>

              {/* Create account */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  size="lg"
                  className="h-12 rounded-xl"
                >
                  {isSubmitting
                    ? "Creating account…"
                    : "Create account"}
                </Button>
              </div>
            </form>

            {/* Login */}
            <div className="mt-7 border-t border-slate-100 pt-6 text-center">
              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-orange-500 transition hover:text-orange-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Fast tools. Simple workflow. Built for developers.
        </div>
      </div>
    </main>
  );
}