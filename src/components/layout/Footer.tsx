import { Link } from "react-router-dom";
import { AtSign, MessageCircle, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: AtSign,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 py-12 sm:py-14 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              aria-label="DevTools Hub home"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <img
                src="/logo.svg"
                alt="DevTools Hub"
                className="h-11 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Simple, fast developer tools built to make everyday engineering
              work easier.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm font-semibold text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
              >
                𝕏
              </a>

              <a
                href="https://www.reddit.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Reddit"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm font-bold text-slate-500 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500"
              >
                ●
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Explore
              </p>

              <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
                <Link to="/tools" className="transition hover:text-orange-500">
                  Tools
                </Link>
                <Link
                  to="/"
                  className="transition hover:text-orange-500"
                >
                  Categories
                </Link>
              </nav>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Company
              </p>

              <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
                <Link to="/" className="transition hover:text-orange-500">
                  About
                </Link>
                <Link
                  to="/"
                  className="transition hover:text-orange-500"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Account
              </p>

              <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
                <Link to="/login" className="transition hover:text-orange-500">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-1 transition hover:text-orange-500"
                >
                  Get started
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-100 py-5">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} DevTools Hub. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="transition hover:text-orange-500"
              >
                Privacy
              </Link>

              <Link
                to="/"
                className="transition hover:text-orange-500"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}