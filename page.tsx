@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-ink: 11 9 7;
  --color-cream: 250 248 243;
  --color-amber: 194 118 31;
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  background-color: #FAF8F3;
  color: #17140F;
  font-feature-settings: 'ss01', 'ss02', 'cv01', 'cv11';
}

/* Selection */
::selection {
  background-color: #C2761F;
  color: #FAF8F3;
}

/* Focus ring */
*:focus-visible {
  outline: 2px solid #C2761F;
  outline-offset: 3px;
  border-radius: 2px;
}

/* Smooth underlines for prose links */
.prose a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
}

/* Subtle grain texture for hero */
.grain {
  position: relative;
}
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>");
  opacity: 0.4;
  mix-blend-mode: multiply;
}

/* Divider line accent */
.rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(23, 20, 15, 0.18) 20%, rgba(23, 20, 15, 0.18) 80%, transparent);
}

/* Link underline hover effect */
.link-slide {
  position: relative;
  display: inline-block;
}
.link-slide::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.link-slide:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Marquee for client logos */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee {
  animation: marquee 40s linear infinite;
}
.marquee:hover {
  animation-play-state: paused;
}

/* Stagger utility */
.stagger > * {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.stagger > *:nth-child(1) { animation-delay: 0.05s; }
.stagger > *:nth-child(2) { animation-delay: 0.15s; }
.stagger > *:nth-child(3) { animation-delay: 0.25s; }
.stagger > *:nth-child(4) { animation-delay: 0.35s; }
.stagger > *:nth-child(5) { animation-delay: 0.45s; }
.stagger > *:nth-child(6) { animation-delay: 0.55s; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
