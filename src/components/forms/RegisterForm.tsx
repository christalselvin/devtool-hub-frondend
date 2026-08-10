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
}

export default function RegisterForm({
  onSubmit,
}: Props) {
  const { register, handleSubmit } =
    useForm<RegisterData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("first_name")}
        placeholder="First Name"
        className="w-full rounded border p-3"
      />

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
        className="w-full rounded bg-green-600 py-3 text-white"
      >
        Register
      </button>
    </form>
  );
}