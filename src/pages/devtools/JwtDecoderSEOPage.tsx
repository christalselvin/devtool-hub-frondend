import { useState } from "react";
import toast from "react-hot-toast";
import { KeyIcon } from "../../components/ui/Icons";
import { SEOToolPageLayout } from "../../components/seo/SEOToolPageLayout";
import { Textarea } from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import { useSEO } from "../../hooks/useSEO";

export default function JwtDecoderSEOPage() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [signature, setSignature] = useState("");

  useSEO({
    title: "JWT Decoder - Free Online JWT Token Decoder",
    description:
      "Decode JWT tokens online. View header, payload, and signature. Perfect for debugging authentication tokens.",
    keywords: "jwt decoder, jwt token, decode jwt, json web token, jwt validator",
  });

  const handleDecode = () => {
    try {
      const parts = input.trim().split(".");
      if (parts.length !== 3) {
        toast.error("Invalid JWT format");
        return;
      }

      const headerDecoded = JSON.parse(atob(parts[0]));
      const payloadDecoded = JSON.parse(atob(parts[1]));

      setHeader(JSON.stringify(headerDecoded, null, 2));
      setPayload(JSON.stringify(payloadDecoded, null, 2));
      setSignature(parts[2]);
      toast.success("JWT decoded successfully");
    } catch (error) {
      toast.error("Invalid JWT token");
    }
  };

  const toolComponent = (
    <div className="space-y-4">
      <div>
        <label htmlFor="jwt-input" className="block text-sm font-semibold text-slate-900 mb-2">
          Paste JWT token:
        </label>
        <Textarea
          id="jwt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="Paste your JWT token here..."
          className="w-full p-3 border border-slate-200 rounded font-mono text-sm"
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={handleDecode} variant="primary">
          Decode JWT
        </Button>
        <Button
          onClick={() => {
            setInput("");
            setHeader("");
            setPayload("");
            setSignature("");
          }}
          variant="danger"
        >
          Clear
        </Button>
      </div>

      {header && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Header:
            </label>
            <textarea
              value={header}
              readOnly
              rows={6}
              className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Payload:
            </label>
            <textarea
              value={payload}
              readOnly
              rows={6}
              className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
            />
          </div>
        </div>
      )}

      {signature && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Signature:
          </label>
          <input
            type="text"
            value={signature}
            readOnly
            className="w-full p-3 border border-slate-200 rounded font-mono text-sm bg-slate-50"
          />
        </div>
      )}
    </div>
  );

  return (
    <SEOToolPageLayout
      title="JWT Decoder"
      description="Decode and inspect JWT (JSON Web Token) tokens. View the header, payload, and signature sections."
      icon={<KeyIcon className="w-8 h-8 text-white" />}
      children={toolComponent}
      howToUse={[
        "Copy the JWT token from your authentication response or API",
        "Paste it into the input field",
        "Click 'Decode JWT'",
        "View the decoded header, payload, and signature",
        "Inspect the claims and token information",
      ]}
      examples={[
        {
          title: "Simple JWT Token",
          input:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          output:
            "{\n  Header: {alg: HS256, typ: JWT},\n  Payload: {sub: 1234567890, name: John Doe}\n}",
        },
      ]}
      useCases={[
        "Debugging authentication tokens",
        "Inspecting OAuth/OpenID Connect tokens",
        "Validating JWT structure",
        "Checking token expiration",
        "Viewing user claims",
        "Testing API authentication",
      ]}
      faq={[
        {
          question: "What is a JWT token?",
          answer:
            "JWT (JSON Web Token) is a compact, URL-safe token format used for securely transmitting information between parties.",
        },
        {
          question: "Can this tool verify JWT signatures?",
          answer:
            "This tool decodes and displays tokens but does not verify signatures. Signature verification requires the secret key.",
        },
        {
          question: "Is it safe to decode JWTs here?",
          answer:
            "Yes, decoding is safe as it's just parsing the token structure. All processing happens in your browser.",
        },
        {
          question: "What if the token is expired?",
          answer:
            "This tool will still decode it. Check the 'exp' claim in the payload to see the expiration time.",
        },
      ]}
      relatedTools={[
        { name: "Base64 Decoder", url: "/devtools/base64-decoder" },
        { name: "JSON Formatter", url: "/devtools/json-formatter" },
        { name: "URL Encoder", url: "/devtools/url-encoder" },
      ]}
    />
  );
}
