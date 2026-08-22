import { Activity, CheckCircle2, Wrench } from "lucide-react";

interface Props { title: string; value: string | number; accent?: "orange" | "purple"; }

export default function StatsCard({ title, value, accent = "orange" }: Props) {
  const Icon = title === "Developer Tools" ? Wrench : title === "Tool Runs" ? Activity : CheckCircle2;
  const tone = accent === "purple" ? "bg-purple-50 text-purple-600" : "bg-orange-50 text-orange-500";
  const bar = accent === "purple" ? "bg-purple-400" : "bg-orange-400";
  return <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-100 hover:shadow-md sm:p-6"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate text-xs font-semibold text-slate-500">{title}</p><p className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{value}</p></div><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone}`}><Icon className="h-5 w-5" /></span></div><div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-100"><div className={`h-full w-1/3 rounded-full ${bar} transition-all group-hover:w-1/2`} /></div></div>;
}
