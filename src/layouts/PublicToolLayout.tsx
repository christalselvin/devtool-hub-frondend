import { Link, Outlet, useLocation } from "react-router-dom";
import Seo from "../components/seo/Seo";
import AdSenseSlot from "../components/monetization/AdSenseSlot";

export default function PublicToolLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Seo path={pathname} />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-slate-900">
            DevTools Hub
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
              Login
            </Link>
            <Link to="/register" className="rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800">
              Create free account
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Outlet />

        <AdSenseSlot />

        <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900">Need more developer tools?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Create a free DevTools Hub account to save your history and access the full developer toolkit.
          </p>
          <Link
            to="/register"
            className="mt-4 inline-flex rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800"
          >
            Get started free
          </Link>
        </section>
      </main>
    </div>
  );
}
