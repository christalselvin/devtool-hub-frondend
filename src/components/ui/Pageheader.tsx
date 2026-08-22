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
  icon,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-start sm:justify-between sm:pt-3">
      <div className="flex items-start gap-3 sm:gap-4">
        {icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 sm:h-12 sm:w-12">
            {icon}
          </div>
        )}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-600">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1.5 max-w-2xl text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}