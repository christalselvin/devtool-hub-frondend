import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

interface Props {
  onSubmit: (data: LoginFormData) => void;
  loading?: boolean;
}

export default function LoginForm({
  onSubmit,
  loading = false,
}: Props) {
  const { register, handleSubmit } =
    useForm<LoginFormData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("email")}
        placeholder="Email"
        className="w-full rounded border p-3"
      />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        className="w-full rounded border p-3"
      />

      <button
        disabled={loading}
        className="w-full rounded bg-blue-600 py-3 text-white"
      >
        {loading ? "Signing In..." : "Login"}
      </button>
    </form>
  );
}