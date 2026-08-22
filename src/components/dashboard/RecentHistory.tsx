import { ArrowRight, History } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHistory } from "../../services/historyService";
import type { ToolHistory } from "../../types/history";

export default function RecentHistory() {
  const [history, setHistory] = useState<ToolHistory[]>([]);

  useEffect(() => {
    getHistory()
      .then((data) => setHistory(Array.isArray(data) ? data : data?.data ?? []))
      .catch(() => setHistory([]));
  }, []);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">Activity</p>
          <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">Recent history</h2>
        </div>
        <Link to="/history" className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-orange-600">View history <ArrowRight className="h-4 w-4" /></Link>
      </div>

      {history.length > 0 ? (
        <div className="mt-5 divide-y divide-slate-100 rounded-xl border border-slate-200">
          {history.slice(0, 5).map((item) => (
            <div key={item.id} className="flex min-w-0 items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0"><p className="truncate text-sm font-bold text-slate-800">{item.tool_name}</p><p className="text-xs text-slate-400">{new Date(item.created_at).toLocaleString()}</p></div>
              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">Completed</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-5 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm"><History className="h-5 w-5" /></span>
          <p className="mt-3 text-sm font-bold text-slate-700">No activity yet</p>
          <p className="mt-1 max-w-md text-xs leading-5 text-slate-400">Your recent tool activity will appear here once you start using DevTools Hub.</p>
          <Link to="/tools" className="mt-3 text-xs font-bold text-orange-500 hover:text-orange-600">Explore developer tools →</Link>
        </div>
      )}
    </section>
  );
}
