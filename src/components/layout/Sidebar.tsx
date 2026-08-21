import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import {
  LayoutDashboard,
  History,
  User,
  CreditCard,
  Settings,
  Wrench,
  LogOut,
  ShieldCheck,
  Braces,
  Binary,
  KeyRound,
  Fingerprint,
  LockKeyhole,
  Hash,
  Link2,
  Clock3,
  QrCode,
  Regex,
  ChevronRight,
} from "lucide-react";

const workspace = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "History", path: "/history", icon: History },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Billing & API", path: "/billing", icon: CreditCard },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

const tools = [
  { name: "JSON Formatter", path: "/tools/json", icon: Braces },
  { name: "Base64 Encoder", path: "/tools/base64", icon: Binary },
  { name: "JWT Decoder", path: "/tools/jwt", icon: KeyRound },
  { name: "UUID Generator", path: "/tools/uuid", icon: Fingerprint },
  { name: "Password Generator", path: "/tools/password", icon: LockKeyhole },
  { name: "Hash Generator", path: "/tools/hash", icon: Hash },
  { name: "URL Encoder", path: "/tools/url", icon: Link2 },
  { name: "Timestamp Converter", path: "/tools/timestamp", icon: Clock3 },
  { name: "QR Generator", path: "/tools/qr", icon: QrCode },
  { name: "Regex Tester", path: "/tools/regex", icon: Regex },
];

const admin = [
  { name: "Admin", path: "/admin" },
  { name: "Users", path: "/admin/users" },
  { name: "Roles", path: "/admin/roles" },
  { name: "Permissions", path: "/admin/permissions" },
];

type IconType = typeof LayoutDashboard;

function SidebarLink({
  name,
  path,
  icon: Icon,
}: {
  name: string;
  path: string;
  icon?: IconType;
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        [
          "group relative mx-2 flex items-center gap-3 rounded-xl px-3 py-2.5",
          "text-[13px] font-semibold transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30",
          isActive
            ? "bg-orange-50 text-orange-600 shadow-[0_2px_8px_rgba(249,115,22,0.08)]"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={[
              "absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full",
              "bg-orange-500 transition-all duration-200",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          <span
            className={[
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              "transition-all duration-200",
              isActive
                ? "bg-white text-orange-500 shadow-sm"
                : "bg-transparent text-slate-400 group-hover:bg-white group-hover:text-slate-700",
            ].join(" ")}
          >
            {Icon ? (
              <Icon className="h-[16px] w-[16px]" strokeWidth={2} />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
            )}
          </span>

          <span className="min-w-0 flex-1 truncate">{name}</span>

          <ChevronRight
            className={[
              "h-3.5 w-3.5 transition-all duration-200",
              isActive
                ? "translate-x-0 text-orange-400 opacity-100"
                : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}

function SectionTitle({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: IconType;
}) {
  return (
    <div className="mb-2 flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-slate-300" />}
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="flex h-screen w-[258px] shrink-0 flex-col border-r border-slate-200 bg-white text-slate-900">
      {/* Brand */}
      <div className="border-b border-slate-100 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 font-mono text-sm font-black text-white shadow-[0_6px_18px_rgba(249,115,22,0.22)]">
            &lt;/&gt;
          </div>

          <div className="min-w-0">
            <p className="truncate text-[15px] font-black tracking-tight text-slate-950">
              DevTools Hub
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-slate-400">
              Developer workspace
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-2 py-5 [scrollbar-width:thin]">
        {/* Workspace */}
        <section>
          <SectionTitle icon={LayoutDashboard}>Workspace</SectionTitle>

          <nav className="space-y-0.5">
            {workspace.map((item) => (
              <SidebarLink key={item.path} {...item} />
            ))}
          </nav>
        </section>

        {/* Developer tools */}
        <div className="my-5 h-px bg-slate-100" />

        <section>
          <SectionTitle icon={Wrench}>Developer tools</SectionTitle>

          <nav className="space-y-0.5">
            {tools.map((item) => (
              <SidebarLink key={item.path} {...item} />
            ))}
          </nav>
        </section>

        {/* Administration */}
        <div className="my-5 h-px bg-slate-100" />

        <section>
          <SectionTitle icon={ShieldCheck}>Administration</SectionTitle>

          <nav className="space-y-0.5">
            {admin.map((item) => (
              <SidebarLink key={item.path} {...item} />
            ))}
          </nav>
        </section>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-100 bg-slate-50/70 p-3">
        <button
          type="button"
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="group flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left text-sm font-bold text-slate-500 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/20"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm transition-colors group-hover:text-red-500">
            <LogOut className="h-4 w-4" />
          </span>

          <span className="flex-1">Logout</span>

          <ChevronRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-red-400" />
        </button>
      </div>
    </aside>
  );
}