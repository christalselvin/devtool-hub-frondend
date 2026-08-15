import { useState } from "react";
import toast from "react-hot-toast";
import { LinkIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function UrlEncoderSEOPage() {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  useSEO({
    title: "URL Encoder/Decoder - Free Online URL Encoding Tool",
    description:
      "Encode and decode URLs online. Convert special characters to URL-safe format and vice versa.",
    keywords:
      "url encoder, url decoder, encode url, decode url, uri encoding, percent encoding",
  });

  const handleEncode = () => {
    try {
      const result = encodeURIComponent(input);
      setEncoded(result);
      toast.success("Encoded successfully");
    } catch (error) {
      toast.error("Error encoding");
    }
  };

  const handleDecode = () => {
    try {
      const result = decodeURIComponent(input);
      setDecoded(result);
      toast.success("Decoded successfully");
    } catch (error) {
      toast.error("Error decoding");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="url-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Text to encode/decode:
        </label>
        <Textarea
          id="url-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          placeholder="Paste text or URL here..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button onClick={handleEncode} variant="primary">
          Encode
        </Button>
        <Button onClick={handleDecode} variant="success">
          Decode
        </Button>
        <Button
          onClick={() => {
            setInput("");
            setEncoded("");
            setDecoded("");
          }}
          variant="danger"
          className="ml-auto"
        >
          Clear
        </Button>
      </div>

      {encoded && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Encoded:
          </label>
          <textarea
            value={encoded}
            readOnly
            rows={4}
            className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
          />
        </div>
      )}

      {decoded && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Decoded:
          </label>
          <textarea
            value={decoded}
            readOnly
            rows={4}
            className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
          />
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="URL Encoder / Decoder"
      description="Encode text into URL-safe format and decode encoded URLs back to readable text."
      icon={<LinkIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Paste text or a URL into the input field",
        "Click 'Encode' to convert to URL-safe format",
        "Or click 'Decode' to convert encoded text back",
        "Special characters are converted to percent-encoded format",
        "Copy the result",
      ]}
      examples={[
        {
          title: "Simple Text",
          input: "Hello World!",
          output: "Hello%20World%21",
        },
        {
          title: "Email Address",
          input: "user@example.com",
          output: "user%40example.com",
        },
        {
          title: "URL with Query",
          input: "https://example.com?query=hello world",
          output: "https%3A%2F%2Fexample.com%3Fquery%3Dhello%20world",
        },
      ]}
      useCases={[
        "Creating query parameters",
        "Encoding URLs for APIs",
        "Debugging URL issues",
        "Preparing data for transmission",
        "Email and special character handling",
        "Web scraping and data extraction",
      ]}
      faq={[
        {
          question: "What characters are encoded?",
          answer:
            "Special characters like spaces, &, =, ?, # are encoded. Letters and numbers are usually left as-is.",
        },
        {
          question: "What is percent encoding?",
          answer:
            "Percent encoding (URL encoding) represents special characters as % followed by two hex digits.",
        },
        {
          question: "When do I need to encode URLs?",
          answer:
            "When including user input in URLs or query parameters to prevent broken or unsafe URLs.",
        },
        {
          question: "Is encoding the same as encryption?",
          answer:
            "No, encoding is reversible and not secure. Use encryption for sensitive data.",
        },
      ]}
      relatedTools={[
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
        { name: "JWT Decoder", url: "/devtools/jwt-decoder" },
      ]}
    />
  );
}
