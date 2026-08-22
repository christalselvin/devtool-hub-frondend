import { Link, useSearchParams } from "react-router-dom";
import Seo from "../components/seo/Seo";
import PublicNavbar from "../components/layout/PublicNavbar";
import { homeTools } from "../data/homeTools";

export default function ToolsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.trim().toLowerCase() ?? "";
  const filteredTools = homeTools.filter(({ label }) => label.toLowerCase().includes(query));

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Seo path="/tools" />
      <PublicNavbar />

      <main className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">Developer toolkit</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Developer tools</h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Fast, browser-based utilities for everyday development work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTools.map(({ icon: Icon, label, path }) => (
            <Link
              key={label}
              to={path}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/15"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-base font-bold text-slate-900">{label}</h2>
              <span className="mt-3 inline-flex text-sm font-semibold text-slate-400 group-hover:text-orange-500">Open tool →</span>
            </Link>
          ))}
        </div>
        {filteredTools.length === 0 && (
          <p className="mt-10 rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">No tools found for “{searchParams.get("search")}”.</p>
        )}
      </main>
    </div>
  );
}
