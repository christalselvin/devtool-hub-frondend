import { useState } from "react";
import toast from "react-hot-toast";

import {
  generateMd5,
  generateSha1,
  generateSha256,
  generateSha512,
} from "../services/toolService";

export default function HashPage() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  const createHash = async (
    type: "md5" | "sha1" | "sha256" | "sha512"
  ) => {
    try {
      let res;

      switch (type) {
        case "md5":
          res = await generateMd5(text);
          break;

        case "sha1":
          res = await generateSha1(text);
          break;

        case "sha256":
          res = await generateSha256(text);
          break;

        case "sha512":
          res = await generateSha512(text);
          break;
      }

      setHash(res.data.hash);

      toast.success(`${type.toUpperCase()} generated`);

    } catch {
      toast.error("Failed");
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Hash Generator
      </h1>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-lg border p-4"
        placeholder="Enter text..."
      />

      <div className="flex flex-wrap gap-3">

        <button
          onClick={() => createHash("md5")}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          MD5
        </button>

        <button
          onClick={() => createHash("sha1")}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          SHA1
        </button>

        <button
          onClick={() => createHash("sha256")}
          className="rounded bg-purple-600 px-4 py-2 text-white"
        >
          SHA256
        </button>

        <button
          onClick={() => createHash("sha512")}
          className="rounded bg-orange-600 px-4 py-2 text-white"
        >
          SHA512
        </button>

      </div>

      <textarea
        rows={6}
        value={hash}
        readOnly
        className="w-full rounded-lg border bg-slate-100 p-4"
      />

      <button
        onClick={async () => {
          await navigator.clipboard.writeText(hash);
          toast.success("Copied");
        }}
        className="rounded bg-gray-700 px-5 py-2 text-white"
      >
        Copy Hash
      </button>

    </div>
  );
}