import { useState } from "react";
import toast from "react-hot-toast";

import { testRegex } from "../services/toolService";

export default function RegexPage() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const runTest = async () => {
    if (!pattern || !text) {
      toast.error("Please enter both pattern and text.");
      return;
    }

    try {
      const res = await testRegex(pattern, text);

      setResult(JSON.stringify(res, null, 2));

      toast.success("Regex executed");
    } catch (error) {
      console.error(error);

      toast.error("Regex failed");
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Regex Tester
      </h1>

      <div className="rounded-lg bg-white p-6 shadow space-y-4">

        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Regex Pattern"
          className="w-full rounded border p-3"
        />

        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          className="w-full rounded border p-3"
        />

        <button
          onClick={runTest}
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Test Regex
        </button>

      </div>

      <div>

        <h2 className="mb-2 text-xl font-semibold">
          Result
        </h2>

        <textarea
          rows={12}
          value={result}
          readOnly
          className="w-full rounded border bg-slate-100 p-4"
        />

      </div>

    </div>
  );
}