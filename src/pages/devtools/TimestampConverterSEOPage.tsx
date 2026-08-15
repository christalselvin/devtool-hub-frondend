import { useState } from "react";
import toast from "react-hot-toast";
import { ClockIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function TimestampConverterSEOPage() {
  const [timestamp, setTimestamp] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [conversionResult, setConversionResult] = useState("");

  useSEO({
    title: "Timestamp Converter - Free Online Unix Timestamp Converter",
    description:
      "Convert Unix timestamps to readable dates and vice versa. Fast, accurate timestamp conversion.",
    keywords:
      "timestamp converter, unix timestamp, convert timestamp, unix time, epoch converter",
  });

  const handleTimestampToDate = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        toast.error("Invalid timestamp");
        return;
      }
      const date = new Date(ts * 1000);
      setConversionResult(date.toISOString());
      toast.success("Converted successfully");
    } catch (error) {
      toast.error("Conversion error");
    }
  };

  const handleDateToTimestamp = () => {
    try {
      const date = new Date(dateTime);
      if (isNaN(date.getTime())) {
        toast.error("Invalid date format");
        return;
      }
      const ts = Math.floor(date.getTime() / 1000);
      setConversionResult(ts.toString());
      toast.success("Converted successfully");
    } catch (error) {
      toast.error("Conversion error");
    }
  };

  const handleCurrentTimestamp = () => {
    const now = Math.floor(Date.now() / 1000);
    setConversionResult(now.toString());
    setTimestamp(now.toString());
    toast.success("Current timestamp obtained");
  };

  const toolComponent = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Timestamp to Date */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900">Unix Timestamp → Date</h3>
          <div>
            <label htmlFor="ts-input" className="block text-sm text-slate-700 mb-2">
              Timestamp (seconds):
            </label>
            <input
              id="ts-input"
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="e.g., 1705017600"
              className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleTimestampToDate} variant="primary" className="flex-1">
              Convert
            </Button>
            <Button onClick={handleCurrentTimestamp} variant="secondary" className="flex-1">
              Now
            </Button>
          </div>
        </div>

        {/* Date to Timestamp */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900">Date → Unix Timestamp</h3>
          <div>
            <label htmlFor="date-input" className="block text-sm text-slate-700 mb-2">
              Date & Time:
            </label>
            <input
              id="date-input"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
            />
          </div>
          <Button onClick={handleDateToTimestamp} variant="primary" className="w-full">
            Convert
          </Button>
        </div>
      </div>

      {conversionResult && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Result:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={conversionResult}
              readOnly
              className="flex-1 p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(conversionResult);
                toast.success("Copied!");
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      <Button
        onClick={() => {
          setTimestamp("");
          setDateTime("");
          setConversionResult("");
        }}
        variant="danger"
        className="w-full"
      >
        Clear All
      </Button>
    </div>
  );

  return (
    <SEOToolPageLayout
      title="Timestamp Converter"
      description="Convert between Unix timestamps and human-readable dates. Perfect for debugging logs and API responses."
      icon={<ClockIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Enter a Unix timestamp to convert to a readable date",
        "Or select a date/time to convert to Unix timestamp",
        "Click 'Now' to get the current Unix timestamp",
        "Copy the result to use in your application",
        "All conversions happen in your browser",
      ]}
      examples={[
        {
          title: "Timestamp to Date",
          input: "1705017600",
          output: "2024-01-12T00:00:00.000Z",
        },
        {
          title: "Current Unix Timestamp",
          input: "Click Now button",
          output: "1723737600 (current time)",
        },
      ]}
      useCases={[
        "Debugging API timestamps",
        "Converting log timestamps",
        "Database timestamp conversion",
        "Calculating time differences",
        "Scheduling tasks",
        "Understanding cron jobs",
        "API response analysis",
      ]}
      faq={[
        {
          question: "What is Unix timestamp?",
          answer:
            "Unix timestamp is the number of seconds since January 1, 1970 UTC. It's a universal way to represent time.",
        },
        {
          question: "Why use Unix timestamps?",
          answer:
            "They're timezone-independent, easy to calculate with, and widely supported in programming.",
        },
        {
          question: "What's the maximum timestamp?",
          answer:
            "The maximum 32-bit Unix timestamp is 2147483647, representing January 19, 2038 (Year 2038 problem).",
        },
        {
          question: "Does this tool account for timezones?",
          answer:
            "Unix timestamps are always UTC. The tool converts to/from UTC time.",
        },
      ]}
      relatedTools={[
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
        { name: "Base64 Encoder", url: "/devtools/base64-encoder" },
      ]}
    />
  );
}
