import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { LayoutDashboard, History, User, CreditCard, Settings, Wrench, LogOut, ShieldCheck } from "lucide-react";

const workspace = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "History", path: "/history", icon: History },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Billing & API", path: "/billing", icon: CreditCard },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

const tools = [
  { name: "JSON Formatter", path: "/tools/json" },
  { name: "Base64 Encoder", path: "/tools/base64" },
  { name: "JWT Decoder", path: "/tools/jwt" },
  { name: "UUID Generator", path: "/tools/uuid" },
  { name: "Password Generator", path: "/tools/password" },
  { name: "Hash Generator", path: "/tools/hash" },
  { name: "URL Encoder", path: "/tools/url" },
  { name: "Timestamp Converter", path: "/tools/timestamp" },
  { name: "QR Generator", path: "/tools/qr" },
  { name: "Regex Tester", path: "/tools/regex" },
];

const admin = [
  { name: "Admin", path: "/admin" },
  { name: "Users", path: "/admin/users" },
  { name: "Roles", path: "/admin/roles" },
  { name: "Permissions", path: "/admin/permissions" },
];

function SidebarLink({ name, path, icon: Icon }: { name: string; path: string; icon?: typeof LayoutDashboard }) {
  return (
    <NavLink to={path} className={({ isActive }) => `group mx-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${isActive ? "bg-orange-50 text-orange-600 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
      {Icon ? <Icon className="h-[17px] w-[17px] shrink-0" strokeWidth={2} /> : <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 group-hover:bg-orange-400" />}
      <span className="truncate">{name}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-slate-200 bg-white text-slate-900">
      <div className="border-b border-slate-100 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/20">&lt;/&gt;</div>
          <div><p className="text-[15px] font-black tracking-tight text-slate-950">DevTools Hub</p><p className="text-[11px] font-medium text-slate-400">Developer workspace</p></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-5">
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
        <nav className="space-y-0.5">
          {workspace.map((item) => <SidebarLink key={item.path} {...item} />)}
        </nav>

        <div className="my-5 border-t border-slate-100" />
        <div className="flex items-center justify-between px-3 pb-2"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Developer tools</p><Wrench className="h-3.5 w-3.5 text-slate-300" /></div>
        <nav className="space-y-0.5">
          {tools.map((item) => <SidebarLink key={item.path} {...item} />)}
        </nav>

        <div className="my-5 border-t border-slate-100" />
        <div className="flex items-center gap-2 px-3 pb-2"><ShieldCheck className="h-3.5 w-3.5 text-slate-300" /><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Administration</p></div>
        <nav className="space-y-0.5">
          {admin.map((item) => <SidebarLink key={item.path} {...item} />)}
        </nav>
      </div>

      <div className="border-t border-slate-100 p-3">
        <button onClick={() => { logout(); navigate("/login"); }} className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-500 transition hover:bg-red-50 hover:text-red-600">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
