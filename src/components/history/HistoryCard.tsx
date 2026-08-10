import type { ToolHistory } from "../../types/history";

interface Props {
  item: ToolHistory;
  onDelete: (id: string) => void;
}

export default function HistoryCard({
  item,
  onDelete,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow">

      <div className="flex items-center justify-between">

        <h2 className="font-bold text-lg">
          {item.tool_name}
        </h2>

        <button
          onClick={() => onDelete(item.id)}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Delete
        </button>

      </div>

      <div className="mt-4">

        <p className="text-sm text-gray-500">
          Input
        </p>

        <pre className="rounded bg-slate-100 p-3">
          {item.input}
        </pre>

      </div>

      <div className="mt-4">

        <p className="text-sm text-gray-500">
          Output
        </p>

        <pre className="rounded bg-slate-100 p-3">
          {item.output}
        </pre>

      </div>

      <p className="mt-4 text-sm text-gray-500">
        {item.created_at}
      </p>

    </div>
  );
}