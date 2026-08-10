import { useState } from "react";
import toast from "react-hot-toast";

import {
  decodeJwt,
  verifyJwt,
} from "../services/toolService";

export default function JwtPage() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");

  const handleDecode = async () => {
    try {
      const res = await decodeJwt(token);

      setResult(JSON.stringify(res.data, null, 2));

      toast.success("JWT decoded");
    } catch {
      toast.error("Invalid JWT");
    }
  };

  const handleVerify = async () => {
    try {
      const res = await verifyJwt(token);

      setResult(JSON.stringify(res.data, null, 2));

      toast.success("JWT verified");
    } catch {
      toast.error("Verification failed");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);

    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        JWT Decoder & Verifier
      </h1>

      <textarea
        rows={8}
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="w-full rounded-lg border p-4"
        placeholder="Paste JWT token..."
      />

      <div className="flex flex-wrap gap-3">

        <button
          onClick={handleDecode}
          className="rounded bg-blue-600 px-5 py-2 text-white"
        >
          Decode
        </button>

        <button
          onClick={handleVerify}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Verify
        </button>

        <button
          onClick={copy}
          className="rounded bg-gray-700 px-5 py-2 text-white"
        >
          Copy
        </button>

        <button
          onClick={() => {
            setToken("");
            setResult("");
          }}
          className="rounded bg-red-600 px-5 py-2 text-white"
        >
          Clear
        </button>

      </div>

      <textarea
        rows={12}
        readOnly
        value={result}
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

    </div>
  );
}