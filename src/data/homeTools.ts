import {
  CodeIcon,
  HashIcon,
  BracesIcon,
  KeyIcon,
  QrIcon,
  FingerprintIcon,
  LockIcon,
  RegexIcon,
  ClockIcon,
  LinkIcon,
} from "../components/ui/Icons";

export const homeTools = [
  { icon: CodeIcon, label: "Base64 & URL", path: "/tools/base64" },
  { icon: HashIcon, label: "Hashing", path: "/tools/hash" },
  { icon: BracesIcon, label: "JSON Formatter", path: "/tools/json" },
  { icon: KeyIcon, label: "JWT Decoder", path: "/tools/jwt" },
  { icon: QrIcon, label: "QR Codes", path: "/tools/qr" },
  { icon: FingerprintIcon, label: "UUID Generator", path: "/tools/uuid" },
  { icon: LockIcon, label: "Password Generator", path: "/tools/password" },
  { icon: RegexIcon, label: "Regex Tester", path: "/tools/regex" },
  { icon: ClockIcon, label: "Timestamp Converter", path: "/tools/timestamp" },
  { icon: LinkIcon, label: "URL Encoder", path: "/tools/url" },
];
