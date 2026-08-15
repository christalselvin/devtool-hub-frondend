import { useState } from "react";
import toast from "react-hot-toast";
import { QrIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

// Simple QR code generator using a public API
const generateQRCodeURL = (text: string, size: number = 300): string => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    text
  )}`;
};

export default function QrCodeGeneratorSEOPage() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [size, setSize] = useState("300");

  useSEO({
    title: "QR Code Generator - Free Online QR Code Creator",
    description:
      "Generate QR codes online from text, URLs, or any data. Free, fast, and instant QR code creation.",
    keywords:
      "qr code generator, qr code maker, create qr code, qr code creator, free qr code",
  });

  const handleGenerate = () => {
    if (!input.trim()) {
      toast.error("Please enter text or a URL");
      return;
    }

    try {
      const qrUrl = generateQRCodeURL(input, parseInt(size));
      setQrCode(qrUrl);
      toast.success("QR code generated!");
    } catch (error) {
      toast.error("Error generating QR code");
    }
  };

  const handleDownload = () => {
    if (!qrCode) {
      toast.error("Generate a QR code first");
      return;
    }

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = `qrcode-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("QR code downloaded!");
  };

  const toolComponent = (
    <div className="space-y-6">
      <div>
        <label htmlFor="qr-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Text or URL:
        </label>
        <Textarea
          id="qr-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="Enter text, URL, email, or any data..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div>
        <label htmlFor="qr-size" className="block text-sm font-semibold text-slate-900 mb-2">
          Size (px):
        </label>
        <select
          id="qr-size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full p-3 border border-slate-200 rounded"
        >
          <option value="150">Small (150x150)</option>
          <option value="300">Medium (300x300)</option>
          <option value="500">Large (500x500)</option>
          <option value="1000">Extra Large (1000x1000)</option>
        </select>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button onClick={handleGenerate} variant="primary">
          Generate QR Code
        </Button>
        {qrCode && (
          <Button onClick={handleDownload} variant="success">
            Download
          </Button>
        )}
        <Button
          onClick={() => {
            setInput("");
            setQrCode("");
          }}
          variant="danger"
          className="ml-auto"
        >
          Clear
        </Button>
      </div>

      {qrCode && (
        <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
          <img
            src={qrCode}
            alt="Generated QR Code"
            className="mx-auto max-w-sm"
          />
          <p className="mt-4 text-sm text-slate-600">
            Click 'Download' to save the QR code as an image
          </p>
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="QR Code Generator"
      description="Create QR codes from text, URLs, or any data. Free, instant, and high-quality QR code generation."
      icon={<QrIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Enter text, a URL, email, or phone number",
        "Choose your preferred QR code size",
        "Click 'Generate QR Code'",
        "Download the QR code as an image",
        "Share or print the QR code",
        "Anyone with a QR scanner can decode it",
      ]}
      examples={[
        {
          title: "Website URL",
          input: "https://example.com",
          output: "QR code pointing to the website",
        },
        {
          title: "Contact Info",
          input: "EMAIL:user@example.com",
          output: "QR code with email information",
        },
        {
          title: "WiFi Details",
          input: "WIFI:T:WPA;S:NetworkName;P:Password;;",
          output: "QR code for WiFi connection",
        },
      ]}
      useCases={[
        "Website URLs",
        "Contact information",
        "WiFi connection details",
        "Business cards",
        "Event promotions",
        "Product packaging",
        "Payment links",
        "Email addresses",
        "Phone numbers",
      ]}
      faq={[
        {
          question: "What is a QR code?",
          answer:
            "A QR (Quick Response) code is a two-dimensional barcode that can be scanned with a smartphone camera to quickly access information.",
        },
        {
          question: "How do I scan a QR code?",
          answer:
            "Use your smartphone camera app or a QR code scanner app. Point it at the code and tap to open the linked content.",
        },
        {
          question: "What data can I encode?",
          answer:
            "URLs, text, emails, phone numbers, contact info, WiFi details, and any text-based data.",
        },
        {
          question: "Is there a size limit?",
          answer:
            "QR codes work best with up to ~2953 bytes of data. For larger data, use multiple QR codes.",
        },
        {
          question: "Can QR codes be customized with colors or logos?",
          answer:
            "This free tool generates standard QR codes. For custom designs, use professional QR code tools.",
        },
      ]}
      relatedTools={[
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
        { name: "URL Encoder", url: "/devtools/url-encoder" },
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
      ]}
    />
  );
}
