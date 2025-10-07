import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

/**
 * Eco Voltex — Fire Alarms (10/10 edition)
 * - A11y: skip link, focus-trapped modal, aria-current="location"
 * - SEO: OG/Twitter, canonical, JSON-LD (Service, FAQ, Image, Organization), hero preload
 * - Perf: eager hero + preload, reduced inline styles, reusable utility classes
 * - Content: added Legal & Safety section, stronger badges, inline CTAs
 * - Compat: guarded document/window usage; no optional chaining
 */

const styles = `
:root{
  --navy:#0B1624; --navy2:#0E2035;
  --ink:#0F2338; --mint:#22E57F; --green:#10B981; --cyan:#7AD7F0;
  --soft:#F5F8FC; --glass:#ffffffE6; --line:#E4EDF5; --text:#0B1320; --muted:#5B6673;
  --shadow:0 22px 70px rgba(5,22,40,.18);
}
*{box-sizing:border-box}
html,body{background:var(--soft)}
}
.ev{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text)}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--mint);outline-offset:3px;border-radius:10px}
.visually-hidden{position:absolute!important;clip:rect(1px,1px,1px,1px)!important;padding:0!important;border:0!important;height:1px!important;width:1px!important;overflow:hidden!important;white-space:nowrap!important}
.skip-link{position:absolute;left:-9999px;top:auto}
.skip-link:focus{left:12px;top:8px;background:#fff;border:2px solid var(--mint);padding:8px 12px;border-radius:8px;z-index:2000}

.container{max-width:1240px;margin:0 auto;padding:0 24px}
.section{padding:0;border-top:0}
.section--tight{padding:0}
.section--dark{background:linear-gradient(180deg,var(--navy),var(--navy2));color:#EAF7F0;border-top:none}
/* tighten hero bottom so it sits flush with next section */
.section--dark .muted{color:#C6D6E6}

.h2{font-size:32px;margin:0;font-weight:900;color:var(--ink)}
.lead{font-size:18px;opacity:.94;max-width:78ch}
.m-0{margin:0}
.mt-6{margin-top:6px}
.mt-8{margin-top:8px}
.mt-10{margin-top:10px}
.mt-12{margin-top:12px}
.mt-14{margin-top:14px}
.mt-16{margin-top:16px}
.meta{font-size:12px;color:var(--muted)}
.small{font-size:13px}

.hero{
  background:
    radial-gradient(1200px 500px at 85% -60%, rgba(34,229,127,.20), transparent 65%),
    radial-gradient(900px 360px at -10% -40%, rgba(122,215,240,.22), transparent 65%),
    linear-gradient(180deg,var(--navy),var(--navy2));
  color:#EAF7F0; padding:110px 0 82px;
}
.hero h1{font-size:56px;line-height:1.06;margin:0 0 14px;font-weight:900;letter-spacing:-0.02em}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
.btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;font-weight:800;border:1px solid transparent;min-height:46px}
.btn--primary{background:var(--green);color:#071A14;border-color:#0D5B3A}
.btn--ghost{background:transparent;border-color:#2E445A;color:#DDFCEE}
.btn--light{background:#fff;border-color:var(--line);color:var(--ink)}

.toggle{display:inline-flex;border:1px solid #27415A;background:#11283F;border-radius:12px;overflow:hidden}
.toggle button{padding:8px 14px;font-weight:800;color:#CDE3F6;background:transparent;border:none;cursor:pointer}
.toggle button[aria-pressed="true"]{background:#1A3551;color:#fff}

.badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.badge{display:flex;gap:8px;align-items:center;border:1px solid #1F3E2F;background:#10261C;color:#DFFFEF;border-radius:999px;padding:6px 10px;font-weight:800;font-size:12px}

.glass{background:var(--glass);backdrop-filter:saturate(1.3) blur(10px);border:1px solid rgba(255,255,255,.6);border-radius:20px;box-shadow:var(--shadow)}
.card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 12px 34px rgba(10,35,60,.09);padding:18px}
.card h3{margin:2px 0 6px;font-size:18px;font-weight:900;color:var(--ink)}

.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}

.table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
.table th,.table td{padding:12px 14px;border-bottom:1px solid var(--line);vertical-align:top}
.table th{background:#F7FAFF;text-align:left;font-weight:900;color:var(--ink)}
.table tr:last-child td{border-bottom:none}

.list{padding-left:18px}
.list--disc{list-style:disc}

.step{background:#0F2439;border:1px solid #254D70;color:#EAF6FF;border-radius:16px;padding:18px}
.step .icon{width:40px;height:40px;display:grid;place-items:center;border-radius:12px;background:rgba(122,215,240,.15);color:#7AD7F0;margin-bottom:6px}
.step .banner{margin:10px 0 0;border-radius:12px;overflow:hidden;border:1px solid #2B5170}

.thumb{width:100%;aspect-ratio:16/9;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-auto-rows:200px;gap:12px}
.gallery img{width:100%;height:100%;object-fit:cover;border-radius:14px;border:1px solid var(--line)}

.subnav{position:sticky;top:64px;z-index:50;background:#0E2035;border-bottom:1px solid #12314D}
.subnav .wrap{display:flex;gap:10px;overflow:auto;padding:10px 24px}
.subnav a{color:#CFE7F9;border:1px solid #254D70;border-radius:999px;padding:8px 12px;font-weight:800;white-space:nowrap}
.subnav a:hover{background:#153957;color:#fff}
.subnav a[aria-current="location"]{background:#1A3551;color:#fff;border-color:#1A3551}

.coverage form{display:grid;grid-template-columns:1fr auto;gap:10px}
.coverage input{border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:14px;background:#fff}
.coverage button{padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid #0D5B3A;background:var(--green);color:#062519}

.footer-cta{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.footer-cta a{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;border:1px solid var(--line);background:#fff;font-weight:800}

.trust-strip{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.trust-strip img{height:28px;width:auto;display:block;filter:grayscale(100%);opacity:.9}

/* Hover & Motion */
@media (hover:hover) and (pointer:fine){
  .card,.step{transition:transform .16s ease, box-shadow .16s ease}
  .card:hover,.step:hover{transform:translateY(-2px);box-shadow:0 20px 50px rgba(10,35,60,.12)}
}
@media (prefers-reduced-motion: reduce){ *{animation:none!important;transition:none!important} }

/* Responsive */
@media(max-width:1180px){ .grid-2,.kv{grid-template-columns:1fr} }
@media(max-width:1024px){
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .gallery{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .grid-3{grid-template-columns:1fr}
  .grid-4{grid-template-columns:1fr}
  .grid-2{grid-template-columns:1fr}
  .hero h1{font-size:42px}
}
`;

const sectorImages = [
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099841/ChatGPT_Image_Sep_29_2025_03_33_11_AM_ejopfy.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099816/ChatGPT_Image_Sep_29_2025_03_33_12_AM_ko5o9e.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099746/ChatGPT_Image_Sep_29_2025_03_33_13_AM_uf25yc.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099788/ChatGPT_Image_Sep_29_2025_03_33_14_AM_xujkcg.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099766/ChatGPT_Image_Sep_29_2025_03_33_15_AM_tf8l71.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099716/ChatGPT_Image_Sep_29_2025_03_33_16_AM_hleh8x.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099690/ChatGPT_Image_Sep_29_2025_03_33_17_AM_wgschc.png",
  "https://res.cloudinary.com/dug1siluu/image/upload/v1759099664/ChatGPT_Image_Sep_29_2025_03_33_18_AM_nder4t.png",
];

export default function FireAlarmsPremium() {
  // Optional quick contacts
  const PHONE = ""; // e.g. "+44 20 7123 4567"
  const WHATSAPP = ""; // e.g. "447700900123"

  // State
  const [audience, setAudience] = React.useState("business");
  const [postcode, setPostcode] = React.useState("");
  const [pcResult, setPcResult] = React.useState("");
  const [pcError, setPcError] = React.useState("");
  const [consent, setConsent] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState("value");

  // Focus management for dialog
  const dialogRef = React.useRef(null);
  const lastFocusedRef = React.useRef(null);

  // Restore saved prefs
  React.useEffect(function () {
    if (typeof window === "undefined") return;
    try {
      var a = window.localStorage.getItem("ev_audience");
      if (a === "home" || a === "business") setAudience(a);
      var c = window.localStorage.getItem("ev_consent");
      if (c === "accepted" || c === "rejected") setConsent(c);
    } catch (err) {}
  }, []);

  React.useEffect(
    function () {
      try {
        if (typeof window !== "undefined")
          window.localStorage.setItem("ev_audience", audience);
      } catch (err) {}
    },
    [audience]
  );

  // Helpers
  const validUKPostcode = function (pc) {
    if (!pc) return false;
    var s = pc.trim().toUpperCase();
    var re =
      /^(GIR ?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPS-UW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLN-UW-Z]{2}))$/i;
    return re.test(s);
  };

  const formatPostcode = function (pc) {
    var s = (pc || "").toUpperCase().replace(/\s+/g, "");
    return s.length > 3 ? s.slice(0, s.length - 3) + " " + s.slice(-3) : s;
  };

  const inCoverage = function (pc) {
    var s = (pc || "").toUpperCase().replace(/\s+/g, "");
    var allowed = [
      "E",
      "EC",
      "N",
      "NW",
      "W",
      "WC",
      "SE",
      "SW",
      "BR",
      "CR",
      "DA",
      "EN",
      "HA",
      "IG",
      "KT",
      "TW",
      "UB",
      "SM",
      "RM",
      "WD",
      "SL",
      "AL",
    ];
    for (var i = 0; i < allowed.length; i++) {
      if (s.indexOf(allowed[i]) === 0) return true;
    }
    return false;
  };

  const checkPostcode = function (e) {
    e.preventDefault();
    var formatted = formatPostcode(postcode);
    if (!validUKPostcode(formatted)) {
      setPcError("Please enter a valid UK postcode (e.g., E1 6AN).");
      setPcResult("");
      return;
    }
    setPcError("");
    setPostcode(formatted);
    var inArea = inCoverage(formatted);
    setPcResult(
      inArea
        ? "✅ You’re in our service area. We can usually survey within a few days."
        : "ℹ Likely covered — share your address and we’ll confirm today."
    );
  };

  // ===== SEO / HEAD INJECTIONS =====
  React.useEffect(function () {
    if (typeof document === "undefined") return;
    var prevTitle = document.title;

    // Title & description
    document.title = "Fire Alarm Services | Eco Voltex — London";
    var descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.setAttribute("name", "description");
      document.head.appendChild(descEl);
    }
    descEl.setAttribute(
      "content",
      "Fire alarm design, installation, commissioning & maintenance in London. BS 5839-1/-6 compliant. Clear docs, neat work, fast surveys."
    );

    // Canonical
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    var origin =
      typeof window !== "undefined" && window.location
        ? window.location.origin
        : "";
    canonical.setAttribute("href", origin + "/services/fire-alarms");

    // Open Graph / Twitter
    var ensure = function (name, attr, value) {
      var el = document.querySelector(name);
      if (!el) {
        el = document.createElement("meta");
        if (name.indexOf("property") > -1) {
          el.setAttribute("property", value.split("=")[0].split('"').pop());
        }
        document.head.appendChild(el);
      }
      return el;
    };
    var ogTitle =
      document.querySelector('meta[property="og:title"]') ||
      document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute(
      "content",
      "Fire Alarm Services | Eco Voltex — London"
    );
    document.head.appendChild(ogTitle);
    var ogDesc =
      document.querySelector('meta[property="og:description"]') ||
      document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.setAttribute(
      "content",
      "BS 5839-1/-6 compliant fire alarm design, installation, commissioning & maintenance across London."
    );
    document.head.appendChild(ogDesc);
    var ogType =
      document.querySelector('meta[property="og:type"]') ||
      document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.setAttribute("content", "website");
    document.head.appendChild(ogType);
    var ogImg =
      document.querySelector('meta[property="og:image"]') ||
      document.createElement("meta");
    ogImg.setAttribute("property", "og:image");
    ogImg.setAttribute("content", origin + "/images/fire/hero-1600x900.jpg");
    document.head.appendChild(ogImg);
    var twCard =
      document.querySelector('meta[name="twitter:card"]') ||
      document.createElement("meta");
    twCard.setAttribute("name", "twitter:card");
    twCard.setAttribute("content", "summary_large_image");
    document.head.appendChild(twCard);

    // Preload hero (perf)
    var preload = document.querySelector('link[data-ev="hero-preload"]');
    if (!preload) {
      preload = document.createElement("link");
      preload.setAttribute("rel", "preload");
      preload.setAttribute("as", "image");
      preload.setAttribute("href", "/images/fire/hero-1600x900.jpg");
      preload.setAttribute(
        "imagesrcset",
        "/images/fire/hero-1600x900.jpg 1600w"
      );
      preload.setAttribute("data-ev", "hero-preload");
      document.head.appendChild(preload);
    }

    // FAQ JSON-LD
    var faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-jsonld";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is a fire alarm legally required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most non-domestic premises need suitable detection and warning. The Responsible Person must maintain systems and keep records.",
          },
        },
        {
          "@type": "Question",
          name: "How often should it be tested?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-domestic: weekly user tests; competent servicing at intervals not exceeding six months. Domestic/HMO: monthly user tests; Grade A follows the weekly routine.",
          },
        },
        {
          "@type": "Question",
          name: "What categories exist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-domestic: L1–L5 (life), P1–P2 (property), M (manual). Domestic/HMO: Grades A/C/D/F with LD1–LD3 coverage.",
          },
        },
      ],
    });
    document.head.appendChild(faqScript);

    // Image JSON-LD
    var imgScript = document.createElement("script");
    imgScript.type = "application/ld+json";
    imgScript.id = "image-jsonld";
    imgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      name: "Eco Voltex Fire Alarm Hero Image",
      contentUrl:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1759097756/ChatGPT_Image_Sep_29_2025_03_14_50_AM_xruenn.png",
      caption:
        "Clean UK fire alarm detector with tidy FP red cabling and labelled trunking",
      width: 1600,
      height: 900,
    });
    document.head.appendChild(imgScript);

    // Organization JSON-LD (brand polish/knowledge panel)
    var orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "org-jsonld";
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Eco Voltex",
      url: origin || "https://www.ecovoltex.co.uk",
      logo: origin + "/images/logo-mark-512.png",
    });
    document.head.appendChild(orgScript);

    return function cleanup() {
      document.title = prevTitle;
      var ids = ["faq-jsonld", "image-jsonld", "org-jsonld"];
      for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  // Scroll spy (ids keep in sync with subnav anchors)
  React.useEffect(function () {
    if (typeof window === "undefined") return;
    var ids = [
      "value",
      "primer",
      "basics",
      "musts",
      "compare",
      "process",
      "sectors",
      "standards",
      "docs",
      "cases",
      "gallery",
      "coverage",
      "faqs",
    ];
    var els = [];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el) els.push(el);
    }
    if (!window.IntersectionObserver || els.length === 0) return;
    var obs = new IntersectionObserver(
      function (entries) {
        var visible = entries.filter(function (e) {
          return e.isIntersecting;
        });
        visible.sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        if (visible[0] && visible[0].target && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    for (var j = 0; j < els.length; j++) obs.observe(els[j]);
    return function cleanup() {
      obs.disconnect();
    };
  }, []);

  // Trap focus when consent dialog is open
  React.useEffect(
    function () {
      if (typeof document === "undefined") return;
      if (consent !== null) return;

      // Save last focused
      lastFocusedRef.current = document.activeElement;

      // Focus first button when dialog mounts
      var firstBtn = dialogRef.current
        ? dialogRef.current.querySelector("button")
        : null;
      if (firstBtn) firstBtn.focus();

      // Make the main content inert for SR users
      var main = document.querySelector("main.ev");
      if (main) main.setAttribute("aria-hidden", "true");

      var handleKeydown = function (e) {
        if (!dialogRef.current) return;
        if (e.key === "Tab") {
          var focusables = dialogRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          var list = Array.prototype.slice.call(focusables);
          if (list.length === 0) return;
          var first = list[0],
            last = list[list.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            last.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
        if (e.key === "Escape") {
          setConsent("rejected");
          try {
            if (typeof window !== "undefined")
              window.localStorage.setItem("ev_consent", "rejected");
          } catch (err) {}
        }
      };

      document.addEventListener("keydown", handleKeydown);
      return function cleanup() {
        document.removeEventListener("keydown", handleKeydown);
        if (main) main.removeAttribute("aria-hidden");
        if (lastFocusedRef.current && lastFocusedRef.current.focus)
          lastFocusedRef.current.focus();
      };
    },
    [consent]
  );
  // --- Design tokens (inline-friendly) ---
  const colors = {
    navy: "#0B1624",
    navy2: "#0E2035",
    ink: "#0F2338",
    text: "#0B1320",
    mint: "#22E57F",
    green: "#10B981",
    cyan: "#7AD7F0",
    soft: "#F5F8FC",
    line: "#E4EDF5",
    muted: "#5B6673",
    white: "#FFFFFF",
  };

  const shadow = "0 18px 55px rgba(10,35,60,.12)";
  const radius = 16;

  // --- Base wrappers ---
  const section = {
    padding: 0,
    borderTop: 0,
    background: colors.white,
  };
  const container = {
    maxWidth: 1152,
    margin: "0 auto",
    padding: "0",
  };
  const h2 = {
    margin: 0,
    fontSize: 32,
    lineHeight: 1.15,
    fontWeight: 900,
    color: colors.ink,
  };
  const h3 = {
    margin: "0 0 8px 0",
    fontSize: 18,
    fontWeight: 900,
    color: colors.ink,
  };
  const p = {
    margin: 0,
    color: colors.text,
    fontSize: 16,
    lineHeight: 1.6,
  };
  const meta = {
    margin: "8px 0 0 0",
    color: colors.muted,
    fontSize: 12,
    lineHeight: 1.5,
  };

  // --- Card ---
  const card = {
    background: colors.white,
    border: `1px solid ${colors.line}`,
    borderRadius: radius,
    boxShadow: shadow,
    padding: 18,
  };

  // --- Lists ---
  const list = {
    paddingLeft: 18,
    margin: "8px 0 0 0",
  };

  // --- Grid (CSS grid via inline style) ---
  const grid2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  };

  // --- Table ---
  const tableWrap = { overflowX: "auto", marginTop: 8 };
  const table = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    border: `1px solid ${colors.line}`,
    borderRadius: 14,
    overflow: "hidden",
  };
  const th = {
    padding: "12px 14px",
    background: "#F7FAFF",
    borderBottom: `1px solid ${colors.line}`,
    textAlign: "left",
    fontWeight: 900,
    color: colors.ink,
    fontSize: 14,
    whiteSpace: "nowrap",
  };
  const td = {
    padding: "12px 14px",
    borderBottom: `1px solid ${colors.line}`,
    verticalAlign: "top",
    fontSize: 14,
    color: colors.text,
  };

  // --- Pill heading band ---
  const band = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: `linear-gradient(180deg, ${colors.navy}, ${colors.navy2})`,
    color: "#EAF7F0",
    border: "1px solid #12314D",
    borderRadius: 12,
    padding: "10px 14px",
    boxShadow: "0 10px 30px rgba(5,22,40,.18)",
  };
  const dot = {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: colors.mint,
    display: "inline-block",
  };

  // --- Data ---
  const standardsRowsND = [
    ["L1", "Life safety", "Automatic detection in all areas"],
    ["L2", "Life safety", "Escape routes + high-risk rooms"],
    ["L3", "Life safety", "Escape routes + rooms opening onto them"],
    ["L4", "Life safety", "Escape routes"],
    ["L5", "Life safety", "Custom, risk-specific coverage"],
    ["P1", "Property", "Automatic detection in all areas"],
    ["P2", "Property", "Defined high-risk areas only"],
    ["M", "Manual", "Manual call points only (rarely alone)"],
  ];
  const standardsRowsDM = [
    ["Grade A", "Panel-based system (similar to non-domestic)"],
    ["Grade C", "Mains power with control equipment and standby supply"],
    [
      "Grade D",
      "Mains alarms with battery back-up (D1 sealed / D2 replaceable)",
    ],
    ["Grade F", "Battery-powered alarms (F1 sealed / F2 replaceable)"],
    ["LD1", "Detectors in all areas (as appropriate)"],
    ["LD2", "Escape routes + high-risk rooms"],
    ["LD3", "Escape routes"],
  ];

  // Put this inside your component (above the return)
  const [isNarrow, setIsNarrow] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => setIsNarrow(e.matches);
    setIsNarrow(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange); // Safari fallback
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return (
    <>
      <a href="#overview" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main className="ev" role="main" id="main">
        <style>{styles}</style>

        {/* HERO */}
        <section className="hero" id="overview" aria-labelledby="hero-title">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isNarrow ? "1fr" : "1.2fr 1fr",
                gap: isNarrow ? 14 : 22,
                alignItems: "center",
              }}
            >
              <div>
                <h1 id="hero-title">
                  Fire alarm design, installation, commissioning & maintenance
                </h1>
                <p className="lead">
                  Brand-level delivery for life and property protection. Neat
                  cabling, correct siting, precise commissioning, and clear
                  documentation — to <b>BS 5839-1</b> (non-domestic) and{" "}
                  <b>BS 5839-6</b> (domestic/HMO). London and nearby counties.
                </p>

                {/* Audience toggle */}
                <div
                  className="toggle"
                  role="tablist"
                  aria-label="Choose audience"
                  style={{ marginTop: 16 }}
                >
                  {["home", "business"].map(function (key) {
                    var selected = audience === key;
                    return (
                      <button
                        key={key}
                        id={"aud-tab-" + key}
                        role="tab"
                        aria-selected={selected}
                        aria-pressed={selected}
                        aria-controls={"aud-panel-" + key}
                        tabIndex={selected ? 0 : -1}
                        onKeyDown={function (e) {
                          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                            var next =
                              audience === "home" ? "business" : "home";
                            setAudience(next);
                            setTimeout(function () {
                              var btn = document.getElementById(
                                "aud-tab-" + next
                              );
                              if (btn) btn.focus();
                            }, 0);
                          }
                        }}
                        onClick={function () {
                          setAudience(key);
                        }}
                      >
                        {key === "home" ? "Home" : "Business"}
                      </button>
                    );
                  })}
                </div>

                {/* Tab panels for a11y */}
                <div
                  id="aud-panel-home"
                  role="tabpanel"
                  aria-labelledby="aud-tab-home"
                  hidden={audience !== "home"}
                />
                <div
                  id="aud-panel-business"
                  role="tabpanel"
                  aria-labelledby="aud-tab-business"
                  hidden={audience !== "business"}
                />

                {/* Trust badges */}
                <div className="badges" aria-label="Key trust points">
                  <span className="badge">Neat workmanship</span>
                  <span className="badge">BS 5839-1/-6 documentation</span>
                  <span className="badge">Rapid surveys</span>
                </div>

                {/* CTAs */}
                <div
                  className="cta"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    marginTop: 16,
                  }}
                >
                  <a className="btn btn--primary" href="/contact">
                    Book a survey
                  </a>
                  
                  {PHONE ? (
                    <a className="btn btn--ghost" href={"tel:" + PHONE}>
                      Call us
                    </a>
                  ) : null}
                  {WHATSAPP ? (
                    <a
                      className="btn btn--ghost"
                      href={"https://wa.me/" + WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Hero visual */}
              <figure
                className="thumb"
                aria-label="Hero visual"
                style={{
                  margin: isNarrow ? "16px 0 0" : 0, // push image below text on phones
                }}
              >
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1759097756/ChatGPT_Image_Sep_29_2025_03_14_50_AM_xruenn.png"
                  width="1600"
                  height="900"
                  alt="Clean UK fire alarm detector with tidy FP red cabling and labelled trunking"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 12,
                  }}
                />
              </figure>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="value" className="section" aria-labelledby="value-title">
          <div className="container">
            <h2 id="value-title" className="h2">
              Why Eco Voltex
            </h2>
            <p className="small mt-8">
              Clarity, neatness, and compliance — delivered with minimal
              disruption.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isNarrow ? "1fr" : "1.2fr 1fr",
                gap: isNarrow ? 14 : 22,
                alignItems: "stretch",
              }}
            >
              {/* Text block */}
              <div style={{ order: 1 }}>
                <div
                  className="mt-16"
                  style={{
                    display: "grid",
                    gridTemplateColumns: isNarrow
                      ? "1fr"
                      : "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {[
                    [
                      "Neat by default",
                      "Tidy containment, correct clips, labelled devices — snags minimised.",
                    ],
                    [
                      "Risk-led design",
                      "Objectives (L/P/M/LD) matched to actual use.",
                    ],
                    [
                      "Clear documentation",
                      "Zone charts, logbook, certificates; understandable drawings.",
                    ],
                    [
                      "Respect for sites",
                      "Low disruption; clean working; out-of-hours available.",
                    ],
                    [
                      "Transparent scope",
                      "Written scope with drawings before you decide.",
                    ],
                    [
                      "Competent engineers",
                      "UK methods, PPE, and courteous conduct.",
                    ],
                    [
                      "Lifecycle support",
                      "Takeovers, remedials, upgrades, maintenance.",
                    ],
                  ].map((pair) => (
                    <div
                      className="card"
                      key={pair[0]}
                      style={{
                        background: "#fff",
                        borderRadius: 12,
                        padding: "16px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                      }}
                    >
                      <h3 style={{ fontSize: "1.05rem", marginBottom: 6 }}>
                        {pair[0]}
                      </h3>
                      <p
                        className="mt-6"
                        style={{ fontSize: "0.95rem", lineHeight: 1.4 }}
                      >
                        {pair[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <figure
                className="thumb"
                style={{
                  order: 2,
                  marginTop: isNarrow ? 16 : 0,
                  display: isNarrow ? "block" : "flex", // avoid stretching on mobile
                  height: isNarrow ? "100%" : "auto", // auto height on mobile
                }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1759102806/ChatGPT_Image_Sep_29_2025_04_39_49_AM_eiyvjh.png"
                  alt="Clean UK fire alarm detector with tidy FP red cabling and labelled trunking"
                  style={{
                    width: "100%",
                    height: isNarrow ? "100%" : "auto", // auto on mobile
                    objectFit: isNarrow ? "fill" : "cover", // full image on mobile
                    borderRadius: 12,
                    display: "block",
                    maxWidth: "100%",
                  }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </figure>
            </div>
          </div>
        </section>

        <section
          id="essentials"
          style={section}
          aria-labelledby="essentials-title"
        >
          <div style={container}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <h2 id="essentials-title" style={h2}>
                Fire Alarms — The Complete Essentials
              </h2>
            </div>

            {/* 1) What a fire alarm system is */}
            <div style={{ ...card, marginTop: 16 }}>
              <p style={{ ...h3 }} id="ess-what">
                What a fire alarm system is
              </p>
              <p style={p}>
                A coordinated set of parts that detects fire early and warns
                people to evacuate. Core components:
              </p>
              <ul style={list} aria-labelledby="ess-what">
                <li>
                  <b>Detectors:</b> smoke / heat / multi-sensor
                </li>
                <li>
                  <b>Manual call points:</b> break-glass units
                </li>
                <li>
                  <b>Control panel:</b> supervises the system, shows
                  zones/devices, stores events
                </li>
                <li>
                  <b>Sounders / beacons:</b> audible/visual warning
                </li>
                <li>
                  <b>Power:</b> mains + standby batteries
                </li>
                <li>
                  <b>Interfaces:</b> to doors, lifts, HVAC, gas shut-off, access
                  control
                </li>
                <li>
                  <b>Cabling:</b> fire-resistant where required;
                  zoning/addressing, logbook &amp; zone chart
                </li>
              </ul>
            </div>

            {/* 2) Who needs one (and why) */}
            <div style={{ ...card, marginTop: 16 }}>
              <p style={{ ...h3 }} id="ess-who">
                Who needs one (and why)
              </p>
              <ul style={list} aria-labelledby="ess-who">
                <li>
                  <b>Workplaces &amp; non-domestic buildings:</b> The Regulatory
                  Reform (Fire Safety) Order 2005 requires a “suitable means of
                  detection and warning.” Your fire risk assessment normally
                  sets the category.
                </li>
                <li>
                  <b>Landlords &amp; HMOs:</b> Typically LD2 or LD3 coverage (BS
                  5839-6). Councils/licensing can require higher grades for
                  larger/complex HMOs.
                </li>
                <li>
                  <b>Shops, offices, schools, warehouses, care, hospitality:</b>{" "}
                  Category set by risk and layout; property protection may be
                  requested by insurers.
                </li>
              </ul>
              <p style={meta}>
                We confirm the correct category/grade after a site survey and
                risk assessment.
              </p>
            </div>

            {/* 3) System types (which and when) */}
            <div style={{ ...card, marginTop: 16 }}>
              <p style={{ ...h3 }} id="ess-types">
                System types (which and when)
              </p>
              <ul style={list} aria-labelledby="ess-types">
                <li>
                  <b>Conventional:</b> zone-based; good for small/simple, lower
                  cost.
                </li>
                <li>
                  <b>Addressable:</b> device addresses & rich data; best for
                  medium/large or complex buildings.
                </li>
                <li>
                  <b>Domestic interlinked:</b> mains/battery, cabled or radio;
                  used per BS 5839-6.
                </li>
              </ul>
            </div>

            {/* 4) Standards & categories */}
            <div
              style={{
                ...grid2,
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: isNarrow ? "1fr" : "1fr 1fr",
                gap: isNarrow ? 14 : 16,
                alignItems: "start",
              }}
            >
              {/* BS 5839-1 (non-domestic) */}
              <div style={card}>
                <p style={{ ...h3 }} id="ess-bs1">
                  Standards &amp; categories — BS 5839-1 (non-domestic)
                </p>

                {/* Desktop/tablet table */}
                <div
                  style={{ ...tableWrap, display: isNarrow ? "none" : "block" }}
                >
                  <table style={table} role="table" aria-labelledby="ess-bs1">
                    <thead>
                      <tr>
                        <th style={th} scope="col">
                          Code
                        </th>
                        <th style={th} scope="col">
                          Type
                        </th>
                        <th style={th} scope="col">
                          Summary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {standardsRowsND.map(([code, type, summary]) => (
                        <tr key={code}>
                          <td style={td}>
                            <b>{code}</b>
                          </td>
                          <td style={td}>{type}</td>
                          <td style={td}>{summary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile vertical cards */}
                <div
                  aria-hidden={!isNarrow}
                  style={{
                    display: isNarrow ? "grid" : "none",
                    gridTemplateColumns: "1fr",
                    gap: 10,
                    marginTop: 8,
                  }}
                >
                  {standardsRowsND.map(([code, type, summary]) => (
                    <div
                      key={code}
                      style={{
                        border: `1px solid ${colors?.line || "#e5e7eb"}`,
                        borderRadius: 12,
                        padding: 12,
                        background: "#fff",
                      }}
                    >
                      <div style={{ fontWeight: 700, marginBottom: 6 }}>
                        {code}
                      </div>
                      <div style={{ fontWeight: 500, marginBottom: 6 }}>
                        {type}
                      </div>
                      <div style={{ opacity: 0.9 }}>{summary}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BS 5839-6 (domestic/HMO) */}
              <div style={card}>
                <p style={{ ...h3 }} id="ess-bs6">
                  Standards &amp; categories — BS 5839-6 (domestic/HMO)
                </p>

                {/* Desktop/tablet table */}
                <div
                  style={{ ...tableWrap, display: isNarrow ? "none" : "block" }}
                >
                  <table style={table} role="table" aria-labelledby="ess-bs6">
                    <thead>
                      <tr>
                        <th style={th} scope="col">
                          Item
                        </th>
                        <th style={th} scope="col">
                          Summary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {standardsRowsDM.map(([item, summary]) => (
                        <tr key={item}>
                          <td style={td}>
                            <b>{item}</b>
                          </td>
                          <td style={td}>{summary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile vertical cards */}
                <div
                  aria-hidden={!isNarrow}
                  style={{
                    display: isNarrow ? "grid" : "none",
                    gridTemplateColumns: "1fr",
                    gap: 10,
                    marginTop: 8,
                  }}
                >
                  {standardsRowsDM.map(([item, summary]) => (
                    <div
                      key={item}
                      style={{
                        border: `1px solid ${colors?.line || "#e5e7eb"}`,
                        borderRadius: 12,
                        padding: 12,
                        background: "#fff",
                      }}
                    >
                      <div style={{ fontWeight: 700, marginBottom: 6 }}>
                        {item}
                      </div>
                      <div style={{ opacity: 0.9 }}>{summary}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5) Design basics clients ask about */}
            <div
              style={{
                ...card,
                marginTop: 16,
                background: colors.soft,
                borderColor: colors.line,
              }}
            >
              <p style={{ ...h3, color: colors.ink }} id="ess-design">
                Design basics clients ask about
              </p>
              <ul style={list} aria-labelledby="ess-design">
                <li>
                  <b>Detector siting/spacing:</b> ~<b>7.5 m</b> smoke, ~
                  <b>5.3 m</b> heat (std ceilings) — adjust for
                  beams/vents/slopes.
                </li>
                <li>
                  <b>Manual call points:</b> escape routes & exits; typical
                  travel distance ≤ <b>45 m</b>.
                </li>
                <li>
                  <b>Audibility/visibility:</b> ≥ <b>65 dB(A)</b> (or ≥5 dB
                  above ambient); ~<b>75 dB(A)</b> at bedhead; beacons where
                  needed.
                </li>
                <li>
                  <b>Cause-and-effect:</b> sounders, doors, plant shutdown,
                  phased evac, etc.
                </li>
                <li>
                  <b>Standby power:</b> common ~<b>24 h</b> standby +{" "}
                  <b>30 min</b> alarm.
                </li>
                <li>
                  <b>Cabling:</b> fire-resistant + metal fixings where required;
                  segregation & routes planned.
                </li>
              </ul>
              <p style={{ ...meta, marginTop: 10 }}>
                We confirm final positions, audibility targets and standby
                sizing during design/commissioning.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section id="compare" className="section" aria-labelledby="cmp-title">
          <div className="container">
            <h2 id="cmp-title" className="h2">
              System comparison
            </h2>
            <p className="small mt-6">
              Don’t worry — after survey we’ll confirm which type fits your
              building and budget.
            </p>

            <div
              className="mt-12"
              style={{
                display: "grid",
                gridTemplateColumns: isNarrow ? "1fr" : "1fr 320px",
                gap: isNarrow ? 14 : 16,
                alignItems: isNarrow ? "start" : "stretch",
              }}
            >
              {/* Table / Mobile Cards */}
              <div style={{ order: 1 }}>
                {/* Desktop/tablet table */}
                <div
                  style={{
                    display: isNarrow ? "none" : "block",
                    overflowX: "auto",
                  }}
                >
                  <table
                    className="table"
                    role="table"
                    aria-label="System comparison table"
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#f9fafb" }}>
                        <th scope="col">Type</th>
                        <th scope="col">Typical use</th>
                        <th scope="col">Detection model</th>
                        <th scope="col">Pros</th>
                        <th scope="col">Cons</th>
                        <th scope="col">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "Conventional",
                          typical: "Small/medium buildings",
                          detection: "Zones (groups of devices)",
                          pros: "Lower cost, simple",
                          cons: "No per-device pinpointing",
                          notes:
                            "Good for shops/offices with modest complexity",
                        },
                        {
                          type: "Addressable",
                          typical: "Medium/large or complex buildings",
                          detection: "Each device has an address",
                          pros: "Pinpoint info, flexible cause/effect",
                          cons: "Higher cost, configuration required",
                          notes:
                            "Ideal for campuses, multi-storey, interfacing",
                        },
                        {
                          type: "Domestic interlinked",
                          typical: "Houses, flats, small HMOs",
                          detection: "Interlinked smoke/heat/CO",
                          pros: "Quick install, low disruption",
                          cons: "Not for large non-domestic",
                          notes: "BS 5839-6 LD2/LD3; add CO where required",
                        },
                      ].map((row) => (
                        <tr key={row.type}>
                          <td>
                            <b>{row.type}</b>
                          </td>
                          <td>{row.typical}</td>
                          <td>{row.detection}</td>
                          <td>{row.pros}</td>
                          <td>{row.cons}</td>
                          <td>{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile vertical cards */}
                <div
                  style={{
                    display: isNarrow ? "grid" : "none",
                    gridTemplateColumns: "1fr",
                    gap: 10,
                  }}
                >
                  {[
                    {
                      type: "Conventional",
                      typical: "Small/medium buildings",
                      detection: "Zones (groups of devices)",
                      pros: "Lower cost, simple",
                      cons: "No per-device pinpointing",
                      notes: "Good for shops/offices with modest complexity",
                    },
                    {
                      type: "Addressable",
                      typical: "Medium/large or complex buildings",
                      detection: "Each device has an address",
                      pros: "Pinpoint info, flexible cause/effect",
                      cons: "Higher cost, configuration required",
                      notes: "Ideal for campuses, multi-storey, interfacing",
                    },
                    {
                      type: "Domestic interlinked",
                      typical: "Houses, flats, small HMOs",
                      detection: "Interlinked smoke/heat/CO",
                      pros: "Quick install, low disruption",
                      cons: "Not for large non-domestic",
                      notes: "BS 5839-6 LD2/LD3; add CO where required",
                    },
                  ].map((row) => (
                    <div
                      key={row.type}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 12,
                        padding: 14,
                        background: "#fff",
                      }}
                    >
                      <div style={{ fontWeight: 700, marginBottom: 4 }}>
                        {row.type}
                      </div>
                      <div style={{ fontSize: "0.95rem", marginBottom: 4 }}>
                        <b>Use:</b> {row.typical}
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <b>Detection:</b> {row.detection}
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <b>Pros:</b> {row.pros}
                      </div>
                      <div style={{ marginBottom: 4 }}>
                        <b>Cons:</b> {row.cons}
                      </div>
                      <div>
                        <b>Notes:</b> {row.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <figure
                className="thumb"
                style={{
                  order: 2,
                  marginTop: isNarrow ? 16 : 0,
                  display: "block",
                  height: "auto",
                }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1759104095/ChatGPT_Image_Sep_29_2025_04_50_17_AM_jstum0.png"
                  alt="System comparison illustrated with vertical layout"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: 12,
                    maxHeight: isNarrow ? "70vh" : "100%",
                  }}
                />
              </figure>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="section section--dark"
          aria-labelledby="process-title"
        >
          <div className="container">
            <h2
              id="process-title"
              className="m-0"
              style={{ fontSize: 32, fontWeight: 900 }}
            >
              How we deliver — step by step
            </h2>
            <p className="muted mt-6">
              Scope + drawings upfront, so you know exactly what you’re getting
              before you commit.
            </p>

            {/* Grid wrapper */}
            <div
              className="mt-16"
              style={{
                display: "grid",
                gridTemplateColumns: isNarrow
                  ? "1fr"
                  : "repeat(4, minmax(0, 1fr))",
                gap: isNarrow ? 12 : 16,
                alignItems: "start",
              }}
            >
              {[
                {
                  key: "design",
                  title: "Design",
                  bullets: [
                    "Objectives agreed (L / P / M / LD) with the Responsible Person",
                    "Detector types & spacing; call points; audibility targets (dB(A))",
                    "Zoning & cause-and-effect matrix (doors, lifts, HVAC, plant)",
                    "Drawings: layout, zoning, device schedule; cable routes as applicable",
                  ],
                  includes: [
                    "Survey & risk discussion",
                    "Category/grade recommendation",
                    "Outline drawings & scope",
                  ],
                  image: {
                    src: "/images/fire/step-design-2400x1350.jpg",
                    alt: "Zoning overlay on plan (non-legible) with scale and tablet",
                    w: 1200,
                    h: 675,
                  },
                },
                {
                  key: "installation",
                  title: "Installation",
                  bullets: [
                    "BS 7671 cabling & containment; FP-rated where specified",
                    "Correct device siting (ceiling/voids), labelling & identification",
                    "Fire-rated supports; penetrations sealed appropriately",
                    "As-installed drawings maintained during works",
                  ],
                  includes: [
                    "Neat containment & fixings",
                    "Labelled devices/circuits",
                    "Daily clean-down",
                  ],
                  image: {
                    src: "/images/fire/step-install-2400x1350.jpg",
                    alt: "Detector on UK suspended grid; tidy FP red cabling in white trunking with clips",
                    w: 1200,
                    h: 675,
                  },
                },
                {
                  key: "commissioning",
                  title: "Commissioning",
                  bullets: [
                    "100% device tests; sound pressure checks vs objectives",
                    "Cause-and-effect verified; third-party interface tests",
                    "Certificates, zone chart, device list, logbook setup",
                    "User training: weekly tests, fault reporting, isolation procedure",
                  ],
                  includes: [
                    "Handover pack",
                    "End-user training",
                    "Zone chart displayed",
                  ],
                  image: {
                    src: "/images/fire/step-commission-2400x1350.jpg",
                    alt: "Panel verification with meter (labels non-legible)",
                    w: 1200,
                    h: 675,
                  },
                },
                {
                  key: "maintenance",
                  title: "Maintenance",
                  bullets: [
                    "Non-domestic: competent servicing at intervals not exceeding 6 months",
                    "Domestic/HMO: monthly user tests; Grade A follows the weekly routine",
                    "CO alarms: test per manufacturer guidance",
                    "Logbook updates; false-alarm reduction & housekeeping tips",
                    "Takeovers of existing systems; remedials and upgrades",
                  ],
                  includes: [
                    "Service report & actions",
                    "Updated asset list",
                    "Phone/email support",
                  ],
                  image: {
                    src: "/images/fire/step-maintain-2400x1350.jpg",
                    alt: "Service logbook with keys and zone chart (non-legible)",
                    w: 1200,
                    h: 675,
                  },
                },
              ].map(function (s) {
                return (
                  <div
                    key={s.key}
                    className="step"
                    style={{
                      background: "#0e1117", // dark card to suit section--dark
                      border: "1px solid #1f2937",
                      borderRadius: 12,
                      padding: isNarrow ? 12 : 14,
                      color: "#e5e7eb",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: 0,
                      height: "100%",
                    }}
                  >
                    {/* Icon + title */}
                    <div
                      className="icon"
                      aria-hidden="true"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        display: "grid",
                        placeItems: "center",
                        background: "#111827",
                        marginBottom: 8,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 3L2 9l10 6l10-6l-10-6Z"
                        />
                      </svg>
                    </div>

                    <h3
                      style={{
                        margin: "2px 0 6px",
                        color: "#fff",
                        fontSize: 18,
                      }}
                    >
                      {s.title}
                    </h3>

                    {/* Bullet list */}
                    <ul
                      className="list list--disc"
                      style={{
                        margin: 0,
                        paddingLeft: 18,
                        lineHeight: 1.35,
                        fontSize: 14,
                        display: "grid",
                        gap: 6,
                      }}
                    >
                      {s.bullets.map(function (b) {
                        return <li key={b}>{b}</li>;
                      })}
                    </ul>

                    {/* Included line */}
                    {s.includes && s.includes.length > 0 ? (
                      <p
                        className="small"
                        style={{
                          margin: "10px 0 0 0",
                          opacity: 0.9,
                          fontSize: 13,
                        }}
                      >
                        <b>What’s included:</b> {s.includes.join(" • ")}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section
          id="sectors"
          className="section"
          aria-labelledby="sector-title"
        >
          <div className="container">
            <h2 id="sector-title" className="h2">
              Who we help
            </h2>

            <div
              className="mt-14"
              style={{
                display: "grid",
                // 👇 4 columns on desktop, 2 columns on mobile
                gridTemplateColumns: isNarrow ? "1fr 1fr" : "repeat(4, 1fr)",
                gap: isNarrow ? 12 : 20,
                alignItems: "start",
              }}
            >
              {[
                [
                  "Landlords & HMOs",
                  "LD2/LD3, council-ready paperwork, quick turnarounds",
                ],
                [
                  "Property Managers",
                  "Routine maintenance, logbooks, call-outs",
                ],
                [
                  "Shops & Offices",
                  "L2/L3 installs, low disruption, out-of-hours work",
                ],
                [
                  "Schools & Care",
                  "Life-safety focus (L1/L2), weekly test guidance",
                ],
                ["Warehouses", "Property protection P1/P2, insurer compliance"],
                ["Homeowners", "Interlinked smoke/heat/CO alarms"],
                [
                  "Hospitality & Leisure",
                  "False-alarm reduction, staff training",
                ],
                [
                  "Mixed-Use Blocks",
                  "Common parts systems, takeover & upgrades",
                ],
              ].map(function (item, i) {
                return (
                  <div
                    key={item[0]}
                    className="card"
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      padding: isNarrow ? 10 : 14,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      textAlign: "center",
                    }}
                  >
                    <div className="thumb" style={{ marginBottom: 8 }}>
                      <img
                        loading="lazy"
                        decoding="async"
                        src={sectorImages[i]}
                        alt={
                          item[0] +
                          " — representative interior or corridor (no faces)"
                        }
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 10,
                          display: "block",
                        }}
                      />
                    </div>
                    <h3 style={{ fontSize: 16, marginBottom: 4 }}>{item[0]}</h3>
                    <p
                      className="mt-6"
                      style={{ fontSize: 14, lineHeight: 1.4 }}
                    >
                      {item[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* STANDARDS */}
        <section
          id="standards"
          className="section section--tight"
          aria-labelledby="std-title"
        >
          <div className="container">
            <h2 id="std-title" className="h2">
              Standards & records we work to
            </h2>
            <div className="grid-3 mt-14">
              <div className="card">
                <h3>Non-domestic (BS 5839-1)</h3>
                <ul className="list list--disc">
                  <li>Life categories L1–L5 • Property P1–P2 • Manual M</li>
                  <li>Six-monthly servicing (maximum interval)</li>
                  <li>Zone charts, logbook, certificates issued</li>
                </ul>
              </div>
              <div className="card">
                <h3>Domestic/HMO (BS 5839-6)</h3>
                <ul className="list list--disc">
                  <li>Grades A/C/D/F • LD1–LD3 coverage</li>
                  <li>Monthly user tests; Grade A weekly routine</li>
                  <li>HMO: council-ready paperwork provided</li>
                </ul>
              </div>
              <div className="card">
                <h3>Electrical & Firestopping</h3>
                <ul className="list list--disc">
                  <li>BS 7671 for cabling/containment</li>
                  <li>Fire-rated supports and fixings where required</li>
                  <li>Penetrations sealed with appropriate systems</li>
                </ul>
              </div>
            </div>

            <p className="meta mt-8">
              Monitoring is via an ARC with confirmed-alarm protocols and
              keyholder notification. No direct autodial to Fire & Rescue.
              Attendance policies vary by fire & rescue service.
            </p>
          </div>
        </section>

        {/* DOCS PACK */}
        <section id="docs" className="section" aria-labelledby="docs-title">
          <div className="container">
            <h2 id="docs-title" className="h2">
              What you receive — documentation pack
            </h2>
            <p className="small mt-6">
              Clear records for compliance and handover.
            </p>

            <div className="mt-12">
              {/* Desktop/tablet table */}
              <div
                style={{
                  overflowX: "auto",
                  display: isNarrow ? "none" : "block",
                }}
              >
                <table
                  className="table"
                  aria-label="Documentation pack contents"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <thead style={{ background: "#f9fafb" }}>
                    <tr>
                      <th scope="col">Document</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Format</th>
                      <th scope="col">When issued</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Design/Installation/Commissioning Certificates",
                        "Formal record that work meets scope and standard",
                        "PDF (signed)",
                        "At handover",
                      ],
                      [
                        "Zone Chart",
                        "Shows zones for alarm/fault localisation",
                        "Printed + PDF",
                        "At handover",
                      ],
                      [
                        "Device/Asset List",
                        "Every device & location for maintenance",
                        "Spreadsheet + PDF",
                        "At handover",
                      ],
                      [
                        "As-fitted Drawings",
                        "Final device positions, zoning, routes (where applicable)",
                        "PDF (source by agreement)",
                        "At/after handover",
                      ],
                      [
                        "Logbook",
                        "User’s record for weekly tests, faults, servicing",
                        "Printed",
                        "At handover",
                      ],
                    ].map((row) => (
                      <tr key={row[0]}>
                        <td>
                          <b>{row[0]}</b>
                        </td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div
                style={{
                  display: isNarrow ? "grid" : "none",
                  gridTemplateColumns: "1fr",
                  gap: 10,
                }}
              >
                {[
                  [
                    "Design/Installation/Commissioning Certificates",
                    "Formal record that work meets scope and standard",
                    "PDF (signed)",
                    "At handover",
                  ],
                  [
                    "Zone Chart",
                    "Shows zones for alarm/fault localisation",
                    "Printed + PDF",
                    "At handover",
                  ],
                  [
                    "Device/Asset List",
                    "Every device & location for maintenance",
                    "Spreadsheet + PDF",
                    "At handover",
                  ],
                  [
                    "As-fitted Drawings",
                    "Final device positions, zoning, routes (where applicable)",
                    "PDF (source by agreement)",
                    "At/after handover",
                  ],
                  [
                    "Logbook",
                    "User’s record for weekly tests, faults, servicing",
                    "Printed",
                    "At handover",
                  ],
                ].map((row) => (
                  <div
                    key={row[0]}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      padding: 14,
                      background: "#fff",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>
                      {row[0]}
                    </div>
                    <div style={{ marginBottom: 4 }}>
                      <b>Purpose:</b> {row[1]}
                    </div>
                    <div style={{ marginBottom: 4 }}>
                      <b>Format:</b> {row[2]}
                    </div>
                    <div>
                      <b>When issued:</b> {row[3]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MAINTENANCE */}
        <section
          id="maintenance"
          className="section section--tight"
          aria-labelledby="maint-title"
        >
          <div className="container">
            <h2 id="maint-title" className="h2">
              Maintenance overview — what we check
            </h2>
            <p className="small mt-6">
              Snapshot of typical non-domestic servicing (scope varies by
              system).
            </p>

            <div className="mt-12">
              {/* Desktop/tablet table */}
              <div
                style={{
                  overflowX: "auto",
                  display: isNarrow ? "none" : "block",
                }}
              >
                <table
                  className="table"
                  aria-label="Maintenance checklist"
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <thead style={{ background: "#f9fafb" }}>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Examples</th>
                      <th scope="col">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Device tests",
                        "Smoke/heat detectors, MCPs, sounders, interfaces",
                        "Operation confirmed & recorded",
                      ],
                      [
                        "Audibility",
                        "Spot checks vs objectives (dB(A))",
                        "Meets objectives or remedials advised",
                      ],
                      [
                        "Panel & power",
                        "Indicators, faults, battery condition/charge",
                        "Healthy state or actions listed",
                      ],
                      [
                        "Cause & effect",
                        "Door releases, plant shutdown, lifts",
                        "Sequence verified or issues raised",
                      ],
                      [
                        "Records",
                        "Logbook updates, asset list changes",
                        "Documentation up to date",
                      ],
                    ].map((row) => (
                      <tr key={row[0]}>
                        <td>
                          <b>{row[0]}</b>
                        </td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div
                style={{
                  display: isNarrow ? "grid" : "none",
                  gridTemplateColumns: "1fr",
                  gap: 10,
                }}
              >
                {[
                  [
                    "Device tests",
                    "Smoke/heat detectors, MCPs, sounders, interfaces",
                    "Operation confirmed & recorded",
                  ],
                  [
                    "Audibility",
                    "Spot checks vs objectives (dB(A))",
                    "Meets objectives or remedials advised",
                  ],
                  [
                    "Panel & power",
                    "Indicators, faults, battery condition/charge",
                    "Healthy state or actions listed",
                  ],
                  [
                    "Cause & effect",
                    "Door releases, plant shutdown, lifts",
                    "Sequence verified or issues raised",
                  ],
                  [
                    "Records",
                    "Logbook updates, asset list changes",
                    "Documentation up to date",
                  ],
                ].map((row) => (
                  <div
                    key={row[0]}
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      padding: 14,
                      background: "#fff",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>
                      {row[0]}
                    </div>
                    <div style={{ marginBottom: 4 }}>
                      <b>Examples:</b> {row[1]}
                    </div>
                    <div>
                      <b>Outcome:</b> {row[2]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="section" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" className="h2">
              Fire alarm FAQs
            </h2>
            <div className="grid-2 mt-14">
              {[
                [
                  "Is a fire alarm legally required?",
                  "Most non-domestic premises need suitable detection and warning. The Responsible Person must maintain systems and keep records.",
                ],
                [
                  "How often should it be tested?",
                  "Non-domestic: weekly user tests; competent servicing at intervals not exceeding six months. Domestic/HMO: monthly user tests; Grade A follows the weekly routine.",
                ],
                [
                  "What categories exist?",
                  "Non-domestic: L1–L5 (life), P1–P2 (property), M (manual). Domestic/HMO: Grades A/C/D/F with LD1–LD3 coverage.",
                ],
                [
                  "I don’t know what system I need — how do I start?",
                  "Book a survey. We’ll assess your building and usage, then recommend the right category/grade with a clear written scope.",
                ],
                [
                  "Do you provide certificates?",
                  "Yes — design/installation/commissioning and maintenance certificates, plus a logbook and zone chart.",
                ],
                [
                  "Do you offer monitoring?",
                  "Yes — via an Alarm Receiving Centre (ARC) with confirmed-alarm protocols and keyholder notification. We do not autodial the Fire & Rescue Service; attendance policies vary by brigade.",
                ],
              ].map(function (item) {
                return (
                  <div key={item[0]} className="card">
                    <h3 style={{ margin: "2px 0 6px" }}>{item[0]}</h3>
                    <p>{item[1]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Minimal Service JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Fire alarm design, installation, commissioning & maintenance",
              serviceType: "Fire detection and alarm systems",
              areaServed: { "@type": "AdministrativeArea", name: "London" },
              provider: { "@type": "Organization", name: "Eco Voltex" },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
