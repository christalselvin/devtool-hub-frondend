import { Activity, CheckCircle2, Wrench } from "lucide-react";

interface Props { title: string; value: string | number; }

export default function StatsCard({ title, value }: Props) {
  const Icon = title === "Developer Tools" ? Wrench : title === "Tool Runs" ? Activity : CheckCircle2;
  return <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-100 hover:shadow-md sm:p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-slate-500">{title}</p><p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{value}</p></div><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500"><Icon className="h-5 w-5" /></span></div><div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-1/3 rounded-full bg-orange-400 transition-all group-hover:w-1/2" /></div></div>;
}
