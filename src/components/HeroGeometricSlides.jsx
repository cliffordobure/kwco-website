import React from "react";

/**
 * Six geometric background patterns for the hero slider.
 * Light theme: cream/white base with logo brown (#704037) and soft blue accents.
 */
const BG_LIGHT = "#fbfaf8";
const ACCENT = "#704037";
const ACCENT_LIGHT = "#8b5a4a";
const MUTED = "#94a3b8";
const MUTED_DARK = "#64748b";
const SLIDE_COUNT = 6;

export function getGeometricSlideCount() {
  return SLIDE_COUNT;
}

export function HeroGeometricSlide({ index, className = "" }) {
  const patterns = [
    <RhombusGrid key="0" />,
    <HexagonHoneycomb key="1" />,
    <RadiatingDiamonds key="2" />,
    <AngledChevrons key="3" />,
    <FoldedFacets key="4" />,
    <LowPolyAngles key="5" />,
  ];
  const i = Math.max(0, Math.min(index, patterns.length - 1));
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      {patterns[i]}
    </div>
  );
}

// 1. 3D rhombus/diamond grid (reference-style)
function RhombusGrid() {
  const size = 80;
  const rows = 20;
  const cols = 25;
  const diamonds = [];
  for (let r = -2; r < rows; r++) {
    for (let c = -2; c < cols; c++) {
      const x = c * size * 0.9 + (r % 2) * (size * 0.45);
      const y = r * size * 0.5;
      diamonds.push(
        <g key={`${r}-${c}`} transform={`translate(${x}, ${y})`}>
          <defs>
            <linearGradient id={`rg-${r}-${c}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={ACCENT_LIGHT} stopOpacity="0.25" />
              <stop offset="50%" stopColor={ACCENT} stopOpacity="0.35" />
              <stop offset="100%" stopColor={MUTED_DARK} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <polygon
            points={`${size/2},0 ${size},${size/2} ${size/2},${size} 0,${size/2}`}
            fill={`url(#rg-${r}-${c})`}
            stroke={MUTED}
            strokeOpacity="0.3"
            strokeWidth="0.5"
          />
        </g>
      );
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill={BG_LIGHT} />
      <g transform="translate(-40, -20) scale(1.1)">{diamonds}</g>
    </svg>
  );
}

// 2. Hexagon honeycomb
function HexagonHoneycomb() {
  const r = 36;
  const w = r * Math.sqrt(3);
  const hexagons = [];
  for (let row = -2; row < 18; row++) {
    for (let col = -2; col < 22; col++) {
      const x = col * w * 2 + (row % 2) * w;
      const y = row * r * 1.5;
      const points = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
      }).join(" ");
      hexagons.push(
        <polygon
          key={`${row}-${col}`}
          points={points}
          fill="none"
          stroke={ACCENT}
          strokeOpacity={0.2 + (row + col) % 3 * 0.08}
          strokeWidth="1"
        />
      );
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill={BG_LIGHT} />
      <g transform="translate(-30, -20) scale(1.15)">{hexagons}</g>
    </svg>
  );
}

// 3. Radiating diamonds from center
function RadiatingDiamonds() {
  const cx = 50;
  const cy = 50;
  const rings = [];
  for (let ring = 1; ring <= 12; ring++) {
    const count = ring * 6;
    const radius = ring * 4;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const size = 12 - ring * 0.5;
      rings.push(
        <g key={`${ring}-${i}`} transform={`translate(${x}, ${y}) rotate(${angle * 180 / Math.PI})`}>
          <polygon
            points={`${size},0 ${size*2},${size} ${size},${size*2} 0,${size}`}
            fill={ACCENT}
            fillOpacity={0.15 - ring * 0.008}
            stroke={MUTED}
            strokeOpacity="0.25"
            strokeWidth="0.5"
          />
        </g>
      );
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      <rect width="100" height="100" fill={BG_LIGHT} />
      <g>{rings}</g>
    </svg>
  );
}

// 4. Angled chevrons / stripes
function AngledChevrons() {
  const stripes = [];
  const width = 120;
  const height = 400;
  for (let i = -5; i < 25; i++) {
    const x = i * width * 0.6;
    const opacity = 0.15 + (i % 3) * 0.08;
    stripes.push(
      <polygon
        key={i}
        points={`${x},0 ${x + width},0 ${x + width * 1.4},${height} ${x + width * 0.4},${height}`}
        fill={ACCENT}
        fillOpacity={opacity * 0.6}
        stroke={MUTED}
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
      <rect width="1200" height="400" fill={BG_LIGHT} />
      <g transform="translate(-80, 0) scale(1.2)">{stripes}</g>
    </svg>
  );
}

// 5. Folded/origami-style triangular facets
function FoldedFacets() {
  const facets = [];
  const step = 90;
  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 20; col++) {
      const x = col * step + (row % 2) * (step / 2);
      const y = row * step * 0.6;
      const light = (row + col) % 2 === 0 ? ACCENT_LIGHT : MUTED;
      const dark = (row + col) % 2 === 0 ? ACCENT : MUTED_DARK;
      facets.push(
        <g key={`${row}-${col}`}>
          <defs>
            <linearGradient id={`ff-${row}-${col}-a`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light} stopOpacity="0.35" />
              <stop offset="100%" stopColor={dark} stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <polygon
            points={`${x},${y} ${x + step},${y} ${x + step/2},${y + step*0.5}`}
            fill={`url(#ff-${row}-${col}-a)`}
            stroke={MUTED}
            strokeOpacity="0.2"
          />
          <polygon
            points={`${x},${y} ${x + step/2},${y + step*0.5} ${x - step/2},${y + step*0.5}`}
            fill={dark}
            fillOpacity="0.2"
            stroke={MUTED}
            strokeOpacity="0.2"
          />
        </g>
      );
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill={BG_LIGHT} />
      <g transform="translate(-30, -40) scale(1.15)">{facets}</g>
    </svg>
  );
}

// 6. Low-poly angular overlapping shapes
function LowPolyAngles() {
  const triangles = [
    { points: "0,0 40,80 80,20", opacity: 0.25 },
    { points: "60,0 100,60 120,10", opacity: 0.2 },
    { points: "100,80 160,120 140,40", opacity: 0.3 },
    { points: "200,0 260,50 240,90", opacity: 0.2 },
    { points: "280,60 340,100 320,140", opacity: 0.25 },
    { points: "0,100 60,180 40,140", opacity: 0.2 },
    { points: "80,160 140,200 100,220", opacity: 0.3 },
    { points: "180,160 240,200 220,260", opacity: 0.2 },
    { points: "300,180 360,240 340,200", opacity: 0.25 },
  ];
  const base = 140;
  const tiles = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 10; c++) {
      triangles.forEach((t, i) => {
        const x = c * base + (r % 2) * 70;
        const y = r * base * 0.6;
        const pts = t.points.split(" ").map(p => {
          const [px, py] = p.split(",").map(Number);
          return `${x + px},${y + py}`;
        }).join(" ");
        tiles.push(
          <polygon
            key={`${r}-${c}-${i}`}
            points={pts}
            fill={ACCENT}
            fillOpacity={t.opacity * (0.4 + (r + c) % 3 * 0.05)}
            stroke={MUTED}
            strokeOpacity="0.15"
            strokeWidth="0.5"
          />
        );
      });
    }
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill={BG_LIGHT} />
      <g transform="translate(-50, -30) scale(1.2)">{tiles}</g>
    </svg>
  );
}
