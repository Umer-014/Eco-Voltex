import React, { useEffect, useRef, useState } from "react";

/**
 * EcoVoltex Loader — premium sequence, matched to the real logo
 * ---------------------------------------------------------------
 * White screen
 *   → "ECO" draws in as an outline
 *   → leaf outline draws, its highlight crease appears
 *   → bolt outline appears (sitting where the "T" of VOLTEX would be)
 *   → "VOL" / "EX" draw in as outlines
 *   → green rises up through the leaf
 *   → energy drops down through the bolt, flashing at the tip
 *   → the navy letters go solid
 *   → a soft glossy sweep crosses the whole mark
 *   → screen fades + scales away to reveal your app
 *
 * Shapes/colors are a close hand-matched vector recreation of your
 * logo.jpg (leaf silhouette, crease, bolt, ECO / VOL·⚡·EX layout).
 * It's still a recreation, not a trace — if you can send the original
 * vector (AI / EPS / SVG / Figma), I can drop in the exact paths and
 * this animation rig will work unchanged.
 *
 * Usage:
 *   import Loader from "./components/Loader/Loader";
 *   <Loader minDuration={4600}><App /></Loader>
 */
export default function Loader({ children, minDuration = 4600 }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(100);
      const t = setTimeout(() => setHidden(true), 300);
      return () => clearTimeout(t);
    }

    startRef.current = performance.now();
    const loop = (now) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    const hideTimer = setTimeout(() => setHidden(true), minDuration + 850);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(hideTimer);
    };
  }, [minDuration]);

  const ease = (t) => 1 - Math.pow(1 - t, 3); // cubic-out, premium feel
  const seg = (start, end) => {
    const raw = clamp(((progress - start) / (end - start)) * 100, 0, 100);
    return ease(raw / 100) * 100;
  };

  const entrance = seg(0, 6);
  const ecoOutline = seg(4, 16);
  const leafDraw = seg(14, 32);
  const boltOutline = seg(30, 40);
  const voltexOutline = seg(38, 52);
  const leafFill = seg(50, 71);
  const boltFill = seg(69, 85);
  const boltFlash = progress >= 83 && progress <= 90;
  const textSolid = seg(83, 93);
  const sweep = seg(91, 100);
  const finishing = progress >= 100;

  return (
    <>
      {!hidden && (
        <div className={`ev-loader ${finishing ? "ev-loader--out" : ""}`}>
          <div
            className="ev-loader__stage"
            style={{
              opacity: entrance / 100,
              transform: `scale(${0.94 + (entrance / 100) * 0.06})`,
            }}
          >
            <div className="ev-loader__glow" style={{ opacity: (leafFill + boltFill) / 200 }} />

            <svg className="ev-loader__mark" viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="evLeafGrad" x1="15%" y1="100%" x2="95%" y2="0%">
                  <stop offset="0%" stopColor="#2c6a37" />
                  <stop offset="50%" stopColor="#5fb646" />
                  <stop offset="100%" stopColor="#cfe86a" />
                </linearGradient>
                <linearGradient id="evBoltGrad" x1="50%" y1="0%" x2="30%" y2="100%">
                  <stop offset="0%" stopColor="#57b246" />
                  <stop offset="100%" stopColor="#d9e96a" />
                </linearGradient>
                <clipPath id="evLeafClip">
                  <path d={LEAF_D} />
                </clipPath>
                <clipPath id="evBoltClip">
                  <path d={BOLT_D} />
                </clipPath>
              </defs>

              {/* ECO — outline first, solid fill later */}
              <text
                x="40"
                y="255"
                className="ev-loader__word"
                style={{
                  opacity: ecoOutline / 100,
                  fillOpacity: textSolid / 100,
                  strokeOpacity: (ecoOutline / 100) * 0.55,
                }}
              >
                ECO
              </text>

              {/* VOL / EX — outline first, solid fill later */}
              <text
                x="40"
                y="478"
                className="ev-loader__word"
                style={{
                  opacity: voltexOutline / 100,
                  fillOpacity: textSolid / 100,
                  strokeOpacity: (voltexOutline / 100) * 0.55,
                }}
              >
                VOL
              </text>
              <text
                x="628"
                y="478"
                className="ev-loader__word"
                style={{
                  opacity: voltexOutline / 100,
                  fillOpacity: textSolid / 100,
                  strokeOpacity: (voltexOutline / 100) * 0.55,
                }}
              >
                EX
              </text>

              {/* leaf: empty outline first */}
              <path
                d={LEAF_D}
                className="ev-loader__outline"
                pathLength="100"
                style={{ strokeDashoffset: 100 - leafDraw }}
              />

              {/* leaf: color rises from the base */}
              <g clipPath="url(#evLeafClip)">
                <rect
                  x="480"
                  y={310 - (leafFill / 100) * 300}
                  width="370"
                  height={(leafFill / 100) * 300}
                  fill="url(#evLeafGrad)"
                />
              </g>

              {/* highlight crease — the light diagonal fold on the leaf */}
              <path
                d={CREASE_D}
                className="ev-loader__vein"
                pathLength="100"
                style={{
                  strokeDashoffset: 100 - leafFill,
                  opacity: leafFill > 4 ? 0.85 : 0,
                }}
              />

              {/* bolt: empty outline first */}
              <path d={BOLT_D} className="ev-loader__outline" style={{ opacity: boltOutline / 100 }} />

              {/* bolt: energy drops from the top */}
              <g clipPath="url(#evBoltClip)">
                <rect x="440" y="295" width="230" height={(boltFill / 100) * 260} fill="url(#evBoltGrad)" />
              </g>

              {boltFill > 3 && boltFill < 97 && (
                <line
                  x1="475"
                  x2="620"
                  y1={296 + (boltFill / 100) * 258}
                  y2={296 + (boltFill / 100) * 258}
                  className="ev-loader__spark-line"
                />
              )}

              {boltFlash && <path d={BOLT_D} className="ev-loader__bolt-flash" />}
            </svg>

            {/* glossy sweep, brightens whatever it passes over the mark */}
            <div
              className="ev-loader__sweep"
              style={{
                transform: `translateX(${-60 + (sweep / 100) * 220}%)`,
                opacity: sweep > 0 && sweep < 100 ? 1 : 0,
              }}
            />
          </div>

          <style>{`
            .ev-loader {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #ffffff;
              transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .ev-loader--out {
              opacity: 0;
              transform: scale(1.03);
              pointer-events: none;
            }

            .ev-loader__stage {
              position: relative;
              width: min(68vw, 480px);
              transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
              filter: drop-shadow(0 18px 34px rgba(15, 45, 30, 0.12));
            }

            .ev-loader__glow {
              position: absolute;
              inset: -18%;
              background: radial-gradient(closest-side, rgba(111, 189, 75, 0.35), transparent 72%);
              filter: blur(28px);
              transition: opacity 0.4s ease;
              pointer-events: none;
            }

            .ev-loader__mark {
              position: relative;
              width: 100%;
              display: block;
              overflow: visible;
            }

            .ev-loader__word {
              font-family: "Poppins", "Segoe UI", system-ui, Arial, sans-serif;
              font-weight: 800;
              font-size: 208px;
              letter-spacing: -4px;
              fill: #0b3654;
              stroke: #0b3654;
              stroke-width: 2.5;
              transition: opacity 0.35s ease, fill-opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                          stroke-opacity 0.35s ease;
            }

            .ev-loader__outline {
              fill: none;
              stroke: rgba(11, 54, 84, 0.4);
              stroke-width: 5;
              stroke-linejoin: round;
              stroke-linecap: round;
              transition: stroke-dashoffset 0.3s linear, opacity 0.3s ease;
            }
            .ev-loader__vein {
              fill: none;
              stroke: rgba(255, 255, 255, 0.8);
              stroke-width: 10;
              stroke-linecap: round;
              transition: stroke-dashoffset 0.3s linear, opacity 0.3s ease;
            }
            .ev-loader__spark-line {
              stroke: #fbffb0;
              stroke-width: 6;
              stroke-linecap: round;
              filter: drop-shadow(0 0 8px #e9df6b);
            }
            .ev-loader__bolt-flash {
              fill: #ffffff;
              opacity: 0.55;
              animation: ev-flash 0.5s ease-out;
            }
            @keyframes ev-flash {
              0% { opacity: 0.9; }
              100% { opacity: 0; }
            }

            .ev-loader__sweep {
              position: absolute;
              inset: -10%;
              width: 220%;
              left: -60%;
              background: linear-gradient(
                115deg,
                transparent 35%,
                rgba(255, 255, 255, 0.95) 50%,
                transparent 65%
              );
              mix-blend-mode: overlay;
              pointer-events: none;
              transition: opacity 0.2s ease;
            }

            @media (prefers-reduced-motion: reduce) {
              .ev-loader--out,
              .ev-loader__stage,
              .ev-loader__word,
              .ev-loader__outline,
              .ev-loader__vein {
                transition: none !important;
                animation: none !important;
              }
            }
          `}</style>
        </div>
      )}

      {children}
    </>
  );
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// Leaf silhouette — pointed tip top-right, convex right edge, concave
// left edge sweeping down to a point that meets the bolt below.
const LEAF_D =
  "M560,300 " +
  "C500,232 494,152 540,90 " +
  "C576,44 652,16 740,10 " +
  "C790,7 826,25 836,56 " +
  "C820,142 770,232 700,281 " +
  "C650,317 600,321 560,300 Z";

// Highlight crease — the light diagonal fold running through the leaf.
const CREASE_D = "M572,286 C528,220 524,150 562,96 C592,56 652,32 718,21";

// Lightning bolt sitting where the "T" of VOLTEX would be, its top
// point meeting the base of the leaf.
const BOLT_D = "M580,300 L500,392 L546,392 L478,548 L632,404 L566,404 Z";