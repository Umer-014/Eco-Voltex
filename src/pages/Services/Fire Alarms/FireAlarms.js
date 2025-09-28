import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function FireAlarms() {
  // ========= Company contacts (optional) =========
  const PHONE = ""; // "+44 20..." (leave empty to hide)
  const WHATSAPP = ""; // "4477..." digits only for wa.me

  // ========= State =========
  const [audience, setAudience] = React.useState("business"); // "home" | "business"
  const [countdown, setCountdown] = React.useState(""); // month-end ribbon
  const [consent, setConsent] = React.useState(null); // null | "accepted" | "rejected"
  const [utm, setUtm] = React.useState({});
  const [dealHint, setDealHint] = React.useState(null);

  // Forms
  const [errorSummary, setErrorSummary] = React.useState([]);
  const [postcode, setPostcode] = React.useState("");
  const [pcResult, setPcResult] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Month-end countdown (hourly)
    const endOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
      23,
      59,
      59
    );
    const tick = () => {
      const diff = endOfMonth.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown("Ends today");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      setCountdown(`${d}d ${h}h left`);
    };
    tick();
    const t = setInterval(tick, 60 * 60 * 1000);

    // Consent restore
    try {
      const c = localStorage.getItem("ev_consent");
      if (c === "accepted" || c === "rejected") setConsent(c);
    } catch {}

    // URL params: utm_* + deal
    const sp = new URLSearchParams(window.location.search);
    const u = {};
    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ].forEach((k) => {
      const v = sp.get(k);
      if (v) u[k] = v;
    });
    setUtm(u);

    let deal = sp.get("deal");
    const hash = window.location.hash || "";
    if (!deal && hash.includes("?")) {
      const hp = new URLSearchParams(hash.split("?")[1]);
      if (hp.get("deal")) deal = hp.get("deal");
    }
    if (deal) setDealHint(deal);

    return () => clearInterval(t);
  }, []);

  // ========= Helpers =========
  const validUKPostcode = (pc) => {
    if (!pc) return false;
    const s = pc.trim().toUpperCase();
    const re =
      /^(GIR ?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2}|[A-PR-UWYZ][A-HK-Y][0-9]{1,2}|[A-PR-UWYZ][0-9][A-HJKPS-UW]|[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRV-Y]) ?[0-9][ABD-HJLN-UW-Z]{2}))$/i;
    return re.test(s);
  };
  const inCoverage = (pc) => {
    const s = (pc || "").toUpperCase().replace(/\s+/g, "");
    const allowed = [
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
    return allowed.some((p) => s.startsWith(p));
  };
  const checkPostcode = (e) => {
    e.preventDefault();
    if (!validUKPostcode(postcode)) {
      setPcResult("❌ Please enter a valid UK postcode (e.g., E1 6AN).");
      return;
    }
    setPcResult(
      inCoverage(postcode)
        ? "✅ You’re in our service area. We can usually survey within a few days."
        : "ℹ️ Likely covered — share your address and we’ll confirm today."
    );
  };

  const validateForm = (data) => {
    const errs = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Please enter a valid email.";
    if (data.phone && !/^[0-9+()\-.\s]{7,}$/.test(data.phone))
      errs.phone = "Please enter a valid phone number.";
    if (!data.postcode?.trim() || !validUKPostcode(data.postcode))
      errs.postcode = "Please enter a valid UK postcode.";
    return errs;
  };
  const buildErrorSummary = (errs) => {
    const list = [];
    if (errs.name) list.push({ field: "name", text: errs.name });
    if (errs.email) list.push({ field: "email", text: errs.email });
    if (errs.phone) list.push({ field: "phone", text: errs.phone });
    if (errs.postcode) list.push({ field: "postcode", text: errs.postcode });
    setErrorSummary(list);
  };

  // ========= Content data =========
  const homeSpecs = [
    { k: "Standard", v: "BS 5839-6 (domestic/HMO)" },
    { k: "Typical grade", v: "A, C, D1/D2 or F1/F2" },
    { k: "Coverage", v: "LD2 or LD3 (risk-based)" },
    { k: "Use cases", v: "Houses, flats, HMOs" },
  ];
  const bizSpecs = [
    { k: "Standard", v: "BS 5839-1 (non-domestic)" },
    { k: "Category", v: "L1–L5 / P1–P2 / M" },
    { k: "Cause-and-effect", v: "Zoning, phased evacuation, interfaces" },
    { k: "Records", v: "Logbook, certificates, as-fitted" },
  ];

  const homeDeals = [
    {
      id: "ld2-starter",
      tag: "Popular",
      title: "LD2 Starter Pack",
      price: "from £249",
      was: null,
      bullets: [
        "Risk check & device plan",
        "Interlinked smoke + heat (typical 2–3 devices)*",
        "Supply, install & test",
        "Landlord docs included",
      ],
      note: "*Final device count set after survey; price adjusts to dwelling size.",
    },
    {
      id: "takeover-home",
      tag: "Switch & Save",
      title: "Existing System Takeover",
      price: "from £119",
      was: "£149",
      bullets: [
        "Compliance review & test",
        "Logbook issued/updated",
        "First service visit included",
      ],
      note: "For domestic Grade A/D systems in good condition.",
    },
    {
      id: "hmo-bundle",
      tag: "HMO Ready",
      title: "HMO Compliance Bundle",
      price: "Custom",
      was: null,
      bullets: [
        "LD2 design (rooms/routes) • Grade A where required",
        "Panel/alarms, labels, zone chart",
        "Council-ready paperwork",
      ],
      note: "Scope varies by layout and local authority requirements.",
    },
  ];
  const bizDeals = [
    {
      id: "office-l3",
      tag: "Best Value",
      title: "Small Office L3 Starter",
      price: "from £899",
      was: null,
      bullets: [
        "Category L3 design & drawings",
        "Conventional panel + devices*",
        "Commissioning & certificates",
      ],
      note: "*Exact device count by survey; addressable on request.",
    },
    {
      id: "takeover-pro",
      tag: "Switch & Save",
      title: "System Takeover + First Service",
      price: "£199 fixed",
      was: "£249",
      bullets: [
        "Asset list & condition report",
        "Zone chart tidy-up",
        "First six-monthly service included",
      ],
      note: "For compliant, serviceable systems within Greater London.",
    },
    {
      id: "p1-monitor",
      tag: "Risk Focus",
      title: "P1 + ARC Monitoring Bundle",
      price: "Custom",
      was: null,
      bullets: [
        "Property protection (P1) design",
        "ARC setup with confirmed-alarm protocol",
        "False-alarm reduction review",
      ],
      note: "Includes ARC paperwork and keyholder configuration.",
    },
  ];
  const deals = audience === "home" ? homeDeals : bizDeals;

  const fitGuides = [
    {
      title: "Offices & Shops",
      rec: "BS 5839-1 L2/L3",
      expl: "Life safety across escape routes and higher-risk rooms; add P2 if insurer requests.",
    },
    {
      title: "Schools & Care",
      rec: "BS 5839-1 L1/L2",
      expl: "Maximum coverage or near-maximum for vulnerable occupants and sleeping risk.",
    },
    {
      title: "Warehouses",
      rec: "BS 5839-1 P1/P2",
      expl: "Property protection throughout (P1) or defined areas (P2); life category added where occupied.",
    },
    {
      title: "HMOs & Shared Houses",
      rec: "BS 5839-6 Grade A, LD2",
      expl: "Panel-based with sounders on escape routes and detectors in risk rooms.",
    },
    {
      title: "Homes & Flats",
      rec: "BS 5839-6 LD2/LD3",
      expl: "Interlinked smoke/heat (and CO where needed).",
    },
    {
      title: "Mixed-Use Blocks",
      rec: "Common parts: BS 5839-1 • Flats: BS 5839-6",
      expl: "Correct split between non-domestic areas and dwellings.",
    },
  ];

  const deliverSteps = [
    {
      n: "1",
      title: "Survey & Plan",
      bullets: [
        "Risk-led objectives (L / P / M / LD)",
        "Detector types & spacing",
        "Zoning and cause-and-effect outline",
      ],
      outcome: "Clear proposal with drawings and programme",
    },
    {
      n: "2",
      title: "Neat Installation",
      bullets: [
        "BS 7671 cabling and containment",
        "Correct device siting and labels",
        "As-installed drawings kept updated",
      ],
      outcome: "Tidy finish ready for tests",
    },
    {
      n: "3",
      title: "Commissioning",
      bullets: [
        "Device tests & sound pressure checks",
        "Cause-and-effect verification",
        "All certificates and zone chart",
      ],
      outcome: "Signed-off, ready for use",
    },
    {
      n: "4",
      title: "Ongoing Care",
      bullets: [
        "Six-monthly service (non-domestic)",
        "Logbook updates & user guidance",
        "False-alarm reduction reviews",
      ],
      outcome: "Reliable operation and records",
    },
  ];

  // ========= Styles =========
  const styles = `
:root{
  --p900:#0A1B2B;--p800:#0F2C44;--p700:#154363;
  --acc:#16A34A;--accD:#128838;--neon:#22E57F;
  --soft:#F3F7FB;--border:#D6E8DD;--card:#FFFFFF;
  --text:#000;--muted:#444;
}
*{box-sizing:border-box}
[id]{scroll-margin-top:84px}
.ev{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:#fff}
.ev--page{min-height:100vh}
.ev a{text-decoration:none;color:inherit}
.ev :focus-visible{outline:3px solid var(--neon);outline-offset:2px;border-radius:6px}
.ev-center{text-align:center}
.ev-meta{font-size:12px;color:var(--muted)!important}
.ev-strong{font-weight:800}
.ev-container{max-width:1152px;margin:0 auto;padding:0 24px}
.ev-section{padding:56px 0;border-top:1px solid #eef2f7}
.ev-soft{background:var(--soft);border-top:1px solid var(--border)}
.ev-grid{display:grid}
.ev-grid-12{grid-template-columns:repeat(12,1fr)}
.ev-grid-4{grid-template-columns:repeat(4,1fr)}
.ev-grid-3{grid-template-columns:repeat(3,1fr)}
.ev-grid-2{grid-template-columns:repeat(2,1fr)}
.ev-col-7{grid-column:span 7}
.ev-col-5{grid-column:span 5}
.ev-gap-12{gap:12px}
.ev-gap-16{gap:16px}
.ev-row{display:flex;gap:10px;flex-wrap:wrap}
.ev-hero{position:relative;overflow:hidden;background:#fff;color:#000}
.ev-h1{font-size:40px;line-height:1.15;font-weight:900;color:#000}
.ev-h2{font-size:28px;font-weight:800;color:#000}
.ev-h3{font-size:18px;font-weight:800;color:#000}
.ev-pill{display:inline-flex;gap:8px;align-items:center;background:#dcfce7;color:#166534;padding:6px 10px;border-radius:999px;font-weight:800;font-size:13px}
.ev-ribbon{display:inline-flex;align-items:center;gap:10px;background:#072538;color:#d9ffe9;padding:8px 12px;border-bottom:1px solid #0b3a5a;border-radius:8px}
.ev-card{background:var(--card);border:1px solid var(--border);border-radius:16px;box-shadow:0 8px 24px rgba(10,65,106,.08);padding:16px}
.ev-badge{border:1px solid #dbe9ef;background:#f8fbff;border-radius:999px;padding:4px 8px;color:#36506b;font-weight:800;font-size:12px}
.ev-tag{display:inline-flex;align-items:center;gap:6px;background:#e7f8ef;border:1px solid #cdebd9;color:#0b5c2b;border-radius:999px;padding:4px 10px;font-weight:800;font-size:12px}
.ev-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:12px;font-weight:800;border:1px solid transparent;cursor:pointer;min-height:44px}
.ev-btnPrimary{background:var(--acc);color:#fff}
.ev-btnPrimary:hover{background:var(--accD)}
.ev-btnOutline{background:#fff;border-color:var(--border);color:#000}
.ev-btnGhost{background:transparent;border:1px solid #000;color:#000}
.ev-list{padding-left:18px}
.ev-list--disc{list-style:disc}
.ev-form{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.ev-form input,.ev-form textarea,.ev-input,select{border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:14px;width:100%}
.ev-form .ev-error{color:#b42318;font-size:12px;margin-top:6px}
.ev-form [aria-invalid="true"]{border-color:#b42318;box-shadow:0 0 0 3px rgba(180,35,24,0.08)}
.ev-form button[type="submit"]{grid-column:1/-1}
.ev-errorSummary{border:1px solid #f3b4b4;background:#fff5f5;padding:12px;border-radius:12px}
.ev-deals{background:linear-gradient(0deg,#f7fbff,#ffffff)}
.ev-dealPrice{font-size:24px;font-weight:900;margin:6px 0}
.ev-dealWas{font-size:12px;text-decoration:line-through;color:#6b788a}
.ev-cta{background:#f7f7f7;color:#000;padding:48px 0}
.ev-mobile-stick{position:fixed;left:0;right:0;bottom:0;z-index:50;display:none;gap:8px;background:#ffffffee;border-top:1px solid var(--border);padding:10px calc(10px + env(safe-area-inset-right)) calc(10px + env(safe-area-inset-bottom)) calc(10px + env(safe-area-inset-left))}
.ev-stick-btn{flex:1;display:flex;justify-content:center;align-items:center;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-weight:800;color:#000;text-decoration:none;min-height:44px}
.ev-stick-btn--prime{background:var(--acc);color:#fff;border-color:var(--acc)}
.ev-consent{position:fixed;left:12px;right:12px;bottom:12px;background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:0 10px 24px rgba(10,65,106,.12);padding:14px;display:flex;gap:10px;align-items:flex-start;z-index:60}
@media(max-width:1023px){
  .ev-grid-12{grid-template-columns:1fr}
  .ev-col-7,.ev-col-5{grid-column:1/-1}
  .ev-grid-4{grid-template-columns:1fr 1fr}
  .ev-grid-3{grid-template-columns:1fr 1fr}
  .ev-grid-2{grid-template-columns:1fr}
  .ev-h1{font-size:34px}
  .ev-h2{font-size:26px}
  .ev-form{grid-template-columns:1fr}
}
@media(max-width:768px){
  .ev-grid-4{grid-template-columns:1fr}
  .ev-grid-3{grid-template-columns:1fr}
  .ev-mobile-stick{display:flex}
}
`;

  // ========= Render =========
  return (
    <>
      <Header />
      <main className="ev ev--page" role="main">
        <style>{styles}</style>

        {/* ===== HERO ===== */}
        <section
          id="overview"
          className="ev-section ev-hero"
          aria-labelledby="hero-title"
        >
          <div
            className="ev-container ev-grid ev-grid-12"
            style={{ alignItems: "center" }}
          >
            <div className="ev-col-7">
              <h1 id="hero-title" className="ev-h1">
                Fire alarm design, installation, commissioning & maintenance —
                London
              </h1>
              <p
                style={{
                  color: "#000",
                  opacity: 0.9,
                  marginTop: 12,
                  maxWidth: "65ch",
                }}
              >
                We deliver neat installs, reliable commissioning, and clear
                maintenance to the current UK standards:
                <b> BS 5839-1</b> (non-domestic) and <b>BS 5839-6</b>{" "}
                (domestic/HMO).
              </p>

              {countdown && (
                <div
                  className="ev-ribbon"
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: 12 }}
                >
                  <span>Month-end booking window</span>
                  <strong>{countdown}</strong>
                </div>
              )}

              <div
                className="ev-row"
                style={{ marginTop: 14 }}
                aria-label="Choose audience"
              >
                <button
                  className={`ev-btn ${
                    audience === "home" ? "ev-btnPrimary" : "ev-btnOutline"
                  }`}
                  onClick={() => setAudience("home")}
                  aria-pressed={audience === "home"}
                >
                  Home
                </button>
                <button
                  className={`ev-btn ${
                    audience === "business" ? "ev-btnPrimary" : "ev-btnOutline"
                  }`}
                  onClick={() => setAudience("business")}
                  aria-pressed={audience === "business"}
                >
                  Business
                </button>
                {PHONE && (
                  <a className="ev-btn ev-btnGhost" href={`tel:${PHONE}`}>
                    Call us
                  </a>
                )}
                {WHATSAPP && (
                  <a
                    className="ev-btn ev-btnGhost"
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
              </div>

              <ul className="ev-list ev-list--disc" style={{ marginTop: 10 }}>
                {(audience === "home"
                  ? [
                      "Interlinked smoke/heat/CO; LD2/LD3 coverage by risk",
                      "Tidy work, minimal disruption, landlord/HMO paperwork",
                      "Friendly guidance on monthly tests",
                    ]
                  : [
                      "Categories L1–L5 / P1–P2 / M as required",
                      "Cause-and-effect planning & zone charts",
                      "Servicing at intervals not exceeding six months",
                    ]
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="ev-row" style={{ marginTop: 16 }}>
                <a href="#basics" className="ev-btn ev-btnOutline">
                  1-min explainer
                </a>
                <a href="#quote" className="ev-btn ev-btnPrimary">
                  Get a quote
                </a>
              </div>
              <p className="ev-meta" style={{ marginTop: 12 }}>
                Neat workmanship • Clear documentation • Friendly, competent
                engineers
              </p>
            </div>

            <div className="ev-col-5">
              <div
                className="ev-card"
                aria-label={
                  audience === "business" ? "Business specs" : "Home specs"
                }
              >
                <div className="ev-grid ev-grid-2 ev-gap-12">
                  {(audience === "business" ? bizSpecs : homeSpecs).map(
                    ({ k, v }) => (
                      <div
                        key={k}
                        style={{
                          border: "1px solid #eee",
                          borderRadius: 12,
                          padding: 12,
                        }}
                      >
                        <p style={{ fontWeight: 800 }}>{k}</p>
                        <p>{v}</p>
                      </div>
                    )
                  )}
                </div>
                <p className="ev-meta" style={{ marginTop: 12 }}>
                  Clear drawings • Zone plans • User training
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== QUICK EXPLAINER: FIRE ALARM BASICS ===== */}
        <section
          id="basics"
          className="ev-section ev-soft"
          aria-labelledby="basics-title"
        >
          <div className="ev-container">
            <h2 id="basics-title" className="ev-h2">
              Fire alarm basics — in plain English
            </h2>
            <div
              className="ev-grid ev-grid-3 ev-gap-16"
              style={{ marginTop: 16 }}
            >
              <div className="ev-card">
                <p className="ev-h3">What it is</p>
                <ul className="ev-list ev-list--disc" style={{ marginTop: 6 }}>
                  <li>
                    Detectors + manual call points + sounders, managed by a
                    control panel
                  </li>
                  <li>
                    Alerts people to evacuate and can trigger building systems
                    (doors, lifts, AHU)
                  </li>
                  <li>Records events and faults in a logbook</li>
                </ul>
              </div>
              <div className="ev-card">
                <p className="ev-h3">System types</p>
                <ul className="ev-list ev-list--disc" style={{ marginTop: 6 }}>
                  <li>
                    <b>Conventional:</b> zones of devices; faults/alarms shown
                    by zone
                  </li>
                  <li>
                    <b>Addressable:</b> each device has an address; pinpoint
                    information
                  </li>
                  <li>
                    <b>Domestic interlinked:</b> mains or battery with
                    wireless/wired interlink
                  </li>
                </ul>
              </div>
              <div className="ev-card">
                <p className="ev-h3">Standards & categories</p>
                <ul className="ev-list ev-list--disc" style={{ marginTop: 6 }}>
                  <li>
                    <b>BS 5839-1 (non-domestic):</b> Life (L1–L5), Property
                    (P1–P2), Manual (M)
                  </li>
                  <li>
                    <b>BS 5839-6 (domestic/HMO):</b> Grades A/C/D/F with
                    LD1/LD2/LD3 coverage
                  </li>
                  <li>We confirm the right category/grade after survey</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHO WE HELP ===== */}
        <section
          id="sectors"
          className="ev-section"
          aria-labelledby="sector-title"
        >
          <div className="ev-container">
            <h2 id="sector-title" className="ev-h2">
              Who we help
            </h2>
            <div
              className="ev-grid ev-grid-4 ev-gap-16"
              style={{ marginTop: 16 }}
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
              ].map(([t, d]) => (
                <div key={t} className="ev-card">
                  <p className="ev-h3">{t}</p>
                  <p style={{ marginTop: 6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHICH OPTION FITS MY BUILDING (NO FORMS, NO WIZARD) ===== */}
        <section id="fit" className="ev-section" aria-labelledby="fit-title">
          <div className="ev-container">
            <h2 id="fit-title" className="ev-h2">
              Which option fits my building?
            </h2>
            <div
              className="ev-grid ev-grid-3 ev-gap-16"
              style={{ marginTop: 16 }}
            >
              {fitGuides.map((g) => (
                <div key={g.title} className="ev-card">
                  <div
                    className="ev-row"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <p className="ev-h3">{g.title}</p>
                    <span className="ev-badge">{g.rec}</span>
                  </div>
                  <p style={{ marginTop: 6 }}>{g.expl}</p>
                </div>
              ))}
            </div>
            <p className="ev-meta" style={{ marginTop: 8 }}>
              These are common starting points — we confirm the exact category
              and grade after survey.
            </p>
          </div>
        </section>

        {/* ===== HOW WE DELIVER (ALWAYS VISIBLE, NO TABS) ===== */}
        <section
          id="deliver"
          className="ev-section ev-soft"
          aria-labelledby="deliver-title"
        >
          <div className="ev-container">
            <h2 id="deliver-title" className="ev-h2">
              How we deliver — step by step
            </h2>
            <div
              className="ev-grid ev-grid-4 ev-gap-16"
              style={{ marginTop: 16 }}
            >
              {deliverSteps.map((step) => (
                <div key={step.n} className="ev-card">
                  <div
                    className="ev-row"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <span className="ev-badge">Step {step.n}</span>
                    <p className="ev-h3" style={{ margin: 0 }}>
                      {step.title}
                    </p>
                  </div>
                  <ul
                    className="ev-list ev-list--disc"
                    style={{ marginTop: 6 }}
                  >
                    {step.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="ev-meta" style={{ marginTop: 8 }}>
                    <b>What you get:</b> {step.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DEALS ===== */}
        <section
          id="deals"
          className="ev-section ev-deals"
          aria-labelledby="deals-title"
        >
          <div className="ev-container">
            <h2 id="deals-title" className="ev-h2">
              Limited-time deals
            </h2>
            <p className="ev-meta">
              Transparent “from” pricing. Final spec and price confirmed after
              survey. London & nearby counties.
            </p>
            <div
              className="ev-grid ev-grid-3 ev-gap-16"
              style={{ marginTop: 16 }}
            >
              {deals.map((d) => (
                <div key={d.id} className="ev-card">
                  {d.tag && (
                    <span className="ev-tag" aria-label="deal tag">
                      {d.tag}
                    </span>
                  )}
                  <p className="ev-h3" style={{ marginTop: 8 }}>
                    {d.title}
                  </p>
                  <p className="ev-dealPrice">
                    {d.price}{" "}
                    {d.was && <span className="ev-dealWas">{d.was}</span>}
                  </p>
                  <ul
                    className="ev-list ev-list--disc"
                    style={{ marginTop: 6 }}
                  >
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="ev-meta" style={{ marginTop: 8 }}>
                    {d.note}
                  </p>
                  <div className="ev-row" style={{ marginTop: 10 }}>
                    <a
                      className="ev-btn ev-btnPrimary"
                      href={`#quote?deal=${encodeURIComponent(d.id)}`}
                    >
                      Claim this deal
                    </a>
                    <a className="ev-btn ev-btnOutline" href="#quote">
                      Ask a question
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="ev-meta" style={{ marginTop: 8 }}>
              No direct autodial to the Fire & Rescue Service. ARC attendance is
              subject to local FRS policy and confirmed-alarm protocols.
            </p>
          </div>
        </section>

        {/* ===== COVERAGE CHECK (KEPT — QUICK TRUST SIGNAL) ===== */}
        <section
          id="postcode"
          className="ev-section"
          aria-labelledby="pc-title"
        >
          <div className="ev-container">
            <h2 id="pc-title" className="ev-h2">
              Check coverage & survey availability
            </h2>
            <form onSubmit={checkPostcode} className="ev-form" noValidate>
              <div>
                <label className="ev-meta" htmlFor="pc">
                  Your postcode
                </label>
                <input
                  id="pc"
                  name="pc"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="E1 6AN"
                  autoComplete="postal-code"
                />
              </div>
              <button type="submit" className="ev-btn ev-btnPrimary">
                Check
              </button>
            </form>
            <div
              className="ev-meta"
              style={{ marginTop: 8 }}
              aria-live="polite"
            >
              {pcResult}
            </div>
          </div>
        </section>

        {/* ===== QUOTE FORM ===== */}
        <section
          id="quote"
          className="ev-section ev-cta"
          aria-labelledby="quote-title"
        >
          <div className="ev-container">
            <h2 id="quote-title" className="ev-h2">
              Get a quick quote
            </h2>

            {errorSummary.length > 0 && (
              <div
                className="ev-errorSummary"
                role="alert"
                aria-live="assertive"
              >
                <p className="ev-strong">Please fix the following:</p>
                <ul className="ev-list">
                  {errorSummary.map((e) => (
                    <li key={e.field}>{e.text}</li>
                  ))}
                </ul>
              </div>
            )}

            <form
              className="ev-form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const data = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  phone: e.target.phone.value,
                  property: e.target.property.value,
                  sleeping: e.target.sleeping.value,
                  system: e.target.system.value,
                  floors: e.target.floors.value,
                  size: e.target.size.value,
                  postcode: e.target.postcode.value,
                  message: e.target.message.value,
                  deal: dealHint || null,
                  utm,
                };
                const errs = validateForm(data);
                buildErrorSummary(errs);
                if (Object.keys(errs).length === 0) {
                  // TODO: submit via your API/EmailJS
                  alert("Thanks! We’ll get back to you within 1 business day.");
                  e.target.reset();
                }
              }}
            >
              <div>
                <label className="ev-meta" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  aria-invalid={!!errorSummary.find((x) => x.field === "name")}
                />
              </div>
              <div>
                <label className="ev-meta" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-invalid={!!errorSummary.find((x) => x.field === "email")}
                />
              </div>
              <div>
                <label className="ev-meta" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  aria-invalid={!!errorSummary.find((x) => x.field === "phone")}
                />
              </div>
              <div>
                <label className="ev-meta" htmlFor="property">
                  Property type
                </label>
                <select id="property" name="property" defaultValue="office">
                  <option value="office">Office</option>
                  <option value="shop">Shop/Restaurant</option>
                  <option value="school">School</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="hmo">HMO / Hostel</option>
                  <option value="care">Care / Healthcare</option>
                  <option value="home">House / Flat</option>
                </select>
              </div>
              <div>
                <label className="ev-meta" htmlFor="sleeping">
                  Sleeping risk?
                </label>
                <select id="sleeping" name="sleeping" defaultValue="no">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="ev-meta" htmlFor="system">
                  Existing system
                </label>
                <select id="system" name="system" defaultValue="unknown">
                  <option value="unknown">Not sure</option>
                  <option value="conventional">Conventional</option>
                  <option value="addressable">Addressable</option>
                  <option value="domestic">Domestic (A/C/D/F)</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div>
                <label className="ev-meta" htmlFor="floors">
                  Floors
                </label>
                <input id="floors" name="floors" placeholder="e.g., 3" />
              </div>
              <div>
                <label className="ev-meta" htmlFor="size">
                  Approx. size
                </label>
                <input id="size" name="size" placeholder="e.g., 450 m²" />
              </div>
              <div>
                <label className="ev-meta" htmlFor="postcode2">
                  Postcode
                </label>
                <input
                  id="postcode2"
                  name="postcode"
                  placeholder="E1 6AN"
                  autoComplete="postal-code"
                  aria-invalid={
                    !!errorSummary.find((x) => x.field === "postcode")
                  }
                />
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label className="ev-meta" htmlFor="message">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Attach any notes or questions"
                />
              </div>
              <button type="submit" className="ev-btn ev-btnPrimary">
                Request quote
              </button>
            </form>

            <p className="ev-meta" style={{ marginTop: 8 }}>
              We reply within <b>1 business day</b>. London & surrounding. No
              pushy sales.
            </p>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section id="faqs" className="ev-section" aria-labelledby="faq-title">
          <div className="ev-container">
            <h2 id="faq-title" className="ev-h2">
              Fire alarm FAQs
            </h2>
            <div
              className="ev-grid ev-grid-2 ev-gap-16"
              style={{ marginTop: 16 }}
            >
              {[
                [
                  "Is a fire alarm legally required?",
                  "Most non-domestic premises need suitable detection/warning. The Responsible Person must maintain systems and keep records.",
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
                  "Can you work on my existing system?",
                  "Yes — we can take over, survey, carry out remedials, update drawings and certify on completion.",
                ],
                [
                  "Do you provide certificates?",
                  "Yes — design/installation/commissioning and maintenance certificates, plus a logbook.",
                ],
                [
                  "Do you offer monitoring?",
                  "Yes — ARC monitoring with confirmed-alarm protocols and keyholder notification. No direct autodial; FRS attendance varies.",
                ],
              ].map(([q, a]) => (
                <div key={q} className="ev-card">
                  <p className="ev-strong">{q}</p>
                  <p style={{ marginTop: 8 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Sticky mobile actions ===== */}
        <div className="ev-mobile-stick" aria-label="Quick actions">
          <a className="ev-stick-btn" href="#basics">
            1-min explainer
          </a>
          <a className="ev-stick-btn ev-stick-btn--prime" href="#quote">
            Get a quote
          </a>
        </div>

        {/* ===== Consent banner ===== */}
        {consent === null && (
          <div
            className="ev-consent"
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
          >
            <div style={{ flex: 1 }}>
              <p className="ev-strong" style={{ margin: 0 }}>
                Your privacy
              </p>
              <p className="ev-meta" style={{ margin: "6px 0 0 0" }}>
                We use only necessary cookies for basic site features. No
                trackers by default.
              </p>
            </div>
            <button
              className="ev-btn ev-btnOutline"
              onClick={() => {
                setConsent("rejected");
                try {
                  localStorage.setItem("ev_consent", "rejected");
                } catch {}
              }}
            >
              Reject
            </button>
            <button
              className="ev-btn ev-btnPrimary"
              onClick={() => {
                setConsent("accepted");
                try {
                  localStorage.setItem("ev_consent", "accepted");
                } catch {}
              }}
            >
              Accept
            </button>
          </div>
        )}

        {/* ===== Minimal schema (OfferCatalog) for SEO ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OfferCatalog",
              name: "Eco Voltex Fire Alarm Deals",
              itemListElement: (audience === "home" ? homeDeals : bizDeals).map(
                (d) => ({
                  "@type": "Offer",
                  name: d.title,
                  priceCurrency: "GBP",
                  price: d.price.toLowerCase().includes("custom")
                    ? undefined
                    : d.price.replace(/[^\d.]/g, "") || undefined,
                  url: "https://www.ecovoltex.co.uk/#deals",
                  availability: "https://schema.org/InStock",
                })
              ),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
