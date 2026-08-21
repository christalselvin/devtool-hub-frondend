import type { ReactNode } from "react";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

interface OutputPanelProps {
  label: string;
  value: string;
  placeholder?: string;
  minHeight?: string;
  wrap?: boolean;
  copyable?: boolean;
  action?: ReactNode;
}

export default function OutputPanel({
  label,
  value,
  placeholder = "Output will appear here",
  minHeight = "min-h-[140px]",
  wrap = true,
  copyable = true,
  action,
}: OutputPanelProps) {
  const copy = async () => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      toast.success("Output copied");
    } catch {
      toast.error("Copy failed. Select the output and copy it manually.");
    }
  };

  return (
    <section
      className={[
        "overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/10",
        minHeight,
      ].join(" ")}
      aria-label={`${label} panel`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
          <span className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
            {label}
          </span>
          <span className="hidden rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-400 sm:inline-flex">
            {value ? "READY" : "EMPTY"}
          </span>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-2">
          {action}
          {copyable && (
            <button
              type="button"
              onClick={copy}
              disabled={!value}
              aria-label={`Copy ${label.toLowerCase()}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <Copy className="h-3.5 w-3.5" />
              Copy output
            </button>
          )}
        </div>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5">
        {value ? (
          <pre
            className={[
              "max-h-[520px] overflow-y-auto rounded-xl border border-slate-800/80 bg-[#080d16] p-4 font-mono text-[13px] leading-6 text-slate-300 selection:bg-sky-500/20 selection:text-slate-100",
              wrap ? "whitespace-pre-wrap break-words" : "overflow-x-auto whitespace-pre",
            ].join(" ")}
          >
            {value}
          </pre>
        ) : (
          <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-slate-800 bg-[#080d16] px-6 text-center">
            <p className="font-mono text-sm text-slate-500">{placeholder}</p>
          </div>
        )}
      </div>
    </section>
  );
}
