import { Link } from "react-router-dom";
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
import Seo from "../components/seo/Seo";
import AdSenseSlot from "../components/monetization/AdSenseSlot";

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
  return (
    <div className="min-h-screen bg-bg">
      <Seo path="/" />

      <header className="border-b border-slate-200/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-700 font-mono text-sm font-bold text-white">
              {"</>"}
            </div>
            <span className="text-base font-bold tracking-tight text-ink">DevTools Hub</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
              Login
            </Link>
            <Link to="/register" className="rounded-lg bg-indigo-700 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-800 sm:px-4">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 font-mono text-xs font-medium text-indigo-700">
            Free developer toolkit
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Every dev tool you
            <br className="hidden sm:block" /> reach for daily.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base text-slate-500 sm:text-lg">
            Format, encode, hash, decode, test, and generate — fast, free, and built for everyday engineering work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/tools/json" className="w-full rounded-lg bg-indigo-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-800 sm:w-auto">
              Try a tool free
            </Link>
            <Link to="/register" className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-ink hover:bg-slate-50 sm:w-auto">
              Create free account
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {TOOLS.map(({ icon: Icon, label, path }) => (
            <Link
              key={label}
              to={path}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium leading-snug text-slate-600">{label}</span>
            </Link>
          ))}
        </div>

        <AdSenseSlot />

        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
          <h2 className="text-2xl font-bold text-ink">Free tools now. More power when you need it.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Save your tool history and prepare for developer API access with a free DevTools Hub account.
          </p>
          <Link to="/register" className="mt-5 inline-flex rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800">
            Create your free account
          </Link>
        </section>
      </main>
    </div>
  );
}
