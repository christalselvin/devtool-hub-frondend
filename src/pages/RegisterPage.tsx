import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:px-6">
      <div className="w-full max-w-lg">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-700 font-mono text-lg font-bold text-white">
            {"</>"}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Create your account
          </h1>
          <p className="text-sm text-slate-500">
            Free access to the full developer toolkit
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03] sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="first_name">First name</Label>
                <Input
                  id="first_name"
                  {...register("first_name")}
                  placeholder="Jane"
                />
                <FieldError>{errors.first_name?.message}</FieldError>
              </div>

              <div>
                <Label htmlFor="last_name">Last name</Label>
                <Input
                  id="last_name"
                  {...register("last_name")}
                  placeholder="Doe"
                />
                <FieldError>{errors.last_name?.message}</FieldError>
              </div>
            </div>

            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register("username")}
                placeholder="janedoe"
              />
              <FieldError>{errors.username?.message}</FieldError>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
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
                {...register("password")}
                placeholder="••••••••"
              />
              <FieldError>{errors.password?.message}</FieldError>
            </div>

            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+1 555 000 0000"
              />
              <FieldError>{errors.phone?.message}</FieldError>
            </div>

            <Button type="submit" disabled={isSubmitting} fullWidth size="lg" className="mt-2">
              {isSubmitting ? "Creating account…" : "Create account"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-indigo-700 hover:text-indigo-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}