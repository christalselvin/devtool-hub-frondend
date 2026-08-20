import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="pointer-events-none absolute left-[-12rem] top-20 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[-5rem] h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-14 sm:px-8 sm:py-16 lg:min-h-[500px] lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="min-w-0 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-orange-700">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Free developer toolkit
          </span>

          <h1 className="mt-6 max-w-[680px] text-5xl font-black leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px]">
            Build faster.
            <br />
            <span className="text-orange-500">Ship smarter.</span>
          </h1>

          <p className="mt-6 max-w-[600px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Simple, fast developer utilities for formatting, encoding, hashing,
            decoding, testing, and everyday engineering work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/tools/json"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Explore tools <span className="ml-2">→</span>
            </Link>
            <Link
              to="/register"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 transition-all hover:border-orange-300 hover:bg-orange-50"
            >
              Create free account
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="font-bold text-slate-800">10+ free tools</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>No setup</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Works in your browser</span>
          </div>
        </div>

        <div className="relative w-full lg:pl-2">
          <div className="absolute -inset-5 rounded-[32px] bg-orange-100/70 blur-2xl" />
          <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/20">
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">developer-tools</span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">JSON Formatter</p>
                  <p className="mt-1 text-sm font-bold text-white">Clean output in seconds</p>
                </div>
                <span className="rounded-lg bg-orange-500/10 px-2.5 py-1 text-xs font-bold text-orange-300">Valid ✓</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4 font-mono text-sm leading-7">
                <div className="text-orange-400">&#123;</div>
                <div className="pl-4"><span className="text-slate-400">"name"</span><span className="text-slate-600">: </span><span className="text-emerald-400">"DevTools Hub"</span><span className="text-slate-500">,</span></div>
                <div className="pl-4"><span className="text-slate-400">"fast"</span><span className="text-slate-600">: </span><span className="text-orange-300">true</span><span className="text-slate-500">,</span></div>
                <div className="pl-4"><span className="text-slate-400">"free"</span><span className="text-slate-600">: </span><span className="text-orange-300">true</span></div>
                <div className="text-orange-400">&#125;</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500">Tools</p>
                  <p className="mt-1 text-sm font-black text-white">10+</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <p className="text-[10px] font-bold uppercase text-slate-500">Setup</p>
                  <p className="mt-1 text-sm font-black text-white">None</p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-center">
                  <p className="text-[10px] font-bold uppercase text-orange-300">Status</p>
                  <p className="mt-1 text-sm font-black text-white">Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
