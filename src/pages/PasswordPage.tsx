import { useState } from "react";
import toast from "react-hot-toast";
import { generatePassword } from "../services/toolService";

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

  const copy = async () => {
    await navigator.clipboard.writeText(password);
    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Password Generator
      </h1>

      <div className="rounded-lg bg-white p-6 shadow space-y-4">

        <div>
          <label className="block font-medium">
            Password Length
          </label>

          <input
            type="number"
            min={6}
            max={128}
            value={length}
            onChange={(e) =>
              setLength(Number(e.target.value))
            }
            className="mt-1 w-40 rounded border p-2"
          />
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() =>
              setUppercase(!uppercase)
            }
          />
          Uppercase
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() =>
              setLowercase(!lowercase)
            }
          />
          Lowercase
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={digits}
            onChange={() => setDigits(!digits)}
          />
          Digits
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={symbols}
            onChange={() =>
              setSymbols(!symbols)
            }
          />
          Symbols
        </label>

        <button
          onClick={generate}
          className="rounded bg-blue-600 px-6 py-3 text-white"
        >
          Generate Password
        </button>

      </div>

      <textarea
        rows={4}
        value={password}
        readOnly
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

      <button
        onClick={copy}
        className="rounded bg-green-600 px-5 py-2 text-white"
      >
        Copy Password
      </button>

    </div>
  );
}