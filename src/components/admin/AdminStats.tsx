interface Props {
  title: string;
  value: number;
}

export default function AdminStats({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold text-blue-600">
        {value}
      </p>

    </div>
  );
}
