import { ButtonHTMLAttributes, ReactNode } from "react";

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
    "bg-indigo-700 text-white hover:bg-indigo-800 active:bg-indigo-900 shadow-sm shadow-indigo-900/10",
  secondary:
    "bg-white text-ink border border-slate-200 hover:bg-slate-50 active:bg-slate-100",
  success:
    "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 shadow-sm shadow-teal-900/10",
  danger:
    "bg-white text-red-600 border border-red-200 hover:bg-red-50 active:bg-red-100",
  ghost:
    "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-ink",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-5 py-3 text-sm gap-2",
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
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-lg font-medium",
        "transition-colors duration-150",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}