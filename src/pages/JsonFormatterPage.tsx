import { useState } from "react";
import toast from "react-hot-toast";

import { formatJson, minifyJson, validateJson } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Textarea, Label } from "../components/ui/Field";
import { BracesIcon } from "../components/ui/Icons";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleFormat = async () => {
    try {
      const res = await formatJson(input);
      setOutput(res?.data?.formatted ?? "");
      toast.success("JSON formatted successfully");
    } catch {
      setOutput("");
      toast.error("Invalid JSON");
    }
  };

  const handleMinify = async () => {
    try {
      const res = await minifyJson(input);
      setOutput(res?.data?.minified ?? "");
      toast.success("JSON minified successfully");
    } catch {
      setOutput("");
      toast.error("Invalid JSON");
    }
  };

  const handleValidate = async () => {
    try {
      const res = await validateJson(input);
      const isValid = res?.data?.valid === true;
      setOutput(isValid ? "Valid JSON ✓" : "Invalid JSON");
      toast.success(isValid ? "Valid JSON" : "Invalid JSON");
    } catch {
      setOutput("Invalid JSON");
      toast.error("Invalid JSON");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Data"
        title="JSON Formatter"
        description="Format, minify, and validate JSON documents."
        icon={<BracesIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <Label htmlFor="json-input">Input</Label>
        <Textarea
          id="json-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={9}
          placeholder="Paste JSON here..."
        />

        <div className="mt-4 flex flex-wrap gap-2.5">
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
            className="sm:ml-auto"
          >
            Clear
          </Button>
        </div>
      </Card>

      <OutputPanel
        label="JSON Output"
        value={output}
        minHeight="min-h-[260px]"
        wrap={false}
        placeholder="Run Format or Minify to generate output"
      />
    </div>
  );
}
