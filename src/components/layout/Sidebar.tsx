import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const menus = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Billing & API", path: "/billing" },
      { name: "History", path: "/history" },
      { name: "Profile", path: "/profile" },
      { name: "Admin", path: "/admin" },
      { name: "Users", path: "/admin/users" },
      { name: "Roles", path: "/admin/roles" },
      { name: "Permissions", path: "/admin/permissions" },
      { name: "Settings", path: "/admin/settings" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
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
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold text-blue-400">🚀 DevTools Hub</h1>
        <p className="mt-1 text-sm text-slate-400">Developer Toolkit</p>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {menus.map((section) => (
          <div key={section.title} className="mb-6">
            <h2 className="px-6 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {section.title}
            </h2>
            <nav className="flex flex-col">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `mx-3 my-1 rounded-lg px-4 py-3 transition ${isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-700 p-4">
        <button
          onClick={() => { logout(); navigate("/login"); }}
          className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
