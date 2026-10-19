type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TrainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3" width="14" height="13" rx="2" />
      <path d="M5 10h14" />
      <path d="M9 16l-2 4M15 16l2 4" />
      <circle cx="9" cy="13" r="0.6" fill="currentColor" />
      <circle cx="15" cy="13" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function CapIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 9l10-4 10 4-10 4L2 9z" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v5" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12l-8 8-9-9V4h7l10 8z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  );
}

export function BedIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 18v-8" />
      <path d="M3 14h18v4" />
      <path d="M3 12h8v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <circle cx="7" cy="10" r="1.4" />
    </svg>
  );
}

export function BathIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2z" />
      <path d="M6 12V6a2 2 0 0 1 4 0" />
      <path d="M7 18l-1 2M17 18l1 2" />
    </svg>
  );
}

export function StoveIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4z" />
      <path d="M8 10V7M12 10V6M16 10V7" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 12a8 8 0 0 1-8 8H4l1.6-3.2A8 8 0 1 1 21 12z" />
      <path d="M9 11h6M9 14h4" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
