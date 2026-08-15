import { useState } from "react";
import toast from "react-hot-toast";
import { FingerprintIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function UuidGeneratorSEOPage() {
  const [uuids, setUuids] = useState<string[]>([]);

  useSEO({
    title: "UUID Generator - Free Online UUID/GUID Generator",
    description:
      "Generate UUIDs (Universally Unique Identifiers) online. Create UUID v4, v1, or multiple UUIDs at once.",
    keywords:
      "uuid generator, guid generator, uuid v4, generate uuid, unique identifier",
  });

  const generateUUID = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleGenerateOne = () => {
    setUuids([generateUUID()]);
    toast.success("UUID generated");
  };

  const handleGenerateMultiple = () => {
    const multiple = Array.from({ length: 5 }, () => generateUUID());
    setUuids(multiple);
    toast.success("5 UUIDs generated");
  };

  const toolComponent = (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button onClick={handleGenerateOne} variant="primary">
          Generate 1 UUID
        </Button>
        <Button onClick={handleGenerateMultiple} variant="success">
          Generate 5 UUIDs
        </Button>
        <Button
          onClick={() => setUuids([])}
          variant="danger"
          className="ml-auto"
        >
          Clear
        </Button>
      </div>

      {uuids.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Generated UUIDs:
          </label>
          <div className="space-y-2">
            {uuids.map((uuid, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  value={uuid}
                  readOnly
                  className="flex-1 p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(uuid);
                    toast.success("Copied!");
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="UUID Generator"
      description="Generate Universally Unique Identifiers (UUIDs) online. Perfect for database records, user IDs, and distributed systems."
      icon={<FingerprintIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Click 'Generate 1 UUID' to create a single UUID",
        "Or click 'Generate 5 UUIDs' to create multiple at once",
        "Each UUID is unique and follows the UUID v4 standard",
        "Click 'Copy' to copy any UUID to your clipboard",
        "Use these IDs in your applications",
      ]}
      examples={[
        {
          title: "UUID Format",
          input: "Generate UUID",
          output: "550e8400-e29b-41d4-a716-446655440000",
        },
        {
          title: "UUID Components",
          input: "550e8400-e29b-41d4-a716-446655440000",
          output:
            "Time Low: 550e8400\nTime Mid: e29b\nTime High: 41d4\nClock: a716\nNode: 446655440000",
        },
      ]}
      useCases={[
        "Database record IDs",
        "User identification",
        "Session tokens",
        "Request tracking",
        "Distributed system identifiers",
        "Unique product codes",
        "File uploads tracking",
      ]}
      faq={[
        {
          question: "What is a UUID?",
          answer:
            "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify objects or entities across systems.",
        },
        {
          question: "Are these UUIDs truly unique?",
          answer:
            "UUID v4 uses random numbers with a very high probability of uniqueness. The chance of collision is negligible.",
        },
        {
          question: "What's the difference between UUID and GUID?",
          answer:
            "GUID is Microsoft's term for UUID. They're essentially the same thing - a unique identifier format.",
        },
        {
          question: "Can I use these UUIDs in production?",
          answer:
            "Yes, these v4 UUIDs are suitable for production use as database IDs or unique identifiers.",
        },
      ]}
      relatedTools={[
        { name: "Password Generator", url: "/devtools/password-generator" },
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
        { name: "Hash Generator", url: "/devtools/hash-generator" },
      ]}
    />
  );
}
