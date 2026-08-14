import { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const CodeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 4 3 12l5 8M16 4l5 8-5 8M14 2 10 22" />
  </svg>
);

export const HashIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 9h14M5 15h14M9 3 7 21M17 3l-2 18" />
  </svg>
);

export const BracesIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 3a3 3 0 0 0-3 3v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a3 3 0 0 0 3 3M16 3a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a3 3 0 0 1-3 3" />
  </svg>
);

export const KeyIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.5 12.5 20 3M17 6l3 3M14 9l2.5 2.5" />
  </svg>
);

export const LockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const QrIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01" />
  </svg>
);

export const RegexIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M7 4v16M4 8l6 4-6 4M14 15l3 3 3-3M17 4v9" />
  </svg>
);

export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const LinkIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9 15 15 9M10 6l1-1a4 4 0 0 1 6 6l-1 1M14 18l-1 1a4 4 0 0 1-6-6l1-1" />
  </svg>
);

export const FingerprintIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3a9 9 0 0 0-9 9v3M12 3a9 9 0 0 1 9 9v3M8 21a13 13 0 0 1-1-6 5 5 0 0 1 10 0 9 9 0 0 0 1 4M12 12a4 4 0 0 0-4 4 8 8 0 0 0 1 4" />
  </svg>
);

export const HistoryIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <path d="M3 4v5h5M12 7v5l4 2" />
  </svg>
);

export const UserIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const TrashIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
  </svg>
);

export const WandIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m4 20 12-12M15 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM5 3l.5 1L7 4.5 5.5 5 5 6.5 4.5 5 3 4.5 4.5 4z" />
  </svg>
);

export const GridIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
);

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5L19 7" />
  </svg>
);