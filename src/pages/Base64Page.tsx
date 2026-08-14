import { useState } from "react";
import toast from "react-hot-toast";

import { encodeBase64, decodeBase64 } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Textarea, Label } from "../components/ui/Field";
import { CodeIcon } from "../components/ui/Icons";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = async () => {
    try {
      const res = await encodeBase64(input);
      setOutput(res.data.encoded);
      toast.success("Encoded successfully");
    } catch {
      toast.error("Encoding failed");
    }
  };

  const handleDecode = async () => {
    try {
      const res = await decodeBase64(input);
      setOutput(res.data.decoded);
      toast.success("Decoded successfully");
    } catch {
      toast.error("Invalid Base64 string");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Encoding"
        title="Base64 Encoder / Decoder"
        description="Convert text to and from Base64 encoding."
        icon={<CodeIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <Label htmlFor="b64-input">Input</Label>
        <Textarea
          id="b64-input"
          rows={7}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />

        <div className="mt-4 flex flex-wrap gap-2.5">
          <Button onClick={handleEncode} variant="primary">
            Encode
          </Button>
          <Button onClick={handleDecode} variant="success">
            Decode
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

      <OutputPanel label="Output" value={output} placeholder="Encoded or decoded text will appear here" />
    </div>
  );
}