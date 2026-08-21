import { Link } from "react-router-dom";
import { ArrowUpRight, History, ShieldCheck, Wrench } from "lucide-react";

const tools = [
  { name: "JSON Formatter", path: "/tools/json", icon: Wrench },
  { name: "Base64 Encoder", path: "/tools/base64", icon: Wrench },
  { name: "JWT Decoder", path: "/tools/jwt", icon: ShieldCheck },
  { name: "UUID Generator", path: "/tools/uuid", icon: Wrench },
  { name: "Password Generator", path: "/tools/password", icon: ShieldCheck },
  { name: "Hash Generator", path: "/tools/hash", icon: Wrench },
  { name: "URL Encoder", path: "/tools/url", icon: Wrench },
  { name: "Timestamp Converter", path: "/tools/timestamp", icon: History },
  { name: "QR Generator", path: "/tools/qr", icon: Wrench },
  { name: "Regex Tester", path: "/tools/regex", icon: Wrench },
];

export default function QuickTools() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {tools.map(({ name, path, icon: Icon }, index) => (
        <Link
          key={path}
          to={path}
          className="group relative min-h-33 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10"
        >
          <span className="absolute right-4 top-4 font-mono text-[10px] font-bold text-slate-300 group-hover:text-orange-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="mt-6 block text-[13px] font-bold leading-snug text-slate-800 group-hover:text-slate-950">
            {name}
          </span>
          <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-orange-500">
            Open tool <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
