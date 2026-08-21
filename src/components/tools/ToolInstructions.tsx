import { Info, ListChecks } from "lucide-react";
import { useLocation } from "react-router-dom";

const instructions: Record<string, { name: string; steps: string[] }> = {
  json: {
    name: "JSON Formatter",
    steps: ["Paste JSON into the input", "Choose Format, Minify, or Validate", "Review or copy the result below"],
  },
  base64: {
    name: "Base64 Encoder",
    steps: ["Enter text or Base64 content", "Choose Encode or Decode", "Copy the converted output below"],
  },
  jwt: {
    name: "JWT Decoder",
    steps: ["Paste a JWT token", "Review the decoded header and payload", "Copy the readable result below"],
  },
  uuid: {
    name: "UUID Generator",
    steps: ["Choose how many UUIDs to create", "Generate new UUIDs", "Copy the generated values below"],
  },
  password: {
    name: "Password Generator",
    steps: ["Set the length and character options", "Generate a password", "Copy the result below"],
  },
  hash: {
    name: "Hash Generator",
    steps: ["Enter the text to hash", "Choose a hash algorithm", "Copy the generated hash below"],
  },
  url: {
    name: "URL Encoder",
    steps: ["Paste a URL or query value", "Choose Encode or Decode", "Use the converted value below"],
  },
  timestamp: {
    name: "Timestamp Converter",
    steps: ["Enter a date or timestamp", "Choose the conversion direction", "Copy the converted value below"],
  },
  qr: {
    name: "QR Generator",
    steps: ["Enter the content for your QR code", "Generate the code", "Download or scan the result below"],
  },
  regex: {
    name: "Regex Tester",
    steps: ["Enter a regular expression", "Add the text to test", "Review matches and groups below"],
  },
};

export default function ToolInstructions() {
  const { pathname } = useLocation();
  const toolKey = pathname.split("/")[2];
  const guide = instructions[toolKey];

  if (!guide) return null;

  return (
    <section className="rounded-2xl border border-orange-100 bg-linear-to-r from-orange-50 via-white to-amber-50 p-4 shadow-sm sm:p-5" aria-labelledby="tool-instructions-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
            <Info className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-600">Quick guide</p>
            <h2 id="tool-instructions-title" className="mt-1 text-base font-bold text-slate-900">How to use {guide.name}</h2>
          </div>
        </div>

        <ol className="grid gap-2 text-sm text-slate-600 sm:max-w-2xl sm:grid-cols-3 sm:gap-4">
          {guide.steps.map((step, index) => (
            <li key={step} className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-orange-600 ring-1 ring-orange-200">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-orange-100 pt-3 text-xs font-medium text-slate-500">
        <ListChecks className="h-4 w-4 text-orange-500" />
        Your output appears below the input controls and can be copied when ready.
      </div>
    </section>
  );
}