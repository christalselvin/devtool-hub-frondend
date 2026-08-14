import { useState } from "react";
import toast from "react-hot-toast";

import { toUnixTimestamp, fromUnixTimestamp } from "../services/toolService";
import PageHeader from "../components/ui/Pageheader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Input, Label } from "../components/ui/Field";
import { ClockIcon } from "../components/ui/Icons";

export default function TimestampPage() {
  const [date, setDate] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const convertToUnix = async () => {
    try {
      const res = await toUnixTimestamp(date);
      setTimestamp(res.data.timestamp.toString());
      toast.success("Converted");
    } catch {
      toast.error("Invalid Date");
    }
  };

  const convertFromUnix = async () => {
    try {
      const res = await fromUnixTimestamp(Number(timestamp));
      setDate(res.data.date);
      toast.success("Converted");
    } catch {
      toast.error("Invalid Timestamp");
    }
  };

  const copy = async () => {
    if (!timestamp) return;
    await navigator.clipboard.writeText(timestamp);
    toast.success("Copied");
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Utility"
        title="Timestamp Converter"
        description="Convert between ISO dates and Unix timestamps."
        icon={<ClockIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card>
          <Label htmlFor="iso-date">ISO Date</Label>
          <Input
            id="iso-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="2026-08-01T12:00:00"
            className="font-mono"
          />
          <Button onClick={convertToUnix} className="mt-4 w-full" variant="primary">
            Convert → Unix
          </Button>
        </Card>

        <Card>
          <Label htmlFor="unix-ts">Unix Timestamp</Label>
          <Input
            id="unix-ts"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="1735689600"
            className="font-mono"
          />
          <Button onClick={convertFromUnix} className="mt-4 w-full" variant="success">
            Convert → Date
          </Button>
        </Card>
      </div>

      <Button onClick={copy} variant="secondary">
        Copy Timestamp
      </Button>
    </div>
  );
}