import { useState } from "react";
import toast from "react-hot-toast";

import {
  generateUuidV1,
  generateUuidV4,
} from "../services/toolService";

export default function UuidPage() {
  const [uuid, setUuid] = useState("");

  const createV1 = async () => {
    try {
      const res = await generateUuidV1();

      setUuid(res.data.uuid);

      toast.success("UUID v1 generated");
    } catch {
      toast.error("Generation failed");
    }
  };

  const createV4 = async () => {
    try {
      const res = await generateUuidV4();

      setUuid(res.data.uuid);

      toast.success("UUID v4 generated");
    } catch {
      toast.error("Generation failed");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(uuid);

    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        UUID Generator
      </h1>

      <div className="flex flex-wrap gap-3">

        <button
          onClick={createV1}
          className="rounded bg-blue-600 px-5 py-2 text-white"
        >
          Generate UUID v1
        </button>

        <button
          onClick={createV4}
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          Generate UUID v4
        </button>

        <button
          onClick={copy}
          className="rounded bg-gray-700 px-5 py-2 text-white"
        >
          Copy
        </button>

      </div>

      <textarea
        value={uuid}
        readOnly
        rows={5}
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

    </div>
  );
}