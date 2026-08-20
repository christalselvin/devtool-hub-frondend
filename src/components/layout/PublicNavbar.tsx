import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Tools", path: "/tools" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <span aria-hidden="true" className="text-[19px] font-black leading-none">f</span>,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: <span aria-hidden="true" className="text-[18px] font-medium leading-none">𝕏</span>,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[19px] w-[19px] fill-current">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="12" r="1.25" className="fill-white" />
        <circle cx="15" cy="12" r="1.25" className="fill-white" />
        <path d="M8.5 15.1c1.8 1.7 5.2 1.7 7 0" className="fill-none stroke-white stroke-[1.4]" />
        <path d="M14.2 5.8l1-2.5 2.3.5" className="fill-none stroke-current stroke-[1.2]" />
        <circle cx="17.7" cy="3.8" r="1" className="fill-current" />
      </svg>
    ),
  },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1440px] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="DevTools Hub home"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-orange-500 text-white shadow-[0_6px_18px_rgba(249,115,22,0.22)] transition-transform duration-200 group-hover:scale-105">
            {!logoError ? (
              <img
                src="/logo.svg"
                alt="DevTools Hub logo"
                className="h-full w-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-mono text-xs font-black">&lt;/&gt;</span>
            )}
          </span>
          <span className="whitespace-nowrap text-[18px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[20px]">
            Dev<span className="text-orange-500">Tools</span>Hub
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-orange-50 hover:text-orange-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-1.5 md:flex">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600"
            >
              {social.icon}
            </a>
          ))}

          <span className="mx-2 h-7 w-px bg-slate-200" aria-hidden="true" />

          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15"
          >
            <Search size={19} />
          </button>

          <Link
            to="/login"
            className="ml-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-orange-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-orange-500 px-5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(249,115,22,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_8px_18px_rgba(249,115,22,0.26)] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 text-sm font-semibold text-slate-800 hover:border-orange-300 hover:bg-orange-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white hover:bg-orange-600"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
