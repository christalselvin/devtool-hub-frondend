import { useState } from "react";
import toast from "react-hot-toast";

import {
  formatJson,
  minifyJson,
  validateJson,
} from "../services/toolService";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const handleFormat = async () => {
    try {
      const res = await formatJson(input);

      setOutput(res.data);

      toast.success("Formatted successfully");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleMinify = async () => {
    try {
      const res = await minifyJson(input);

      setOutput(res.data);

      toast.success("Minified");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleValidate = async () => {
    try {
      await validateJson(input);

      toast.success("Valid JSON");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);

    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        JSON Formatter
      </h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full rounded-lg border p-4"
        placeholder="Paste JSON here..."
      />

      <div className="flex flex-wrap gap-3">

        <button
          onClick={handleFormat}
          className="rounded bg-blue-600 px-5 py-2 text-white"
        >
          Format
        </button>

        <button
          onClick={handleMinify}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Minify
        </button>

        <button
          onClick={handleValidate}
          className="rounded bg-purple-600 px-5 py-2 text-white"
        >
          Validate
        </button>

        <button
          onClick={copy}
          className="rounded bg-gray-700 px-5 py-2 text-white"
        >
          Copy
        </button>

        <button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          className="rounded bg-red-600 px-5 py-2 text-white"
        >
          Clear
        </button>

      </div>

      <textarea
        value={output}
        readOnly
        rows={10}
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

    </div>
  );
}