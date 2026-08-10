import { useState } from "react";
import toast from "react-hot-toast";

import { generateQr } from "../services/toolService";

export default function QrCodePage() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

const generate = async () => {
  if (!text.trim()) {
    toast.error("Please enter text or a URL.");
    return;
  }

  try {
    const res = await generateQr(text);

    setImage(`data:image/png;base64,${res.data.image}`);

    toast.success("QR Code Generated");
  } catch {
    toast.error("Generation failed");
  }
};

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        QR Code Generator
      </h1>

      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-lg border p-4"
        placeholder="Enter text or URL..."
      />

      <button
        onClick={generate}
        className="rounded bg-blue-600 px-6 py-3 text-white"
      >
        Generate QR
      </button>

      {image && (
        <div className="rounded-lg bg-white p-6 shadow">

          <img
            src={image}
            alt="QR Code"
            className="mx-auto h-64 w-64"
          />

          <a
            href={image}
            download="qrcode.png"
            className="mt-6 block rounded bg-green-600 py-3 text-center text-white"
          >
            Download PNG
          </a>

        </div>
      )}

    </div>
  );
}