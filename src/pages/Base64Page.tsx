import { useState } from "react";
import toast from "react-hot-toast";

import {
  encodeBase64,
  decodeBase64,
} from "../services/toolService";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = async () => {
    try {
      const res = await encodeBase64(input);
      setOutput(res.data.encoded);
      toast.success("Encoded successfully");
    } catch {
      toast.error("Encoding failed");
    }
  };

  const handleDecode = async () => {
    try {
      const res = await decodeBase64(input);
      setOutput(res.data.decoded);
      toast.success("Decoded successfully");
    } catch {
      toast.error("Invalid Base64 string");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Base64 Encoder / Decoder
      </h1>

      <textarea
        rows={8}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full rounded-lg border p-4"
        placeholder="Enter text..."
      />

      <div className="flex gap-3">

        <button
          onClick={handleEncode}
          className="rounded bg-blue-600 px-5 py-2 text-white"
        >
          Encode
        </button>

        <button
          onClick={handleDecode}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Decode
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
        rows={8}
        value={output}
        readOnly
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

    </div>
  );
}