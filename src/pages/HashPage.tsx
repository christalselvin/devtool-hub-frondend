import { useState } from "react";
import toast from "react-hot-toast";

import {
  generateMd5,
  generateSha1,
  generateSha256,
  generateSha512,
} from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Textarea, Label } from "../components/ui/Field";
import { HashIcon } from "../components/ui/Icons";

type HashType = "md5" | "sha1" | "sha256" | "sha512";

const hashButtons: { type: HashType; label: string; variant: "primary" | "success" | "secondary" }[] = [
  { type: "md5", label: "MD5", variant: "primary" },
  { type: "sha1", label: "SHA1", variant: "success" },
  { type: "sha256", label: "SHA256", variant: "secondary" },
  { type: "sha512", label: "SHA512", variant: "secondary" },
];

export default function HashPage() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [activeType, setActiveType] = useState<HashType | null>(null);

  const createHash = async (type: HashType) => {
    try {
      let res;

      switch (type) {
        case "md5":
          res = await generateMd5(text);
          break;
        case "sha1":
          res = await generateSha1(text);
          break;
        case "sha256":
          res = await generateSha256(text);
          break;
        case "sha512":
          res = await generateSha512(text);
          break;
      }

      setHash(res.data.hash);
      setActiveType(type);
      toast.success(`${type.toUpperCase()} generated`);
    } catch {
      toast.error("Failed");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Cryptography"
        title="Hash Generator"
        description="Generate MD5, SHA1, SHA256, or SHA512 digests."
        icon={<HashIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <Label htmlFor="hash-input">Input</Label>
        <Textarea
          id="hash-input"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
          {hashButtons.map(({ type, label, variant }) => (
            <Button key={type} onClick={() => createHash(type)} variant={variant}>
              {label}
            </Button>
          ))}
        </div>
      </Card>

      <OutputPanel
        label={activeType ? activeType.toUpperCase() : "Output"}
        value={hash}
        placeholder="Hash digest will appear here"
        wrap
      />
    </div>
  );
}