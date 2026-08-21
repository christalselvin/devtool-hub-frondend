import { useEffect, useRef, useState } from "react";
import {
  Search,
  UserRound,
  History,
  User,
  CreditCard,
  Settings,
  ShieldCheck,
  Users,
  KeyRound,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const navigation = [
  { label: "History", path: "/history", icon: History },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Billing", path: "/billing", icon: CreditCard },
  { label: "Settings", path: "/admin/settings", icon: Settings },
  { label: "Admin", path: "/admin", icon: ShieldCheck },
  { label: "Users", path: "/admin/users", icon: Users },
  { label: "Roles", path: "/admin/roles", icon: KeyRound },
  { label: "Permissions", path: "/admin/permissions", icon: ShieldCheck },
];

export default function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/login");
  };

  const displayName =
    user
      ? [user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username ||
        user.email
      : "Developer";

  const initials =
    displayName
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0] ?? "")
      .join("")
      .slice(0, 2)
      .toUpperCase() || "D";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] w-full max-w-screen-2xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="flex flex-1 justify-center">
          <button
            type="button"
            onClick={() => navigate("/search")}
            className="group flex h-11 w-full max-w-3xl items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 text-left text-sm text-slate-500 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50/40 hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
          >
            <Search
              size={18}
              className="shrink-0 text-slate-400 transition-colors group-hover:text-orange-500"
            />

            <span className="flex-1 truncate">
              Search developer tools...
            </span>

            <kbd className="hidden rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-400 sm:inline-block">
              /
            </kbd>
          </button>
        </div>

        {/* User Menu */}
        <div className="relative shrink-0" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            aria-label="Open account menu"
            className={`group flex items-center gap-2 rounded-xl border px-2 py-1.5 transition-all duration-200 ${
              menuOpen
                ? "border-orange-200 bg-orange-50"
                : "border-transparent hover:border-slate-200 hover:bg-slate-50"
            }`}
          >
            {/* Username */}
            <span className="hidden max-w-40 truncate text-sm font-semibold text-slate-800 md:block lg:max-w-52">
              {displayName}
            </span>

            {/* Human icon */}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-2 ring-transparent transition-all duration-200 group-hover:ring-orange-100">
              <UserRound className="h-[18px] w-[18px]" />
            </span>

            <ChevronDown
              className={`hidden h-4 w-4 text-slate-400 transition-transform duration-200 sm:block ${
                menuOpen ? "rotate-180 text-orange-500" : ""
              }`}
            />
          </button>

          {/* Account Dropdown */}
          {menuOpen && (
            <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
              {/* User Header */}
              <div className="border-b border-slate-100 bg-gradient-to-br from-orange-50 to-white px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white shadow-md shadow-orange-500/20">
                    {initials}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {displayName}
                    </p>

                    {user?.email && (
                      <p className="truncate text-xs text-slate-400">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Navigation */}
              <div className="p-2">
                <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Account
                </p>

                <nav className="space-y-0.5" aria-label="Account navigation">
                  {navigation.map(({ label, path, icon: Icon }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-orange-50 text-orange-600"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                        }`
                      }
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-orange-50 group-hover:text-orange-500">
                        <Icon className="h-4 w-4" />
                      </span>

                      <span>{label}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Logout */}
              <div className="border-t border-slate-100 p-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-red-50 hover:text-red-600"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-red-100 group-hover:text-red-500">
                    <LogOut className="h-4 w-4" />
                  </span>

                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
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