import { useState } from "react";
import toast from "react-hot-toast";

import { generateQr } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Textarea, Label } from "../components/ui/Field";
import { QrIcon } from "../components/ui/Icons";

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
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Generator"
        title="QR Code Generator"
        description="Turn any text or link into a scannable QR code."
        icon={<QrIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <Card className="lg:col-span-3">
          <Label htmlFor="qr-input">Text or URL</Label>
          <Textarea
            id="qr-input"
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL..."
          />

          <Button onClick={generate} size="lg" className="mt-4 w-full sm:w-auto">
            Generate QR
          </Button>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-4 text-center lg:col-span-2">
          {image ? (
            <>
              <img
                src={image}
                alt="Generated QR code"
                className="h-48 w-48 rounded-lg border border-slate-200 sm:h-56 sm:w-56"
              />
              <a
                href={image}
                download="qrcode.png"
                className="w-full rounded-lg bg-teal-700 py-2.5 text-center text-sm font-medium text-white shadow-sm shadow-teal-900/10 transition-colors hover:bg-teal-800"
              >
                Download PNG
              </a>
            </>
          ) : (
            <div className="flex h-48 w-48 flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-200 text-slate-400 sm:h-56 sm:w-56">
              <QrIcon className="h-8 w-8" />
              <span className="text-xs">Preview appears here</span>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}