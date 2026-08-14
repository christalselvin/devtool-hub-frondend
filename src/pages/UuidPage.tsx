import { useState } from "react";
import toast from "react-hot-toast";

import { generateUuidV1, generateUuidV4 } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { FingerprintIcon } from "../components/ui/Icons";

export default function UuidPage() {
  const [uuid, setUuid] = useState("");

  const createV1 = async () => {
    try {
      const res = await generateUuidV1();
      setUuid(res.data.uuid);
      toast.success("UUID v1 generated");
    } catch {
      toast.error("Generation failed");
    }
  };

  const createV4 = async () => {
    try {
      const res = await generateUuidV4();
      setUuid(res.data.uuid);
      toast.success("UUID v4 generated");
    } catch {
      toast.error("Generation failed");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Generator"
        title="UUID Generator"
        description="Generate version 1 (time-based) or version 4 (random) UUIDs."
        icon={<FingerprintIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <div className="flex flex-wrap gap-2.5">
          <Button onClick={createV1} variant="primary">
            Generate UUID v1
          </Button>
          <Button onClick={createV4} variant="success">
            Generate UUID v4
          </Button>
        </div>
      </Card>

      <OutputPanel
        label="UUID"
        value={uuid}
        minHeight="min-h-[90px]"
        placeholder="Your generated UUID will appear here"
      />
    </div>
  );
}