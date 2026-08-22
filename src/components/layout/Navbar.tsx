import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Search, UserRound, History, User, CreditCard, Settings, ShieldCheck, Users, KeyRound, LogOut, ChevronDown, UserCog, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { isAdminUser } from "../../utils/permissions";

const accountLinks = [
  { label: "History", path: "/history", icon: History },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Billing", path: "/billing", icon: CreditCard },
];

const adminLinks = [
  { label: "Admin", path: "/admin", icon: ShieldCheck, permission: "view_dashboard" },
  { label: "Users", path: "/admin/users", icon: Users, permission: "manage_users" },
  { label: "Roles", path: "/admin/roles", icon: UserCog, permission: "manage_roles" },
  { label: "Permissions", path: "/admin/permissions", icon: KeyRound, permission: "manage_permissions" },
  { label: "Settings", path: "/admin/settings", icon: Settings, permission: "manage_settings" },
];

export default function Navbar({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const hasPermission = useAuthStore((state) => state.hasPermission);
  const isAdmin = isAdminUser(user);
  const visibleAdminLinks = isAdmin
    ? adminLinks.filter(({ permission }) => hasPermission(permission))
    : [];
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [menuOpen]);

  const displayName = user ? [user.first_name, user.last_name].filter(Boolean).join(" ") || user.username || user.email : "Developer";
  const initials = displayName.split(/\s+/).filter(Boolean).map((part) => part[0] ?? "").join("").slice(0, 2).toUpperCase() || "D";
  const menuLinks = [...accountLinks, ...visibleAdminLinks];
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/tools${searchQuery.trim() ? `?search=${encodeURIComponent(searchQuery.trim())}` : ""}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] w-full max-w-screen-2xl items-center gap-5 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Open navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <form onSubmit={submitSearch} className="hidden flex-1 justify-center md:flex">
          <div className="group flex h-11 w-full max-w-3xl items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 text-left text-sm text-slate-500 focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-500/10">
            <Search size={18} className="shrink-0 text-slate-400 group-hover:text-orange-500" />
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search developer tools..." aria-label="Search developer tools" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-500" />
            <kbd className="hidden rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-400 sm:inline-block">/</kbd>
          </div>
        </form>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Administration navigation">
          {visibleAdminLinks.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} className={({ isActive }) => `flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold ${isActive ? "bg-orange-50 text-orange-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
              <Icon className="h-3.5 w-3.5" />{label}
            </NavLink>
          ))}
        </nav>

        <div className="relative shrink-0" ref={menuRef}>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-haspopup="menu" aria-label="Open account menu" className="group flex items-center gap-2 rounded-xl border border-transparent px-2 py-1.5 hover:border-slate-200 hover:bg-slate-50">
            <span className="hidden max-w-52 truncate text-sm font-semibold text-slate-800 md:block">{displayName}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600"><UserRound className="h-[18px] w-[18px]" /></span>
            <ChevronDown className={`hidden h-4 w-4 text-slate-400 sm:block ${menuOpen ? "rotate-180 text-orange-500" : ""}`} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
              <div className="border-b border-slate-100 bg-gradient-to-br from-orange-50 to-white px-4 py-4"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">{initials}</span><div className="min-w-0"><p className="truncate text-sm font-bold text-slate-900">{displayName}</p><p className="truncate text-xs text-slate-400">{user?.email}</p></div></div></div>
              <div className="p-2"><p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Account</p><nav className="space-y-0.5" aria-label="Account navigation">{menuLinks.map(({ label, path, icon: Icon }) => <NavLink key={path} to={path} onClick={() => setMenuOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${isActive ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50"}`}><Icon className="h-4 w-4" /><span>{label}</span></NavLink>)}</nav></div>
              <div className="border-t border-slate-100 p-2"><button type="button" onClick={() => { logout(); navigate("/login"); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600"><LogOut className="h-4 w-4" /><span>Logout</span></button></div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={submitSearch} className="border-t border-slate-100 px-4 py-2.5 md:hidden"><div className="flex h-10 w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-500 focus-within:border-orange-300"><Search size={17} /><input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search developer tools..." aria-label="Search developer tools" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-500" /></div></form>
    </header>
  );
}
