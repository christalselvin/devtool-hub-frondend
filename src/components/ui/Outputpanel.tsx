import type { ReactNode } from "react";
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
    await navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  return (
    <div
      className={[
        "overflow-hidden rounded-xl border border-slate-800 bg-ink shadow-inner",
        minHeight,
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </span>
          <span className="ml-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {action}
          {copyable && (
            <button
              onClick={copy}
              disabled={!value}
              className="rounded-md px-2 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Copy
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        {value ? (
          <pre
            className={[
              "font-mono text-sm leading-relaxed text-slate-100",
              wrap ? "whitespace-pre-wrap break-all" : "overflow-x-auto",
            ].join(" ")}
          >
            {value}
          </pre>
        ) : (
          <p className="font-mono text-sm text-slate-600">{placeholder}</p>
        )}
      </div>
    </div>
  );
}
