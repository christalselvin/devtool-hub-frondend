import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          {eyebrow}
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-sm text-slate-500">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 self-start">{action}</div>}
    </div>
  );
}
