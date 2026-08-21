import { Link } from "react-router-dom";

export default function HomeCtaSection() {
  return (
    <section className="mx-auto mb-12 w-full max-w-[1100px] px-6 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-9 text-center sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            Build faster. Get more done.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Create a free account to save your tool history and get ready for powerful developer features as your workflow grows.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 4 4L19 6" />
              </svg>
              Free account
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
              </svg>
              Save history
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Developer focused
            </span>
          </div>

          <Link to="/register" className="mt-6 inline-flex h-11 items-center rounded-lg bg-orange-500 px-5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600">
            Create free account →
          </Link>
        </div>
      </div>
    </section>
  );
}