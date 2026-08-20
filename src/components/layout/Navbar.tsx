import { LogOut, Search, UserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const displayName = user
    ? [user.first_name, user.last_name].filter(Boolean).join(" ") || user.username || user.email
    : "Developer";

  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .map((part: string) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase() || "D";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/dashboard"
          className="group flex min-w-0 items-center gap-3"
          aria-label="DevTools Hub dashboard"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-black text-white shadow-[0_8px_20px_rgba(249,115,22,0.2)] transition-transform duration-200 group-hover:-translate-y-0.5">
            DT
          </span>

          <span className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">
            Dev<span className="text-orange-500">Tools</span>Hub
          </span>
        </NavLink>

        <div className="hidden max-w-xl flex-1 md:block">
          <button
            type="button"
            onClick={() => navigate("/search")}
            className="group flex h-11 w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 text-left text-sm text-slate-500 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50/40 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
          >
            <Search size={17} className="shrink-0 text-slate-400 transition-colors group-hover:text-orange-500" />
            <span className="flex-1">Search developer tools...</span>
            <kbd className="hidden rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 lg:inline-block">
              /
            </kbd>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            aria-label="Open profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/10 sm:hidden"
          >
            <UserRound size={18} />
          </button>

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="hidden items-center gap-2 rounded-xl px-2 py-1.5 text-left transition-colors hover:bg-orange-50/70 sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
              {initials}
            </span>
            <span className="hidden max-w-40 truncate text-sm font-semibold text-slate-900 lg:block">
              {displayName}
            </span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-500/10"
          >
            <LogOut size={17} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-2.5 md:hidden">
        <button
          type="button"
          onClick={() => navigate("/search")}
          className="flex h-10 w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-500 transition-colors hover:border-orange-300 hover:bg-orange-50/40 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
        >
          <Search size={17} className="text-slate-400" />
          <span>Search developer tools...</span>
        </button>
      </div>
    </header>
  );
}
