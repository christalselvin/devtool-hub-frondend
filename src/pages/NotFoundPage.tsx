import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <span className="font-mono text-sm font-medium text-indigo-700">
        error/404
      </span>
      <h1 className="mt-3 text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        404
      </h1>
      <p className="mt-3 max-w-sm text-slate-500">
        This page doesn't exist, or the tool you're looking for has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-900/10 transition-colors hover:bg-indigo-800"
      >
        Back to home
      </Link>
    </div>
  );
}