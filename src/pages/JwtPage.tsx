import { useState } from "react";
import toast from "react-hot-toast";

import { decodeJwt, verifyJwt } from "../services/toolService";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import OutputPanel from "../components/ui/Outputpanel";
import { Textarea, Label } from "../components/ui/Field";
import { KeyIcon } from "../components/ui/Icons";

export default function JwtPage() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");

  const handleDecode = async () => {
    try {
      const res = await decodeJwt(token);
      setResult(JSON.stringify(res.data, null, 2));
      toast.success("JWT decoded");
    } catch {
      toast.error("Invalid JWT");
    }
  };

  const handleVerify = async () => {
    try {
      const res = await verifyJwt(token);
      setResult(JSON.stringify(res.data, null, 2));
      toast.success("JWT verified");
    } catch {
      toast.error("Verification failed");
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <PageHeader
        eyebrow="Auth"
        title="JWT Decoder & Verifier"
        description="Inspect claims or verify the signature of a JSON Web Token."
        icon={<KeyIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
      />

      <Card>
        <Label htmlFor="jwt-input">Token</Label>
        <Textarea
          id="jwt-input"
          rows={7}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste JWT token..."
        />

        <div className="mt-4 flex flex-wrap gap-2.5">
          <Button onClick={handleDecode} variant="primary">
            Decode
          </Button>
          <Button onClick={handleVerify} variant="success">
            Verify
          </Button>
          <Button
            onClick={() => {
              setToken("");
              setResult("");
            }}
            variant="danger"
            className="sm:ml-auto"
          >
            Clear
          </Button>
        </div>
      </Card>

      <OutputPanel
        label="Result"
        value={result}
        minHeight="min-h-[240px]"
        wrap={false}
        placeholder="Decoded claims will appear here"
      />
    </div>
  );
}
