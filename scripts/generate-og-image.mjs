import sharp from "sharp";
import { writeFileSync } from "fs";

const WIDTH = 1200;
const HEIGHT = 630;

// Colors from globals.css dark theme
const BG = "#1a1a1a"; // oklch(0.145 0 0) ≈ this
const PRIMARY = "#4f6df5"; // oklch(0.65 0.2 255) ≈ blue/indigo
const TEXT = "#fafafa"; // oklch(0.985 0 0)
const MUTED = "#a3a3a3"; // oklch(0.708 0 0)

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="30%" cy="35%" r="50%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="70%" cy="65%" r="50%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g1)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g2)"/>

  <!-- Accent line -->
  <rect x="100" y="200" width="60" height="4" rx="2" fill="${PRIMARY}"/>

  <!-- Name -->
  <text x="100" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="${TEXT}">
    George Tsatsaris
  </text>

  <!-- Title -->
  <text x="100" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="${PRIMARY}">
    Founding Software Engineer
  </text>

  <!-- Stack -->
  <text x="100" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="${MUTED}">
    Backend Architecture  |  Node.js  -  TypeScript  -  React
  </text>

  <!-- Location -->
  <text x="100" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="${MUTED}">
    Athens, GRE
  </text>

  <!-- Bottom border accent -->
  <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="${PRIMARY}"/>
</svg>`;

const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync("public/og-image.png", buf);
console.log("Created public/og-image.png (%d KB)", Math.round(buf.length / 1024));
