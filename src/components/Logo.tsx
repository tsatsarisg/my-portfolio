import type { FC } from "react";

/**
 * Logo / brand mark for George Tsatsaris' portfolio.
 *
 * Renders a dev-themed monogram badge (<GT/>) beside the full name.
 * The SVG uses Tailwind color classes so it responds correctly to
 * light / dark mode without requiring a client component.
 *
 * Height is capped at 32px so it sits neatly inside the navbar.
 */
const Logo: FC = () => {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* ── Monogram badge ─────────────────────────────────────── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={32}
        height={32}
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        {/* Background square with rounded corners */}
        <rect
          x="0"
          y="0"
          width="32"
          height="32"
          rx="7"
          className="fill-blue-600"
        />

        {/* Left code bracket  <  */}
        <path
          d="M6 10 L3 16 L6 22"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        />

        {/* Right code bracket  />  */}
        <path
          d="M21.5 10 L24.5 16 L21.5 22"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        />

        {/* Initials "GT" centred between the brackets */}
        <text
          x="14"
          y="21"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="12"
          letterSpacing="0.5"
          fill="white"
        >
          GT
        </text>

        {/* Subtle forward-slash separator between brackets, like /> */}
        <line
          x1="26"
          y1="10.5"
          x2="24"
          y2="21.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>

      {/* ── Wordmark ────────────────────────────────────────────── */}
      <span className="flex flex-col leading-none">
        <span className="font-bold text-base tracking-tight text-gray-900 dark:text-white">
          George Tsatsaris
        </span>
        <span className="text-[10px] font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400 mt-0.5">
          Software Engineer
        </span>
      </span>
    </span>
  );
};

export default Logo;
