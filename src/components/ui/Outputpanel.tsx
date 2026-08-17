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
        "overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-inner",
        minHeight,
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/80 px-4 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
          {label}
        </span>
        <div className="flex items-center gap-2">
          {action}
          {copyable && (
            <button
              onClick={copy}
              disabled={!value}
              className="rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
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
          <p className="font-mono text-sm text-slate-400">{placeholder}</p>
        )}
      </div>
    </div>
  );
}
