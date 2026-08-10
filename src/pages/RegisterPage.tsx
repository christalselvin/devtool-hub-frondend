import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { register as registerUser } from "../services/authService";

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

  const onSubmit = async (
    data: RegisterFormData
  ) => {
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
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold">
          Register
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          <input
            {...register("first_name")}
            placeholder="First Name"
            className="w-full rounded border p-3"
          />

          {errors.first_name && (
            <p className="text-red-500">
              {errors.first_name.message}
            </p>
          )}

          <input
            {...register("last_name")}
            placeholder="Last Name"
            className="w-full rounded border p-3"
          />

          <input
            {...register("username")}
            placeholder="Username"
            className="w-full rounded border p-3"
          />

          {errors.username && (
            <p className="text-red-500">
              {errors.username.message}
            </p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded border p-3"
          />

          {errors.email && (
            <p className="text-red-500">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full rounded border p-3"
          />

          {errors.password && (
            <p className="text-red-500">
              {errors.password.message}
            </p>
          )}

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full rounded border p-3"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded bg-green-600 p-3 text-white hover:bg-green-700"
          >
            {isSubmitting
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}