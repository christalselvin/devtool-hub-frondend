import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, FileText, KeyRound, LayoutDashboard, LogOut, Settings, ShieldCheck, Users } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { isAdminUser } from "../utils/permissions";

const links = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard, permission: "view_dashboard" },
  { label: "Analytics", path: "/admin/analytics", icon: BarChart3, permission: "view_dashboard" },
  { label: "Users", path: "/admin/users", icon: Users, permission: "manage_users" },
  { label: "Roles", path: "/admin/roles", icon: ShieldCheck, permission: "manage_roles" },
  { label: "Permissions", path: "/admin/permissions", icon: KeyRound, permission: "manage_permissions" },
  { label: "Audit logs", path: "/admin/audit-logs", icon: FileText, permission: "view_dashboard" },
  { label: "Settings", path: "/admin/settings", icon: Settings, permission: "manage_settings" },
];

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const hasPermission = useAuthStore((state) => state.hasPermission);
  if (!isAdminUser(user)) return null;
  const visibleLinks = links.filter(({ permission }) => hasPermission(permission));
  const displayName = user?.username || user?.email || "Administrator";

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="border-b border-slate-100 px-5 py-5">
          <p className="text-lg font-black tracking-tight text-slate-950">DevTools Hub</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-500">Control center</p>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Administration navigation">
          {visibleLinks.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} end={path === "/admin"} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${isActive ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}>
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
        <button type="button" onClick={() => { logout(); window.location.href = "/login"; }} className="m-3 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">Administration</p>
              <h1 className="mt-1 text-lg font-black sm:text-xl">Control center</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-semibold text-slate-700 sm:block">{displayName}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600"><ShieldCheck className="h-5 w-5" /></span>
            </div>
          </div>
          <nav className="mt-4 flex gap-2 overflow-x-auto lg:hidden" aria-label="Mobile administration navigation">
            {visibleLinks.map(({ label, path, icon: Icon }) => (
              <NavLink key={path} to={path} end={path === "/admin"} className={({ isActive }) => `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${isActive ? "bg-orange-50 text-orange-600" : "bg-slate-50 text-slate-600"}`}>
                <Icon className="h-4 w-4" />{label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main className="min-w-0 flex-1 overflow-auto p-3 sm:p-5 lg:p-8"><div className="mx-auto max-w-[1440px]"><Outlet /></div></main>
      </div>
    </div>
  );
}
