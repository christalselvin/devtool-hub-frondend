import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export function Label({
  children,
  className = "",
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode }) {
  return (
    <label
      className={[
        "mb-1.5 block text-sm font-medium text-ink",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </label>
  );
}

const fieldBase =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={[fieldBase, className].join(" ")} {...props} />;
}

export function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={[fieldBase, "font-mono resize-y", className].join(" ")}
      {...props}
    />
  );
}

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-600">{children}</p>;
}