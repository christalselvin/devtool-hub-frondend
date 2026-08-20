import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "ghost";

type Size = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  to?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white shadow-sm shadow-orange-500/20 hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/25 active:bg-orange-700",

  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 active:bg-orange-100",

  success:
    "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-md active:bg-emerald-800",

  danger:
    "border border-red-200 bg-white text-red-600 shadow-sm hover:bg-red-50 active:bg-red-100",

  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200",
};

const sizeClasses: Record<Size, string> = {
  sm: [
    "h-8 px-3 text-[11px] gap-1.5 rounded-lg",
    "sm:h-9 sm:px-3.5 sm:text-xs",
    "md:h-9 md:px-4 md:text-xs",
    "lg:h-9 lg:px-4 lg:text-sm",
  ].join(" "),

  md: [
    "h-9 px-3.5 text-xs gap-1.5 rounded-lg",
    "sm:h-10 sm:px-4 sm:text-sm sm:gap-2",
    "md:h-10 md:px-5 md:text-sm",
    "lg:h-11 lg:px-5 lg:text-sm",
    "xl:h-11 xl:px-5 xl:text-base",
  ].join(" "),

  lg: [
    "h-10 px-4 text-sm gap-1.5 rounded-lg",
    "sm:h-11 sm:px-5 sm:text-sm sm:gap-2 sm:rounded-xl",
    "md:h-12 md:px-6 md:text-base",
    "lg:h-12 lg:px-6 lg:text-base",
    "xl:h-[3.25rem] xl:px-7 xl:text-lg",
  ].join(" "),
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  children,
  className = "",
  disabled,
  to,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex min-w-0 items-center justify-center",
    "whitespace-nowrap align-middle",
    "font-semibold leading-none tracking-[-0.01em]",
    "select-none touch-manipulation",
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "w-full sm:w-auto max-w-full",
    className,
  ].join(" ");

  const content = (
    <>
      {icon && (
        <span
          className="
            shrink-0
            [&>svg]:h-4
            [&>svg]:w-4
            sm:[&>svg]:h-[18px]
            sm:[&>svg]:w-[18px]
          "
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <span className="min-w-0 truncate">
        {children}
      </span>
    </>
  );

  /*
   * When `to` is provided, render a React Router Link.
   * This allows:
   *
   * <Button to="/register">Get started</Button>
   *
   * Without `to`, the component remains a normal button.
   */
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled || undefined}
        onClick={
          disabled
            ? (event) => event.preventDefault()
            : undefined
        }
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}