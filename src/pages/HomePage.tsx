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
    <div className="min-h-screen bg-white text-slate-950">
      <Seo path="/" />

      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 font-mono text-sm font-bold text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
              {"</>"}
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-950">
              Dev<span className="text-orange-500">Tools</span> Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/tools">
              Tools
            </Link>
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/categories">
              Categories
            </Link>
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/about">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-500/15"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-5 py-14 text-center shadow-sm sm:px-10 lg:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-xs font-semibold text-orange-700">
              Free developer toolkit
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Every dev tool you reach for,
              <span className="block text-orange-500">in one place.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Format, encode, hash, decode, test, and generate — fast, free, and built for everyday engineering work.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/tools/json"
                className="w-full rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md sm:w-auto"
              >
                Try a tool free
              </Link>
              <Link
                to="/register"
                className="w-full rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-900 transition-all hover:border-orange-300 hover:bg-orange-50 sm:w-auto"
              >
                Create free account
              </Link>
            </div>
          </div>
        </section>

        <section aria-label="Developer tools" className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500">Popular tools</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">Tools developers use every day</h2>
            </div>
            <Link className="hidden text-sm font-bold text-orange-600 hover:text-orange-700 sm:block" to="/tools">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {TOOLS.map(({ icon: Icon, label, path }) => (
              <Link
                key={label}
                to={path}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-snug text-slate-700 group-hover:text-slate-950">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        <AdSenseSlot />

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-orange-100 bg-orange-50 p-7 text-center sm:p-9">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">Free tools now. More power when you need it.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Save your tool history and prepare for developer API access with a free DevTools Hub account.
          </p>
          <Link
            to="/register"
            className="mt-5 inline-flex rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md"
          >
            Create your free account
          </Link>
        </section>
      </main>
    </div>
  );
}
