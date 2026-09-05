import React, { useEffect, useRef, useState } from "react";
import "./Loader.css";

const WORD_COLOR = "#0b3654";

export default function Loader({ children, minDuration = 4200 }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => setHidden(true), 250);
      return () => clearTimeout(timer);
    }

    startRef.current = performance.now();

    const loop = (now) => {
      const elapsed = now - startRef.current;
      const nextProgress = Math.min(100, (elapsed / minDuration) * 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    rafRef.current = requestAnimationFrame(loop);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, minDuration + 650);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(hideTimer);
    };
  }, [minDuration]);

  const stageIn = segment(progress, 0, 10);
  const ecoIn = segment(progress, 4, 25);
  const leafTrace = segment(progress, 20, 52);
  const leafFill = segment(progress, 34, 58);
  const boltTrace = segment(progress, 48, 74);
  const boltFill = segment(progress, 58, 82);
  const voltexIn = segment(progress, 66, 88);
  const shine = segment(progress, 84, 100);
  const leaving = progress >= 100;

  return (
    <>
      {!hidden && (
        <div className={`loader-screen ${leaving ? "loader-screen--hide" : ""}`}>
          <div
            className="loader-stage"
            style={{
              opacity: stageIn,
              transform: `translateY(${(1 - stageIn) * 14}px) scale(${
                0.94 + stageIn * 0.06
              })`,
            }}
          >
            <div className="loader-glow" style={{ opacity: leafFill * 0.9 }} />

            <svg
              className="loader-logo-svg"
              viewBox="0 0 900 560"
              role="img"
              aria-label="Eco Voltex loading"
            >
              <defs>
                <linearGradient id="loaderLeafGradient" x1="20%" y1="95%" x2="95%" y2="5%">
                  <stop offset="0%" stopColor="#2f7d39" />
                  <stop offset="48%" stopColor="#58b948" />
                  <stop offset="100%" stopColor="#a7dc4b" />
                </linearGradient>
                <linearGradient id="loaderBoltGradient" x1="35%" y1="0%" x2="70%" y2="100%">
                  <stop offset="0%" stopColor="#8bdc46" />
                  <stop offset="100%" stopColor="#dff078" />
                </linearGradient>
                <clipPath id="loaderLeafClip">
                  <path d={LEAF_PATH} />
                </clipPath>
                <clipPath id="loaderBoltClip">
                  <path d={BOLT_PATH} />
                </clipPath>
              </defs>

              <text
                x="42"
                y="257"
                className="loader-word loader-word--top"
                style={{
                  opacity: ecoIn,
                  fillOpacity: ecoIn,
                  strokeOpacity: 1 - ecoIn,
                }}
              >
                ECO
              </text>

              <text
                x="42"
                y="482"
                className="loader-word loader-word--bottom"
                style={{
                  opacity: voltexIn,
                  fillOpacity: voltexIn,
                  strokeOpacity: 1 - voltexIn,
                }}
              >
                VOL
              </text>
              <text
                x="622"
                y="482"
                className="loader-word loader-word--bottom"
                style={{
                  opacity: voltexIn,
                  fillOpacity: voltexIn,
                  strokeOpacity: 1 - voltexIn,
                }}
              >
                EX
              </text>

              <g clipPath="url(#loaderLeafClip)">
                <rect
                  x="400"
                  y={0 + (1 - leafFill) * 300}
                  width="450"
                  height={300 * 1.5}
                  fill="url(#loaderLeafGradient)"
                />
              </g>
              <path
                d={LEAF_PATH}
                className="loader-mark-outline"
                pathLength="1"
                style={{ strokeDashoffset: 1 - leafTrace }}
              />
              <path
                d={LEAF_VEIN_PATH}
                className="loader-leaf-vein"
                pathLength="1"
                style={{
                  opacity: leafFill,
                  strokeDashoffset: 1 - leafTrace,
                }}
              />

              <g clipPath="url(#loaderBoltClip)">
                <rect
                  x="430"
                  y={240 + (1 - boltFill) * 300}
                  width="180"
                  height={300 * 1.5}
                  fill="url(#loaderBoltGradient)"
                />
              </g>
              <path
                d={BOLT_PATH}
                className="loader-mark-outline loader-mark-outline--bolt"
                pathLength="1"
                style={{ strokeDashoffset: 1 - boltTrace }}
              />
            </svg>

            <div
              className="loader-shine"
              style={{
                opacity: shine > 0 && shine < 1 ? 1 : 0,
                transform: `translateX(${-85 + shine * 210}%) rotate(10deg)`,
              }}
            />
          </div>
        </div>
      )}

      {children}
    </>
  );
}

function segment(value, start, end) {
  const raw = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return 1 - Math.pow(1 - raw, 3);
}

const LEAF_PATH =
  "M514 265 C487 195 507 127 570 76 C636 22 728 5 812 -7 C768 83 727 165 658 213 C611 246 567 263 514 265 Z";

const LEAF_VEIN_PATH =
  "M520 261 C571 186 642 98 760 26";

const BOLT_PATH =
  "M512 265 L492 365 L522 365 L484 508 L568 334 L538 334 L554 256 Z";