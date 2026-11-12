const SNOW_CANVAS_ID = "seasonal-snow-canvas";
const SNOW_COLORS = ["#0b8f83"];
const SNOWFLAKE_COUNT = 48;

let snowAnimationFrameId = null;
let snowResizeHandler = null;

export function loadSeasonalEffects() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const showSnow = month === 10 || month === 11 || month === 0;
  const showFireworks = month === 11 && date === 31 && hour >= 18;

  if (showSnow) loadSnow();
  if (showFireworks) loadFireworks();
}

function loadSnow() {
  if (document.getElementById(SNOW_CANVAS_ID)) return;

  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    console.error("Unable to start seasonal snowfall: canvas is unavailable.");
    return;
  }

  canvas.id = SNOW_CANVAS_ID;
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "99998",
  });

  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const flakes = Array.from({ length: SNOWFLAKE_COUNT }, () => ({
    x: Math.random() * viewportWidth,
    y: Math.random() * viewportHeight,
    radius: 1.3 + Math.random() * 2.2,
    speed: 0.45 + Math.random() * 1.15,
    drift: (Math.random() - 0.5) * 0.8,
    color: SNOW_COLORS[Math.floor(Math.random() * SNOW_COLORS.length)],
  }));

  const resizeCanvas = () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    canvas.width = Math.round(viewportWidth * pixelRatio);
    canvas.height = Math.round(viewportHeight * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const drawSnow = () => {
    context.clearRect(0, 0, viewportWidth, viewportHeight);

    flakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += flake.drift + Math.sin(flake.y / 70) * 0.25;

      if (flake.y > viewportHeight + flake.radius) {
        flake.y = -flake.radius;
        flake.x = Math.random() * viewportWidth;
      }
      if (flake.x < -flake.radius) flake.x = viewportWidth + flake.radius;
      if (flake.x > viewportWidth + flake.radius) flake.x = -flake.radius;

      context.globalAlpha = 0.55 + flake.radius * 0.08;
      context.fillStyle = flake.color;
      context.beginPath();
      context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    snowAnimationFrameId = window.requestAnimationFrame(drawSnow);
  };

  resizeCanvas();
  snowResizeHandler = resizeCanvas;
  window.addEventListener("resize", snowResizeHandler);
  document.body.appendChild(canvas);
  snowAnimationFrameId = window.requestAnimationFrame(drawSnow);
}

function loadFireworks() {
  if (document.getElementById("fireworks-script")) return;

  const script = document.createElement("script");
  script.id = "fireworks-script";
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    window.confetti?.({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };
}

export function cleanupSeasonalEffects() {
  if (snowAnimationFrameId !== null) {
    window.cancelAnimationFrame(snowAnimationFrameId);
    snowAnimationFrameId = null;
  }
  if (snowResizeHandler) {
    window.removeEventListener("resize", snowResizeHandler);
    snowResizeHandler = null;
  }
  document.getElementById(SNOW_CANVAS_ID)?.remove();
}