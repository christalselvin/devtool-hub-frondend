import { useState } from "react";
import toast from "react-hot-toast";

import { testRegex } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Input, Textarea, Label } from "../components/ui/Field";
import { RegexIcon } from "../components/ui/Icons";

export default function RegexPage() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const runTest = async () => {
    if (!pattern || !text) {
      toast.error("Please enter both pattern and text.");
      return;
    }

    try {
      const res = await testRegex(pattern, text);
      setResult(JSON.stringify(res, null, 2));
      toast.success("Regex executed");
    } catch (error) {
      console.error(error);
      toast.error("Regex failed");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Text"
        title="Regex Tester"
        description="Test a pattern against sample text and inspect the matches."
        icon={<RegexIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card className="space-y-4">
        <div>
          <Label htmlFor="regex-pattern">Pattern</Label>
          <Input
            id="regex-pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="/^[a-z0-9]+$/"
            className="font-mono"
          />
        </div>

        <div>
          <Label htmlFor="regex-text">Test string</Label>
          <Textarea
            id="regex-text"
            rows={7}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here..."
          />
        </div>

        <Button onClick={runTest} size="lg" className="w-full sm:w-auto">
          Test Regex
        </Button>
      </Card>

      <OutputPanel
        label="Result"
        value={result}
        minHeight="min-h-[220px]"
        wrap={false}
        placeholder="Match results will appear here"
      />
    </div>
  );
}