import { Link, useNavigate } from "react-router-dom";
import {
  CodeIcon,
  HashIcon,
  BracesIcon,
  KeyIcon,
  QrIcon,
  FingerprintIcon,
  LockIcon,
  RegexIcon,
  ClockIcon,
  LinkIcon,
} from "../components/ui/Icons";
import { useAuthStore } from "../store/authStore";

// Adjust these paths to match your actual router config.
const TOOLS = [
  { icon: CodeIcon, label: "Base64 & URL", path: "/tools/base64" },
  { icon: HashIcon, label: "Hashing", path: "/tools/hash" },
  { icon: BracesIcon, label: "JSON Formatter", path: "/tools/json" },
  { icon: KeyIcon, label: "JWT Decoder", path: "/tools/jwt" },
  { icon: QrIcon, label: "QR Codes", path: "/tools/qr" },
  { icon: FingerprintIcon, label: "UUID Generator", path: "/tools/uuid" },
  { icon: LockIcon, label: "Password Generator", path: "/tools/password" },
  { icon: RegexIcon, label: "Regex Tester", path: "/tools/regex" },
  { icon: ClockIcon, label: "Timestamp Converter", path: "/tools/timestamp" },
  { icon: LinkIcon, label: "URL Encoder", path: "/tools/url" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = !!token;

  const handleToolClick = (path: string) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      // Send to login, carrying the intended tool as a redirect target.
      navigate(`/login?redirect=${encodeURIComponent(path)}`);
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <header className="border-b border-slate-200/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-700 font-mono text-sm font-bold text-white">
              {"</>"}
            </div>
            <span className="text-base font-bold tracking-tight text-ink">
              DevTools Hub
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink sm:px-4"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-indigo-700 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-900/10 transition-colors hover:bg-indigo-800 sm:px-4"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 font-mono text-xs font-medium text-indigo-700">
            v1.0 — 10 tools, one toolkit
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Every dev tool you
            <br className="hidden sm:block" /> reach for daily.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base text-slate-500 sm:text-lg">
            Encode, hash, decode, and generate — without twenty browser tabs
            open. Fast, free, and built for the terminal-minded.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="w-full rounded-lg bg-indigo-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-indigo-900/10 transition-colors hover:bg-indigo-800 sm:w-auto"
            >
              Create free account
            </Link>
            <Link
              to="/login"
              className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-slate-50 sm:w-auto"
            >
              I already have one
            </Link>
          </div>
        </div>

        {/* Tool grid — click routes straight in if logged in, otherwise via login */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {TOOLS.map(({ icon: Icon, label, path }) => (
            <button
              key={label}
              onClick={() => handleToolClick(path)}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm shadow-slate-900/[0.02] transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 transition-colors group-hover:bg-indigo-700 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium leading-snug text-slate-600">
                {label}
              </span>
            </button>
          ))}
        </div>

        {!isAuthenticated && (
          <p className="mt-8 text-center text-sm text-slate-400">
            You'll be asked to log in the first time you open a tool.
          </p>
        )}
      </main>
    </div>
  );
}