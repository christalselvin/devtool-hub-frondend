import { useState } from "react";
import toast from "react-hot-toast";
import { generatePassword } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Label } from "../components/ui/Field";
import { LockIcon } from "../components/ui/Icons";

export default function PasswordPage() {
  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const [password, setPassword] = useState("");

  const generate = async () => {
    try {
      const res = await generatePassword(
        length,
        uppercase,
        lowercase,
        digits,
        symbols
      );

      setPassword(res.data.password);
      toast.success("Password Generated");
    } catch {
      toast.error("Failed");
    }
  };

  const options = [
    { label: "Uppercase (A-Z)", checked: uppercase, set: setUppercase },
    { label: "Lowercase (a-z)", checked: lowercase, set: setLowercase },
    { label: "Digits (0-9)", checked: digits, set: setDigits },
    { label: "Symbols (!@#$)", checked: symbols, set: setSymbols },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Security"
        title="Password Generator"
        description="Create strong, random passwords tuned to your needs."
        icon={<LockIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card className="space-y-5">
        <div className="max-w-xs">
          <div className="flex items-center justify-between">
            <Label htmlFor="pw-length" className="mb-0">
              Password length
            </Label>
            <span className="font-mono text-sm font-semibold text-indigo-700">
              {length}
            </span>
          </div>
          <input
            id="pw-length"
            type="range"
            min={6}
            max={128}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-2 w-full accent-indigo-700"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {options.map(({ label, checked, set }) => (
            <label
              key={label}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => set(!checked)}
                className="h-4 w-4 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
              />
              {label}
            </label>
          ))}
        </div>

        <Button onClick={generate} size="lg" fullWidth className="sm:w-auto">
          Generate Password
        </Button>
      </Card>

      <OutputPanel
        label="Generated Password"
        value={password}
        placeholder="Your generated password will appear here"
        minHeight="min-h-[90px]"
      />
    </div>
  );
}