import { Link } from "react-router-dom";
import { homeTools } from "../../data/homeTools";

export default function PopularToolsSection() {
  return (
    <section aria-label="Developer tools" className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">Popular tools</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Tools developers use every day</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">Quick access to the utilities you reach for most.</p>
        </div>
        <Link className="hidden rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600 sm:block" to="/tools">View all →</Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {homeTools.map(({ icon: Icon, label, path }) => (
          <Link
            key={label}
            to={path}
            className="group flex min-h-[150px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-200 group-hover:bg-orange-500 group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <span className="mt-5 text-sm font-bold leading-snug text-slate-800 group-hover:text-slate-950">{label}</span>
            <span className="mt-3 text-xs font-semibold text-slate-400 transition-colors group-hover:text-orange-500">Open tool →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
