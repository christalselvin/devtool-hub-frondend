import StatsCard from "../components/dashboard/StatsCard";
import QuickTools from "../components/dashboard/QuickTools";
import RecentHistory from "../components/dashboard/RecentHistory";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="space-y-7 pb-8 sm:space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-600"><Sparkles className="h-3 w-3" /> Developer workspace</div>
            <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Welcome back 👋</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">Everything you need for fast, focused developer work.</p>
          </div>
          <Link to="/tools" className="inline-flex w-fit items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">Explore tools <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Developer Tools" value={10} />
        <StatsCard title="Tool Runs" value={0} />
        <StatsCard title="Account" value="Active" />
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">Quick access</p><h2 className="mt-1 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">Start with a developer tool</h2><p className="mt-1 text-sm text-slate-500">Your most useful utilities, ready when you are.</p></div><Link to="/tools" className="hidden items-center gap-1 text-sm font-bold text-slate-500 hover:text-orange-600 sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link></div>
        <QuickTools />
      </section>

      <RecentHistory />
    </div>
  );
}
