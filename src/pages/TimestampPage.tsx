import { useState } from "react";
import toast from "react-hot-toast";

import {
  toUnixTimestamp,
  fromUnixTimestamp,
} from "../services/toolService";

export default function TimestampPage() {
  const [date, setDate] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const convertToUnix = async () => {
    try {
      const res = await toUnixTimestamp(date);

      setTimestamp(res.data.timestamp.toString());

      toast.success("Converted");
    } catch {
      toast.error("Invalid Date");
    }
  };

  const convertFromUnix = async () => {
    try {
      const res = await fromUnixTimestamp(
        Number(timestamp)
      );

      setDate(res.data.date);

      toast.success("Converted");
    } catch {
      toast.error("Invalid Timestamp");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(timestamp);

    toast.success("Copied");
  };

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Timestamp Converter
      </h1>

      <div className="rounded-lg bg-white p-6 shadow">

        <label className="font-semibold">
          ISO Date
        </label>

        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="2026-08-01T12:00:00"
          className="mt-2 w-full rounded border p-3"
        />

        <button
          onClick={convertToUnix}
          className="mt-4 rounded bg-blue-600 px-5 py-2 text-white"
        >
          Convert → Unix
        </button>

      </div>

      <div className="rounded-lg bg-white p-6 shadow">

        <label className="font-semibold">
          Unix Timestamp
        </label>

        <input
          value={timestamp}
          onChange={(e) =>
            setTimestamp(e.target.value)
          }
          className="mt-2 w-full rounded border p-3"
        />

        <button
          onClick={convertFromUnix}
          className="mt-4 rounded bg-green-600 px-5 py-2 text-white"
        >
          Convert → Date
        </button>

      </div>

      <button
        onClick={copy}
        className="rounded bg-gray-700 px-5 py-2 text-white"
      >
        Copy Timestamp
      </button>

    </div>
  );
}