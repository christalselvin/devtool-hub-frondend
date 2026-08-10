import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">

      <h1 className="text-5xl font-bold text-blue-600">
        🚀 DevTools Hub
      </h1>

      <p className="mt-4 text-gray-600">
        All-in-One Developer Toolkit
      </p>

      <div className="mt-8 flex gap-4">

        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50"
        >
          Get Started
        </Link>

      </div>

    </div>
  );
}