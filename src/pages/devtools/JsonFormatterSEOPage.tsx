import { useState } from "react";
import toast from "react-hot-toast";
import { BracesIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { formatJson, minifyJson, validateJson } from "../../services/toolService";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function JsonFormatterSEOPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useSEO({
    title: "JSON Formatter - Free Online JSON Formatting Tool",
    description:
      "Format, minify, and validate JSON online. Beautify your JSON with proper indentation. Free, fast, and secure.",
    keywords:
      "json formatter, json beautifier, json validator, json minifier, format json online",
  });

  const handleFormat = async () => {
    try {
      const res = await formatJson(input);
      setOutput(res.data);
      toast.success("Formatted successfully");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleMinify = async () => {
    try {
      const res = await minifyJson(input);
      setOutput(res.data);
      toast.success("Minified successfully");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const handleValidate = async () => {
    try {
      await validateJson(input);
      toast.success("Valid JSON!");
    } catch {
      toast.error("Invalid JSON");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="json-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Paste your JSON:
        </label>
        <Textarea
          id="json-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          placeholder="Paste JSON here..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleFormat} variant="primary">
          Format
        </Button>
        <Button onClick={handleMinify} variant="success">
          Minify
        </Button>
        <Button onClick={handleValidate} variant="secondary">
          Validate
        </Button>
        <Button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          variant="danger"
          className="ml-auto"
        >
          Clear
        </Button>
      </div>

      {output && (
        <div>
          <label htmlFor="json-output" className="block text-sm font-semibold text-slate-900 mb-2">
            Formatted JSON:
          </label>
          <textarea
            id="json-output"
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
      title="JSON Formatter"
      description="Format, minify, and validate JSON documents online. Beautify your JSON with proper indentation and syntax highlighting."
      icon={<BracesIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Paste your JSON into the input field",
        "Click 'Format' to prettify with proper indentation, or 'Minify' to compress it",
        "Use 'Validate' to check if your JSON is valid",
        "Copy the formatted output using the copy button",
        "Click 'Clear' to reset and start over",
      ]}
      examples={[
        {
          title: "Simple Object",
          input: '{"name":"John","age":30}',
          output: '{\n  "name": "John",\n  "age": 30\n}',
        },
        {
          title: "Array",
          input: '["apple","banana","orange"]',
          output: '[\n  "apple",\n  "banana",\n  "orange"\n]',
        },
        {
          title: "Nested Object",
          input: '{"user":{"name":"Alice","email":"alice@example.com"}}',
          output:
            '{\n  "user": {\n    "name": "Alice",\n    "email": "alice@example.com"\n  }\n}',
        },
      ]}
      useCases={[
        "Debugging API responses",
        "Formatting configuration files",
        "Validating JSON data",
        "Minifying JSON for production",
        "Pretty-printing large datasets",
        "Converting minified to readable JSON",
      ]}
      faq={[
        {
          question: "Is my JSON data secure?",
          answer:
            "Yes! All processing happens in your browser. Your data is never sent to our servers.",
        },
        {
          question: "What is JSON minification?",
          answer:
            "Minification removes unnecessary whitespace from JSON to reduce file size for faster transmission.",
        },
        {
          question: "Can I format very large JSON files?",
          answer:
            "Yes, our tool can handle large JSON files, but performance depends on your browser capabilities.",
        },
        {
          question: "What happens if I have invalid JSON?",
          answer:
            "The validator will show an error message indicating what's wrong with your JSON structure.",
        },
      ]}
      relatedTools={[
        { name: "JSON Validator", url: "/devtools/json-validator" },
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
        { name: "JWT Decoder", url: "/devtools/jwt-decoder" },
        { name: "URL Encoder", url: "/devtools/url-encoder" },
      ]}
    />
  );
}
