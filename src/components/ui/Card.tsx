import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
}

export default function Card({
  children,
  padded = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]",
        padded ? "p-5 sm:p-6 lg:p-7" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}