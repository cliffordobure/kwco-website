import React from "react";
import { useLocation } from "react-router-dom";

/**
 * Page hero backgrounds – unique geometric patterns only for inner pages.
 * None of these are used on the home banners (no diamonds, hexagons, chevrons).
 * Cream base + logo brown accents. New set: softer, more refined.
 */
const BG = "#fbfaf8";
const ACCENT = "#704037";
const ACCENT_LIGHT = "#8b5a4a";
const MUTED = "#94a3b8";

// 1. Soft floating orbs – large gradient circles, organic and calm
function FloatingOrbs() {
  const orbs = [
    { cx: 15, cy: 25, r: 180, opacity: 0.08 },
    { cx: 85, cy: 70, r: 220, opacity: 0.06 },
    { cx: 50, cy: 85, r: 140, opacity: 0.07 },
    { cx: 75, cy: 20, r: 100, opacity: 0.05 },
    { cx: 25, cy: 60, r: 120, opacity: 0.06 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <rect width="100" height="100" fill={BG} />
      <defs>
        <radialGradient id="orb-gradient">
          <stop offset="0%" stopColor={ACCENT_LIGHT} stopOpacity="0.4" />
          <stop offset="70%" stopColor={ACCENT} stopOpacity="0.15" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>
      {orbs.map((orb, i) => (
        <circle
          key={i}
          cx={orb.cx}
          cy={orb.cy}
          r={orb.r}
          fill="url(#orb-gradient)"
          opacity={orb.opacity}
        />
      ))}
    </svg>
  );
}

// 2. Fine mesh – very subtle crossed lines, premium grid (no diamonds)
function FineMesh() {
  const lines = [];
  const step = 3.2;
  for (let i = 0; i < 120; i++) {
    const x = i * step;
    lines.push(
      <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={100} stroke={ACCENT} strokeWidth="0.25" strokeOpacity="0.06" />
    );
  }
  for (let i = 0; i < 80; i++) {
    const y = i * step;
    lines.push(
      <line key={`h-${i}`} x1={0} y1={y} x2={100} y2={y} stroke={ACCENT} strokeWidth="0.25" strokeOpacity="0.06" />
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <rect width="100" height="100" fill={BG} />
      <g>{lines}</g>
    </svg>
  );
}

// 3. Gentle wave stripes – horizontal soft waves
function WaveStripes() {
  const waves = [];
  const w = 400;
  const h = 320;
  for (let i = 0; i < 14; i++) {
    const y = 25 + i * 22;
    const opacity = 0.05 + (i % 3) * 0.02;
    waves.push(
      <path
        key={i}
        d={`M 0 ${y} Q ${w * 0.25} ${y - 12} ${w * 0.5} ${y} Q ${w * 0.75} ${y + 12} ${w} ${y}`}
        fill="none"
        stroke={ACCENT}
        strokeWidth="1"
        strokeOpacity={opacity}
      />
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox={`0 0 ${w} ${h}`}>
      <rect width="100%" height="100%" fill={BG} />
      <g transform="translate(-30, -15) scale(1.1)">{waves}</g>
    </svg>
  );
}

// 4. Scattered strokes – short elegant lines at varied angles
function ScatteredStrokes() {
  const strokes = [];
  const rng = (seed) => ((seed * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 80; i++) {
    const x = rng(i) * 100;
    const y = rng(i + 100) * 100;
    const len = 8 + rng(i + 200) * 14;
    const angle = rng(i + 300) * 360;
    const rad = (angle * Math.PI) / 180;
    const x2 = x + len * Math.cos(rad);
    const y2 = y + len * Math.sin(rad);
    const opacity = 0.05 + rng(i + 400) * 0.08;
    strokes.push(
      <line
        key={i}
        x1={x}
        y1={y}
        x2={x2}
        y2={y2}
        stroke={ACCENT}
        strokeWidth="0.8"
        strokeOpacity={opacity}
        strokeLinecap="round"
      />
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <rect width="100" height="100" fill={BG} />
      <g>{strokes}</g>
    </svg>
  );
}

// 5. Corner frame – minimal L-shaped lines in each corner
function CornerFrame() {
  const t = 0.8;
  const L = 22;
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <rect width="100" height="100" fill={BG} />
      <g stroke={ACCENT} strokeWidth={t} strokeOpacity="0.18">
        <path d={`M 0 0 h ${L} v ${L}`} fill="none" />
        <path d={`M 100 0 h -${L} v ${L}`} fill="none" />
        <path d={`M 0 100 v -${L} h ${L}`} fill="none" />
        <path d={`M 100 100 v -${L} h -${L}`} fill="none" />
      </g>
    </svg>
  );
}

// 6. Soft gradient bands – vertical bands with very soft gradient (no shapes)
function GradientBands() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="band1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0" />
          <stop offset="30%" stopColor={ACCENT} stopOpacity="0.04" />
          <stop offset="70%" stopColor={ACCENT_LIGHT} stopOpacity="0.03" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="band2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={MUTED} stopOpacity="0.03" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={BG} />
      <rect width="100" height="100" fill="url(#band1)" />
      <rect width="100" height="100" fill="url(#band2)" />
    </svg>
  );
}

const PATTERNS = [
  <FloatingOrbs key="orbs" />,
  <FineMesh key="mesh" />,
  <WaveStripes key="waves" />,
  <ScatteredStrokes key="strokes" />,
  <CornerFrame key="frame" />,
  <GradientBands key="gradient" />,
];

function getPatternIndex(pathname) {
  let hash = 0;
  for (let i = 0; i < pathname.length; i++) {
    hash = (hash << 5) - hash + pathname.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % PATTERNS.length;
}

export function PageHeroGeometric({ children, className = "", variant }) {
  const { pathname } = useLocation();
  const index = variant !== undefined ? variant % PATTERNS.length : getPatternIndex(pathname || "");
  const pattern = PATTERNS[index];

  return (
    <section
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        {pattern}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/25" />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">
        {children}
      </div>
    </section>
  );
}
