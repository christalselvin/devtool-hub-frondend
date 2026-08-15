import { useState } from "react";
import toast from "react-hot-toast";
import { BracesIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { validateJson } from "../../services/toolService";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function JsonValidatorSEOPage() {
  const [input, setInput] = useState("");
  const [validationResult, setValidationResult] = useState<string>("");

  useSEO({
    title: "JSON Validator - Free Online JSON Validation Tool",
    description:
      "Validate JSON syntax online. Check if your JSON is valid and get detailed error messages. Free and instant.",
    keywords: "json validator, validate json, json syntax checker, json linter",
  });

  const handleValidate = async () => {
    try {
      await validateJson(input);
      setValidationResult("✓ Valid JSON");
      toast.success("JSON is valid!");
    } catch (error: any) {
      setValidationResult(`✗ Invalid JSON: ${error.message}`);
      toast.error("Invalid JSON");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="json-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Paste your JSON to validate:
        </label>
        <Textarea
          id="json-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={10}
          placeholder="Paste JSON here..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={handleValidate} variant="primary">
          Validate JSON
        </Button>
        <Button
          onClick={() => {
            setInput("");
            setValidationResult("");
          }}
          variant="danger"
        >
          Clear
        </Button>
      </div>

      {validationResult && (
        <div
          className={`p-4 rounded font-mono text-sm ${
            validationResult.startsWith("✓")
              ? "bg-green-50 text-green-900 border border-green-200"
              : "bg-red-50 text-red-900 border border-red-200"
          }`}
        >
          {validationResult}
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="JSON Validator"
      description="Validate JSON syntax online. Check for errors and get detailed information about what's wrong with your JSON."
      icon={<BracesIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Paste your JSON into the input field",
        "Click 'Validate JSON' to check the syntax",
        "If valid, you'll see a success message",
        "If invalid, you'll see the error details",
        "Fix any issues and validate again",
        "Click 'Clear' to reset",
      ]}
      examples={[
        {
          title: "Valid JSON Object",
          input: '{"name": "John", "age": 30}',
          output: "✓ Valid JSON",
        },
        {
          title: "Valid JSON Array",
          input: '["apple", "banana", "orange"]',
          output: "✓ Valid JSON",
        },
        {
          title: "Invalid JSON (Missing Quotes)",
          input: "{name: 'John', age: 30}",
          output: "✗ Invalid JSON: Unexpected token n in JSON at position 1",
        },
      ]}
      useCases={[
        "Checking API request payloads",
        "Validating configuration files",
        "Finding syntax errors in JSON",
        "Testing data before submission",
        "Debugging JSON parsing errors",
        "Verifying data structure",
      ]}
      faq={[
        {
          question: "What makes JSON invalid?",
          answer:
            "Common issues: missing quotes around keys, trailing commas, single quotes instead of double quotes, unescaped special characters, and incorrect nesting.",
        },
        {
          question: "Can I validate compressed JSON?",
          answer:
            "Yes, the validator works with both formatted and minified JSON.",
        },
        {
          question: "Is there a size limit?",
          answer:
            "Your browser determines the limit. Most modern browsers can handle large JSON files without issues.",
        },
        {
          question: "What's the difference between formatting and validating?",
          answer:
            "Validation only checks syntax. Formatting also beautifies the output with proper indentation.",
        },
      ]}
      relatedTools={[
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
        { name: "JWT Decoder", url: "/devtools/jwt-decoder" },
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
      ]}
    />
  );
}
