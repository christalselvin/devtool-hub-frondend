import { useState } from "react";
import toast from "react-hot-toast";
import { CodeIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function Base64DecoderSEOPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useSEO({
    title: "Base64 Decoder - Free Online Base64 Decoding Tool",
    description:
      "Decode Base64 strings to text. Free, fast, and secure. No data stored on servers.",
    keywords: "base64 decoder, decode base64, base64 to text, decode string",
  });

  const handleDecode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
      toast.success("Decoded successfully");
    } catch (error) {
      toast.error("Invalid Base64 string");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="b64d-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Base64 to decode:
        </label>
        <Textarea
          id="b64d-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          placeholder="Paste Base64 string here..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={handleDecode} variant="primary">
          Decode Base64
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
          <label htmlFor="b64d-output" className="block text-sm font-semibold text-slate-900 mb-2">
            Decoded Text:
          </label>
          <textarea
            id="b64d-output"
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
      title="Base64 Decoder"
      description="Decode Base64 strings back to plain text. Free, instant, and secure processing."
      icon={<CodeIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Paste the Base64 string into the input field",
        "Click 'Decode Base64'",
        "The decoded text appears in the output field",
        "Copy the result",
        "Use it wherever you need plain text",
      ]}
      examples={[
        {
          title: "Simple Text",
          input: "SGVsbG8sIFdvcmxkIQ==",
          output: "Hello, World!",
        },
        {
          title: "Email Address",
          input: "dXNlckBleGFtcGxlLmNvbQ==",
          output: "user@example.com",
        },
        {
          title: "JSON String",
          input: "eyJ1c2VybmFtZSI6ImpvaG4ifQ==",
          output: '{"username":"john"}',
        },
      ]}
      useCases={[
        "Decoding API authentication headers",
        "Reading encoded email data",
        "Extracting information from encoded URLs",
        "Debugging encoded payloads",
        "Converting encoded data to readable format",
        "Data extraction from Base64 strings",
      ]}
      faq={[
        {
          question: "What if the Base64 is invalid?",
          answer:
            "You'll see an error message. Make sure you've copied the entire Base64 string without extra spaces.",
        },
        {
          question: "Can I decode binary data?",
          answer:
            "This tool decodes to text. For binary files, use specialized tools that can handle binary output.",
        },
        {
          question: "What characters are valid in Base64?",
          answer:
            "Base64 uses A-Z, a-z, 0-9, +, /, and = for padding. Any other characters indicate invalid Base64.",
        },
        {
          question: "Is decoding the reverse of encoding?",
          answer:
            "Yes, decoding reverses the encoding process. Encoded data decoded returns the original text.",
        },
      ]}
      relatedTools={[
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
        { name: "URL Decoder", url: "/devtools/url-encoder" },
        { name: "JWT Decoder", url: "/devtools/jwt-decoder" },
      ]}
    />
  );
}
