import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "success" | "danger" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white shadow-sm shadow-orange-500/20 hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/25 active:bg-orange-700 active:scale-[0.98]",
  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 active:bg-orange-100 active:scale-[0.98]",
  success:
    "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-md active:bg-emerald-800 active:scale-[0.98]",
  danger:
    "border border-red-200 bg-white text-red-600 shadow-sm hover:bg-red-50 active:bg-red-100 active:scale-[0.98]",
  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200 active:scale-[0.98]",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-9 px-3.5 text-xs gap-1.5 rounded-lg",
  md: "min-h-10 px-4.5 text-sm gap-2 rounded-lg",
  lg: "min-h-11 px-5.5 text-sm sm:text-base gap-2 rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      className={[
        "inline-flex min-w-0 items-center justify-center",
        "whitespace-nowrap align-middle",
        "font-semibold leading-none tracking-[-0.01em]",
        "transition-all duration-200 ease-out",
        "select-none touch-manipulation",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "max-w-full",
        className,
      ].join(" ")}
      {...props}
    >
      {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
      <span className="min-w-0 truncate">{children}</span>
    </button>
  );
}