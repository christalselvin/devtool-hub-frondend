interface Props {
  title: string;
  value: number | string;
}

export default function AdminStats({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">{title}</h3>
      <p className="mt-3 text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
