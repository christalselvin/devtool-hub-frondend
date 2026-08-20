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

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-mono text-sm font-bold text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
              {"</>"}
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">
              Dev<span className="text-orange-500">Tools</span> Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/tools">Tools</Link>
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/categories">Categories</Link>
            <Link className="text-sm font-semibold text-slate-700 transition-colors hover:text-orange-500" to="/about">About</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600">
              Login
            </Link>
            <Link to="/register" className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-500/15">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-100 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-10 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-orange-700">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Free developer toolkit
              </span>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Build faster.
                <br />
                <span className="text-orange-500">Ship smarter.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Format, encode, hash, decode, test, and generate with a focused collection of free tools built for everyday engineering work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/tools/json" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25">
                  Explore tools
                  <span className="ml-2">→</span>
                </Link>
                <Link to="/register" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:border-orange-300 hover:bg-orange-50">
                  Create free account
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">10+ everyday tools</span>
                <span>•</span>
                <span>No setup</span>
                <span>•</span>
                <span>Free to use</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -inset-4 rounded-[28px] bg-orange-100/70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/15">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">json-formatter</span>
                </div>

                <div className="grid gap-5 p-5 sm:p-7">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-mono text-sm leading-7 text-slate-300">
                    <div><span className="text-orange-400">{`{`}</span></div>
                    <div className="pl-4"><span className="text-slate-500">"name"</span><span className="text-slate-500">: </span><span className="text-green-400">"DevTools Hub"</span><span>,</span></div>
                    <div className="pl-4"><span className="text-slate-500">"fast"</span><span className="text-slate-500">: </span><span className="text-orange-300">true</span><span>,</span></div>
                    <div className="pl-4"><span className="text-slate-500">"free"</span><span className="text-slate-500">: </span><span className="text-orange-300">true</span></div>
                    <div><span className="text-orange-400">{`}`}</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs font-semibold text-slate-500">FORMAT</p>
                      <p className="mt-2 text-sm font-bold text-white">Pretty JSON</p>
                    </div>
                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
                      <p className="text-xs font-semibold text-orange-300">STATUS</p>
                      <p className="mt-2 text-sm font-bold text-white">Valid ✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Developer tools" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">Popular tools</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Tools developers use every day</h2>
              <p className="mt-2 text-sm text-slate-500">Quick access to the utilities you reach for most.</p>
            </div>
            <Link className="hidden rounded-lg px-3 py-2 text-sm font-bold text-orange-600 hover:bg-orange-50 sm:block" to="/tools">View all →</Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {TOOLS.map(({ icon: Icon, label, path }) => (
              <Link key={label} to={path} className="group flex min-h-[148px] flex-col items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-snug text-slate-800 group-hover:text-slate-950">{label}</span>
                <span className="text-xs font-semibold text-slate-400 transition-colors group-hover:text-orange-500">Open tool →</span>
              </Link>
            ))}
          </div>
        </section>

        <AdSenseSlot />

        <section className="mx-auto mb-16 max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">DevTools Hub</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Free tools now. More power when you need it.</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Save your tool history and prepare for developer API access with a free account.
              </p>
              <Link to="/register" className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600">
                Create your free account
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
