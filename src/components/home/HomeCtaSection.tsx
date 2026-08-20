import { Link } from "react-router-dom";

export default function HomeCtaSection() {
  return (
    <section className="mx-auto mb-16 w-full max-w-[1280px] px-6 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-400">DevTools Hub</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Free tools now. More power when you need it.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Save your tool history and prepare for developer API access with a free account.
          </p>
          <Link to="/register" className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600">
            Create your free account
          </Link>
        </div>
      </div>
    </section>
  );
}
