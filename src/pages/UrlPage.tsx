import { useState } from "react";
import toast from "react-hot-toast";

import { encodeUrl, decodeUrl } from "../services/toolService";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Textarea, Label } from "../components/ui/Field";
import { LinkIcon } from "../components/ui/Icons";

export default function UrlPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = async () => {
    try {
      const res = await encodeUrl(input);
      setOutput(res.data.encoded);
      toast.success("URL encoded");
    } catch {
      toast.error("Encoding failed");
    }
  };

  const handleDecode = async () => {
    try {
      const res = await decodeUrl(input);
      setOutput(res.data.decoded);
      toast.success("URL decoded");
    } catch {
      toast.error("Decoding failed");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Encoding"
        title="URL Encoder / Decoder"
        description="Percent-encode or decode URLs and query strings."
        icon={<LinkIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <Label htmlFor="url-input">Input</Label>
        <Textarea
          id="url-input"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter URL or text..."
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

      <OutputPanel label="Output" value={output} placeholder="Encoded or decoded URL will appear here" />
    </div>
  );
}
