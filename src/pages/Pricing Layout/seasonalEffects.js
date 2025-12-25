export function loadSeasonalEffects() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const today = new Date();
  const month = today.getMonth(); // 0=Jan..11=Dec
  const date = today.getDate();
  const hour = today.getHours();
  const showSnow = (month === 11 && date >= 20) || (month === 0 && date === 1);
  const showFireworks = month === 11 && date === 31 && hour >= 18;
  if (showSnow) loadSnow();
  if (showFireworks) loadFireworks();
}
// ❄️ Snow
function loadSnow() {
  if (document.getElementById("snow-script")) return;
  const script = document.createElement("script");
  script.id = "snow-script";
  script.src =
    "https://cdn.jsdelivr.net/npm/snowplugin@4/plugin-dist/index.min.js?v=4";
  script.setAttribute("data-start-date", "11-20");
  script.setAttribute("data-end-date", "01-03");
  script.setAttribute("data-flakes", "60");
  script.setAttribute("data-size", "10");
  script.async = true;
  document.body.appendChild(script);
}
// 🎆 Fireworks
let fireworksIntervalId = null;
function loadFireworks() {
  if (document.getElementById("fireworks-script")) return;
  const script = document.createElement("script");
  script.id = "fireworks-script";
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.async = true;
  document.body.appendChild(script);
  script.onload = () => {
    if (fireworksIntervalId) return; // prevent duplicates
    fireworksIntervalId = window.setInterval(() => {
      window.confetti?.({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 2500);
  };
}
export function cleanupSeasonalEffects() {
  if (fireworksIntervalId) {
    clearInterval(fireworksIntervalId);
    fireworksIntervalId = null;
  }
}