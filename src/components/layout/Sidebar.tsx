import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
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
  LogOut,
  Wrench,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useAuthStore } from "../../store/authStore";

type IconType = typeof Braces;

type SidebarItem = {
  name: string;
  path: string;
  icon: IconType;
};

const tools: SidebarItem[] = [
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

function SidebarLink({
  item,
  collapsed,
}: {
  item: SidebarItem;
  collapsed: boolean;
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      title={collapsed ? item.name : undefined}
      className={({ isActive }) =>
        `group relative mx-2 flex items-center rounded-xl py-2.5 text-[13px] font-semibold transition-all duration-200 ${
          collapsed ? "justify-center px-2" : "gap-3 px-3"
        } ${
          isActive
            ? "bg-orange-50 text-orange-600 shadow-[0_4px_12px_rgba(249,115,22,0.08)]"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Active indicator */}
          <span
            className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-orange-500 transition-opacity ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Icon */}
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-orange-500 text-white shadow-[0_6px_14px_rgba(249,115,22,0.22)]"
                : "bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500"
            }`}
          >
            <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
          </span>

          {/* Label */}
          {!collapsed && (
            <span className="min-w-0 flex-1 truncate">{item.name}</span>
          )}

          {/* Hover indicator */}
          {!collapsed && (
            <span
              className={`text-slate-300 transition-all ${
                isActive
                  ? "translate-x-0 text-orange-400 opacity-100"
                  : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              →
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside
      className={`flex h-screen shrink-0 flex-col border-r border-slate-200 bg-white text-slate-900 transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="border-b border-slate-100 p-3">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {/* Logo */}
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "gap-3"
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 font-mono text-sm font-black text-white shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
              &lt;/&gt;
            </div>

            {!collapsed && (
              <div className="min-w-0">
                <p className="truncate text-[15px] font-black tracking-tight text-slate-950">
                  DevTools Hub
                </p>

                <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                  Developer workspace
                </p>
              </div>
            )}
          </div>

          {/* Collapse button */}
          {!collapsed && (
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-orange-50 hover:text-orange-500"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Expand button */}
        {collapsed && (
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label="Expand sidebar"
            title="Expand sidebar"
            className="mt-3 flex h-9 w-full items-center justify-center rounded-lg text-slate-400 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <PanelLeftOpen className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tools */}
      <div className="flex-1 overflow-y-auto py-5">
        {!collapsed && (
          <div className="mb-3 flex items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <Wrench className="h-3.5 w-3.5" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Developer tools
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-400">
              {tools.length}
            </span>
          </div>
        )}

        {collapsed && (
          <div className="mb-3 flex justify-center">
            <span
              title="Developer tools"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-500"
            >
              <Wrench className="h-4 w-4" />
            </span>
          </div>
        )}

        <nav className="space-y-1">
          {tools.map((item) => (
            <SidebarLink
              key={item.path}
              item={item}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-slate-100 bg-slate-50/60 p-3">
        <button
          type="button"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          title={collapsed ? "Logout" : undefined}
          className={`group flex w-full items-center rounded-xl border border-transparent py-2.5 text-sm font-bold text-slate-500 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-600 ${
            collapsed ? "justify-center px-2" : "gap-3 px-3"
          }`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm transition-colors group-hover:bg-red-100 group-hover:text-red-600">
            <LogOut className="h-4 w-4" />
          </span>

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}