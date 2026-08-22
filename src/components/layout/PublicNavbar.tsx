import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-none stroke-current stroke-[1.8]">
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
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.75 w-4.75 fill-current">
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl"
    >
      <div className="relative mx-auto flex min-h-18 w-full max-w-360 items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:gap-2 lg:px-8 xl:gap-4">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center pr-14 lg:pr-0"
          aria-label="DevTools Hub home"
        >
          {!logoError ? (
            <img
              src="/logo.svg"
              alt="DevTools Hub"
              className="h-9 w-auto sm:h-10"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-mono text-xs font-black text-white">
              &lt;/&gt;
            </span>
          )}
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 pl-6 lg:flex lg:pl-10 xl:gap-2 xl:pl-16">
          <nav className="flex h-11 items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex h-full items-center rounded-lg px-3 text-sm font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600 xl:px-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="mx-2 h-7 w-px bg-slate-200" aria-hidden="true" />

          <div className="flex h-11 items-center gap-1.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-orange-50 hover:text-orange-600"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <span className="mx-2 h-7 w-px bg-slate-200" aria-hidden="true" />

          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15"
          >
            <Search size={19} />
          </button>

          <Link
            to="/login"
            className="ml-1 flex h-11 items-center rounded-lg px-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-[0_5px_14px_rgba(249,115,22,0.2)] hover:bg-orange-600 hover:shadow-[0_8px_18px_rgba(249,115,22,0.26)] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 sm:right-6 sm:h-11 sm:w-11 lg:hidden"
        >
          {mobileOpen ? <X size={20} className="sm:h-5.5 sm:w-5.5" /> : <Menu size={20} className="sm:h-5.5 sm:w-5.5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-160 flex-col px-5 py-6 sm:px-8 sm:py-7 md:max-w-180"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-base font-semibold text-slate-800 hover:bg-orange-50 hover:text-orange-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="my-6 border-t border-slate-100" aria-hidden="true" />

            <div>
              <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                Follow us
              </p>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-slate-100" aria-hidden="true" />

            <div className="flex flex-col gap-3">
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white hover:bg-orange-600"
              >
                Get started
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 hover:border-orange-300 hover:bg-orange-50"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
