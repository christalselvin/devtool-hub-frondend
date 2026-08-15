import { useState } from "react";
import toast from "react-hot-toast";
import { CodeIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function Base64EncoderSEOPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useSEO({
    title: "Base64 Encoder - Free Online Base64 Encoding Tool",
    description:
      "Encode text or files to Base64. Free, fast, and secure. No data stored on servers.",
    keywords: "base64 encoder, encode base64, text to base64, file encoder",
  });

  const handleEncode = () => {
    try {
      const encoded = btoa(input);
      setOutput(encoded);
      toast.success("Encoded successfully");
    } catch (error) {
      toast.error("Error encoding");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="b64-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Text to encode:
        </label>
        <Textarea
          id="b64-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          placeholder="Enter text to encode..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={handleEncode} variant="primary">
          Encode to Base64
        </Button>
        <Button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          variant="danger"
        >
          Clear
        </Button>
      </div>

      {output && (
        <div>
          <label htmlFor="b64-output" className="block text-sm font-semibold text-slate-900 mb-2">
            Base64 Encoded:
          </label>
          <textarea
            id="b64-output"
            value={output}
            readOnly
            rows={8}
            className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
          />
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="Base64 Encoder"
      description="Convert text to Base64 encoding online. Perfect for encoding strings, emails, and data."
      icon={<CodeIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Enter the text you want to encode",
        "Click 'Encode to Base64'",
        "The encoded result appears in the output field",
        "Copy the Base64 string",
        "Use it in your applications or APIs",
      ]}
      examples={[
        {
          title: "Simple Text",
          input: "Hello, World!",
          output: "SGVsbG8sIFdvcmxkIQ==",
        },
        {
          title: "Email Address",
          input: "user@example.com",
          output: "dXNlckBleGFtcGxlLmNvbQ==",
        },
        {
          title: "JSON String",
          input: '{"username":"john"}',
          output: "eyJ1c2VybmFtZSI6ImpvaG4ifQ==",
        },
      ]}
      useCases={[
        "Encoding credentials for API authentication",
        "Preparing data for HTTP headers",
        "Encoding email addresses for safe storage",
        "Converting files to text format",
        "Data obfuscation",
        "API request encoding",
      ]}
      faq={[
        {
          question: "What is Base64 encoding?",
          answer:
            "Base64 is a binary-to-text encoding scheme that represents binary data using ASCII characters. It's widely used in emails and APIs.",
        },
        {
          question: "Is Base64 encryption?",
          answer:
            "No, Base64 is encoding, not encryption. It's easily reversible and should not be used for security-sensitive data.",
        },
        {
          question: "What can I encode?",
          answer:
            "You can encode any text. For files, you'd typically use the browser's FileReader API or specialized tools.",
        },
        {
          question: "Is this tool secure?",
          answer:
            "Yes, all encoding happens in your browser. Your data never leaves your device.",
        },
      ]}
      relatedTools={[
        { name: "Base64 Decoder", url: "/devtools/base64-decoder" },
        { name: "URL Encoder", url: "/devtools/url-encoder" },
        { name: "JWT Decoder", url: "/devtools/jwt-decoder" },
      ]}
    />
  );
}
