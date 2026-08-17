import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getHistory, deleteHistory, clearHistory } from "../services/historyService";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { HistoryIcon, TrashIcon } from "../components/ui/Icons";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadHistory = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getHistory();
      setHistory(res.data || []);
    } catch {
      setError("Failed to load history");
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
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-xl border border-slate-200 bg-slate-100"
          />
        ))}
      </div>
    );
  }

  if (error && history.length === 0) {
    return (
      <Card className="flex flex-col items-center gap-3 py-12 text-center">
        <HistoryIcon className="h-8 w-8 text-slate-300" />
        <p className="font-medium text-ink">{error}</p>
        <Button onClick={() => void loadHistory()} variant="secondary">
          Retry
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Activity"
        title="Tool History"
        description="A record of the tools you've used recently."
        icon={<HistoryIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
        action={
          history.length > 0 ? (
            <Button onClick={clear} variant="danger" icon={<TrashIcon className="h-4 w-4" />}>
              Clear All
            </Button>
          ) : undefined
        }
      />

      {history.length === 0 ? (
        <Card className="flex flex-col items-center gap-2 py-14 text-center">
          <HistoryIcon className="h-8 w-8 text-slate-300" />
          <p className="font-medium text-ink">No history yet</p>
          <p className="text-sm text-slate-500">
            Tools you use will show up here.
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/[0.02] sm:p-5"
            >
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink">
                  {item.tool_name}
                </p>
                <p className="text-sm text-slate-500">{item.created_at}</p>
              </div>

              <Button
                onClick={() => remove(item.id)}
                variant="danger"
                size="sm"
                className="shrink-0"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
