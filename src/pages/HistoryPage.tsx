import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getHistory,
  deleteHistory,
  clearHistory,
} from "../services/historyService";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {
    try {
      const res = await getHistory();

      setHistory(res.data || []);
    } catch {
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const remove = async (id: string) => {
    try {
      await deleteHistory(id);

      toast.success("Deleted");

      loadHistory();
    } catch {
      toast.error("Delete failed");
    }
  };

  const clear = async () => {
    if (!confirm("Clear all history?")) return;

    try {
      await clearHistory();

      toast.success("History cleared");

      loadHistory();
    } catch {
      toast.error("Clear failed");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Tool History
        </h1>

        <button
          onClick={clear}
          className="rounded bg-red-600 px-5 py-2 text-white"
        >
          Clear All
        </button>

      </div>

      {history.length === 0 ? (
        <div className="rounded bg-white p-8 shadow text-center text-gray-500">
          No history found.
        </div>
      ) : (
        <div className="space-y-4">

          {history.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-white p-4 shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {item.tool_name}
                </p>

                <p className="text-sm text-gray-500">
                  {item.created_at}
                </p>
              </div>

              <button
                onClick={() => remove(item.id)}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}