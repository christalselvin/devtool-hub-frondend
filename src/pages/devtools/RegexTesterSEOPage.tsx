import { useState } from "react";
import toast from "react-hot-toast";
import { RegexIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function RegexTesterSEOPage() {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState("g");
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState("");

  useSEO({
    title: "Regex Tester - Free Online Regular Expression Tester",
    description:
      "Test and debug regular expressions online. Match patterns, replace text, and test regex with live preview.",
    keywords: "regex tester, regular expression, regex tool, pattern matcher, regex debugger",
  });

  const handleTest = () => {
    try {
      setError("");
      const regex = new RegExp(pattern, flags);
      const foundMatches = [...testString.matchAll(regex)];
      setMatches(foundMatches.map((m) => ({ text: m[0], index: m.index })));
      if (foundMatches.length === 0) {
        toast("No matches found");
      } else {
        toast.success(`Found ${foundMatches.length} match(es)`);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error("Invalid regex pattern");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="regex-pattern" className="block text-sm font-semibold text-slate-900 mb-2">
          Regular Expression:
        </label>
        <input
          id="regex-pattern"
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="e.g., \\d{3}-\\d{3}-\\d{4}"
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div>
        <label htmlFor="regex-flags" className="block text-sm font-semibold text-slate-900 mb-2">
          Flags:
        </label>
        <input
          id="regex-flags"
          type="text"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          placeholder="g, i, m (global, case-insensitive, multiline)"
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div>
        <label htmlFor="regex-test" className="block text-sm font-semibold text-slate-900 mb-2">
          Test String:
        </label>
        <Textarea
          id="regex-test"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          rows={6}
          placeholder="Enter text to test..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={handleTest} variant="primary">
          Test Pattern
        </Button>
        <Button
          onClick={() => {
            setPattern("");
            setTestString("");
            setMatches([]);
            setError("");
          }}
          variant="danger"
        >
          Clear
        </Button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-900 text-sm">
          Error: {error}
        </div>
      )}

      {matches.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Matches ({matches.length}):
          </label>
          <div className="space-y-2">
            {matches.map((match, idx) => (
              <div key={idx} className="p-2 bg-green-50 border border-green-200 rounded">
                <code className="text-sm font-mono text-slate-900">
                  {match.text} <span className="text-green-700">@ index {match.index}</span>
                </code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="Regex Tester"
      description="Test and debug regular expressions online. See matches in real-time with live preview."
      icon={<RegexIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Enter your regular expression pattern",
        "Optionally set flags (g for global, i for case-insensitive, m for multiline)",
        "Enter the text you want to test",
        "Click 'Test Pattern'",
        "View all matches highlighted with their positions",
      ]}
      examples={[
        {
          title: "Email Validation",
          input:
            "Pattern: .+@.+\\..+ | Test: user@example.com",
          output: "Match found: user@example.com",
        },
        {
          title: "Phone Number",
          input:
            "Pattern: \\d{3}-\\d{3}-\\d{4} | Test: 123-456-7890",
          output: "Match found: 123-456-7890",
        },
      ]}
      useCases={[
        "Validating email addresses",
        "Matching phone numbers",
        "Finding URLs in text",
        "Extracting data from strings",
        "Form validation",
        "Text search and replace",
        "Finding patterns in code",
      ]}
      faq={[
        {
          question: "What is a regular expression?",
          answer:
            "A regex is a pattern that defines a set of strings. It's used to match, find, and replace text.",
        },
        {
          question: "What are regex flags?",
          answer:
            "Flags modify how the pattern matching works: 'g' = global (all matches), 'i' = case-insensitive, 'm' = multiline.",
        },
        {
          question: "How do I learn regex patterns?",
          answer:
            "Check our examples and test them. Each successful pattern teaches you the syntax. Practice with simple patterns first.",
        },
        {
          question: "Can I use this tool for form validation?",
          answer:
            "Yes! Test your validation patterns here before adding them to your application code.",
        },
      ]}
      relatedTools={[
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
        { name: "Text Tools", url: "/devtools/url-encoder" },
      ]}
    />
  );
}
