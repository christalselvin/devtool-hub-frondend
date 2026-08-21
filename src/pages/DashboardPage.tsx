import StatsCard from "../components/dashboard/StatsCard";
import RecentHistory from "../components/dashboard/RecentHistory";
import { Activity, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const username =
    user?.username ||
    user?.first_name ||
    user?.email?.split("@")[0] ||
    "Developer";

  return (
    <div className="relative min-h-full overflow-hidden pb-8">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-slate-50"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-[-160px] h-[420px] w-[420px] rounded-full bg-orange-100/60 blur-[110px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[-180px] top-[420px] h-[360px] w-[360px] rounded-full bg-orange-50/70 blur-[100px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] space-y-6 sm:space-y-7">
        {/* Welcome Hero */}
        <section className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full bg-orange-100/80 blur-[90px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-orange-100/70"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute right-14 top-14 h-16 w-16 rounded-full border border-orange-100/60"
          />

          <div className="relative flex flex-col gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-8">
            {/* Welcome Content */}
            <div className="max-w-2xl">
              <h1 className="text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[40px]">
                Welcome back,{" "}
                <span className="text-orange-500">{username}</span>
                <span className="text-slate-950">🤞</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Everything you need for fast, focused developer work. Format,
                encode, decode, generate, test, and ship faster.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 md:-translate-x-3">
                <Link
                  to="/history"
                  className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                >
                  View history
                </Link>

                <Link
                  to="/tools"
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(249,115,22,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_12px_24px_rgba(249,115,22,0.25)]"
                >
                  Explore tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Developer Visual */}
            <div className="relative hidden shrink-0 lg:mr-5 lg:block xl:mr-10">
              <div className="relative flex h-32 w-48 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
                <div className="absolute left-4 right-4 top-4 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="font-mono text-xs leading-5">
                  <div className="text-orange-400">{"{"}</div>

                  <div className="pl-4 text-slate-400">
                    <span className="text-orange-300">tools</span>
                    <span className="text-slate-600">:</span>{" "}
                    <span className="text-emerald-400">10</span>
                  </div>

                  <div className="pl-4 text-slate-400">
                    <span className="text-orange-300">status</span>
                    <span className="text-slate-600">:</span>{" "}
                    <span className="text-emerald-400">"ready"</span>
                  </div>

                  <div className="text-orange-400">{"}"}</div>
                </div>

                <div className="absolute -bottom-2.5 -right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workspace Overview */}
        <section>
          <div className="mb-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
              Overview
            </p>

            <h2 className="mt-1 text-lg font-black tracking-tight text-slate-950 sm:text-xl">
              Your workspace
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-4">
            <StatsCard title="Developer Tools" value={10} />
            <StatsCard title="Tool Runs" value={0} />
            <StatsCard title="Account" value="Active" />
          </div>
        </section>

        {/* Developer Activity */}
        <section className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-orange-50 blur-3xl"
          />

          {/* Activity Header */}
          <div className="relative border-b border-slate-100 px-5 py-3.5 sm:px-5">
            <div className="flex items-center gap-3">
              {/* Icon moved to left */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <Activity className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
                  Developer activity
                </p>

                <h2 className="mt-0.5 text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                  Your workspace at a glance
                </h2>

                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  Keep track of your developer workflow and tool usage.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Stats */}
          <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-5 py-3.5">
              <p className="text-[11px] font-semibold text-slate-400">
                Tool runs
              </p>

              <p className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                0
              </p>

              <p className="text-[11px] font-medium text-slate-400">
                Total executions
              </p>
            </div>

            <div className="px-5 py-3.5">
              <p className="text-[11px] font-semibold text-slate-400">
                Most used
              </p>

              <p className="mt-1 truncate text-base font-black text-slate-950">
                JSON Formatter
              </p>

              <p className="text-[11px] font-medium text-slate-400">
                Your primary utility
              </p>
            </div>

            <div className="px-5 py-3.5">
              <p className="text-[11px] font-semibold text-slate-400">
                Workspace
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-base font-black text-slate-950">
                  Ready
                </span>
              </div>

              <p className="text-[11px] font-medium text-slate-400">
                Everything is working
              </p>
            </div>
          </div>
        </section>

        {/* Recent History */}
        <section className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
          <RecentHistory />
        </section>

        {/* Footer Status */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-0 text-[10px] font-semibold text-slate-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All systems ready
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

          <span>Fast developer tools</span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

          <span>Built for your workflow</span>
        </div>
      </div>
    </div>
  );
}
