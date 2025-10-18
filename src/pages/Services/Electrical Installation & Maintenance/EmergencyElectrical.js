import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../CCTV/CCTV.css";  // Reuse identical styling for a consistent look

export default function EmergencyElectrical () {
  const [audience, setAudience] = React.useState("home");
  const [postcode, setPostcode] = React.useState("");
  const [pcResult, setPcResult] = React.useState("");

  const inCoverage = (pc) => {
    if (!pc) return false;
    const s = pc.toUpperCase().replace(/\s+/g, "");
    const allowed = [
      "E","EC","N","NW","W","WC","SE","SW","BR","CR","DA","EN","HA","IG","KT","TW","UB","SM","RM","WD","SL","AL"
    ];
    return allowed.some((p) => s.startsWith(p));
  };

  const checkPostcode = (e) => {
    e.preventDefault();
    setPcResult(
      inCoverage(postcode)
        ? "You're in our regular coverage. Urgent attendance usually available."
        : "Likely covered — tell us your address and we’ll confirm availability."
    );
  };

  // Home (domestic) emergency packages
  const homePlans = [
    {
      name: "Emergency Call‑Out (1 hr)",
      tag: "Entry",
      price: "from £149",
      meta: "Attend, make safe & diagnose (first hour)",
      bullets: [
        "Isolate hazards & restore essential power",
        "RCD/RCBO tripping diagnostics",
        "Minor repairs where feasible",
        "MEIWC if minor works completed",
      ],
    },
    {
      name: "Same‑Day Restore",
      tag: "Popular",
      price: "from £229",
      meta: "Fault find + repair to reinstate supply",
      bullets: [
        "Insulation/continuity tests",
        "Accessory/cable/MCB swaps (like‑for‑like)",
        "Labelling & functional checks",
        "7‑day aftercare advice",
      ],
    },
    {
      name: "CU Fault Repair",
      tag: "Premium",
      price: "from £299",
      meta: "Board‑level diagnostics & device replacement",
      bullets: [
        "RCBO/RCD device testing & replacement",
        "Tightness & thermal checks (visual)",
        "Schedule updated & signed",
        "Certification included where applicable",
      ],
    },
  ];

  // Business (commercial) emergency packages
  const businessPlans = [
    {
      name: "Priority Call‑Out (1 hr)",
      tag: "Best Value",
      price: "from £169",
      meta: "Attend, make safe, diagnose — first hour",
      bullets: [
        "Critical circuits triaged (POS, lighting, servers)",
        "Temporary restoration where safe",
        "Isolation & lock‑off as needed",
        "MEIWC if minor works completed",
      ],
    },
    {
      name: "Out‑of‑Hours Repair",
      tag: "After Hours",
      price: "from £249",
      meta: "Evenings/night/weekend attendance",
      bullets: [
        "Minimal disruption to trading",
        "Spare parts carried (common items)",
        "Clear remedial quotations",
        "Handover notes for facilities",
      ],
    },
    {
      name: "Temporary Supply & Containment",
      tag: "Tailored",
      price: "POA",
      meta: "Safe temporary power via RCD‑protected units",
      bullets: [
        "Event/site/temp works distribution",
        "Cable management & signage",
        "Risk‑assessed, compliant setup",
        "O&M pack + de‑rig on completion",
      ],
    },
  ];

  const plans = audience === "home" ? homePlans : businessPlans;

  const featureItems = [
    { icon: "🚨", title: "Emergency Attendance", text: "Urgent call‑outs for loss of power, burning smells, tripping RCDs or water ingress risks." },
    { icon: "🧪", title: "Systematic Diagnostics", text: "Safe isolation, visual checks, IR & continuity tests, RCD ramp/time tests where appropriate." },
    { icon: "🛡️", title: "Make‑Safe First", text: "Hazard isolation, lock‑off and temporary protection before repairs commence." },
    { icon: "🔧", title: "On‑Van Spares", text: "Common accessories, RCBOs, RCDs, MCBs and terminals for rapid fixes." },
    { icon: "📋", title: "Documentation", text: "MEIWC/EIC for completed works, updated schedules, photos and labelling." },
    { icon: "📞", title: "Post‑Visit Support", text: "Remedial quotes, guidance on upgrades (SPD/AFDD), and prevention tips." },
    { icon: "⚡", title: "Compliant Temporary Power", text: "RCD‑protected temp units and tidy cable routes with signage where required." },
    { icon: "🏠", title: "Domestic & Business", text: "Homes, HMOs, retail, offices and light industrial covered." },
    { icon: "📘", title: "Standards‑Led", text: "BS 7671 and EAWR 1989 practices; Part P notification where applicable." },
  ];

  return (
    <>
      <Header />
      <main className="cctv cctv--page">{/* reuse classnames for identical styling */}
        {/* Sticky CTA */}
        <div className="ev-sticky-cta">
          <span className="ev-sticky-cta__label">Electrical emergency right now?</span>
          <a href="/contact" className="ev-btn ev-btn--primary">Call For Fast Help</a>
          <a href="#packages" className="ev-btn ev-btn--outline">See Call‑Out Options</a>
        </div>

        {/* HERO */}
        <section id="overview" className="cctv-section cctv-hero" aria-labelledby="hero-title">
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <h1 id="hero-title" className="cctv-h1">Emergency Electrical Work — Make‑Safe & Same‑Day Restore</h1>
              <p className="cctv-hero-sub">Rapid attendance for tripping power, overheating accessories or water‑damaged circuits. We make it safe first, then repair and certify to BS 7671.</p>
              <p className="cctv-hero-proof">“Power back on with clear explanations and tidy work — excellent response.” — Shop Owner, E7 ★★★★★</p>

              <div className="cctv-row" role="tablist" aria-label="Audience selector">
                <button
                  className={`cctv-chip ${audience === "home" ? "cctv-chip--active" : ""}`}
                  onClick={() => setAudience("home")}
                  role="tab"
                  aria-selected={audience === "home"}
                >
                  Home
                </button>
                <button
                  className={`cctv-chip ${audience === "business" ? "cctv-chip--active" : ""}`}
                  onClick={() => setAudience("business")}
                  role="tab"
                  aria-selected={audience === "business"}
                >
                  Business
                </button>
              </div>

              <ul className="cctv-hero-bullets">
                {(audience === "home"
                  ? [
                      "Tripping RCD/RCBO diagnostics",
                      "Burning smell/overheat — make‑safe",
                      "Water ingress checks & drying plans",
                    ]
                  : [
                      "Critical circuits prioritised (POS, servers, lighting)",
                      "Temporary power solutions (RCD‑protected)",
                      "Clear handover to facilities with next steps",
                    ]).map((x) => <li key={x}>{x}</li>)}
              </ul>

              <div className="cctv-row cctv-hero-ctas">
                <a href="#packages" className="cctv-btn cctv-btnPrimary">See Packages</a>
                <a href="/contact" className="cctv-btn cctv-btnOutline">Request Call‑Out</a>
              </div>
            </div>

            <div className="cctv-col-5">
              <div className="cctv-figure">
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1758041101/ev_emergency_hero_placeholder.png"
                  alt="Emergency electrical response"
                  className="cctv-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="cctv-section">
          <h2 className="cctv-h2" style={{ textAlign: "center" }}>Typical Emergency Scenarios We Handle</h2>

          <div
            className="cctv-container"
            style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"24px", alignItems:"stretch" }}
          >
            {/* LEFT */}
            <div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"12px", marginTop:"2px" }}>
                <div className="cctv-card">
                  <p className="cctv-h3">Domestic (Homes & HMOs)</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>RCD/RCBO keeps tripping after appliance use</li>
                    <li>Burnt sockets/smell of burning plastic</li>
                    <li>Water ingress affecting lights or sockets</li>
                    <li>No power to key rooms or CU issues</li>
                  </ul>
                </div>

                <div className="cctv-card">
                  <p className="cctv-h3">Commercial & Facilities</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Loss of lighting/POS/server room circuits</li>
                    <li>Overheating in boards or distribution</li>
                    <li>Cable damage during works/fit‑out</li>
                    <li>Emergency lighting test failures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="cctv-figure" style={{ marginLeft:"auto" }}>
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1758041188/ev_emergency_solutions_placeholder.png"
                alt="Emergency electrical scenarios"
                className="cctv-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section id="features" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">What You Get With Eco Voltex Emergency</h2>

            <div className="features-grid cctv-mt-16" aria-label="Key features">
              {featureItems.map((f) => (
                <article key={f.title} className="feature" role="listitem">
                  <header className="feature-head">
                    <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                    <div className="feature-title">{f.title}</div>
                  </header>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="cctv-section">
          <div className="cctv-container" style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"24px", alignItems:"start" }}>
            {/* LEFT */}
            <div>
              <h2 className="cctv-h2">Our Emergency Process</h2>
              <ol
                style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"16px", marginTop:"16px", padding:0, listStyle:"none" }}
                aria-label="Emergency steps"
              >
                {[
                  ["Triage & Safety Advice","Phone triage to assess risk; immediate make‑safe guidance if required."],
                  ["Attend & Make Safe","Safe isolation, lock‑off and hazard removal before any repair."],
                  ["Diagnostics","Visual, testing (IR, continuity, RCD), and thermal checks where appropriate."],
                  ["Repair/Replace","On‑site fixes with on‑van spares or temporary power solutions."],
                  ["Test & Certify","Functional tests and MEIWC/EIC issued where applicable."],
                  ["Handover & Aftercare","Photos, labelling, prevention tips and remedial/upgrade quotes."],
                ].map(([k,v],i)=>(
                  <li
                    key={i}
                    style={{ background:"#F7FAF8", border:"1px solid #E6EDF3", borderRadius:"12px", padding:"16px", boxShadow:"0 4px 12px rgba(0,0,0,0.06)" }}
                  >
                    <div className="cctv-strong" style={{ color:"var(--ev-green)" }}>Step {i+1}</div>
                    <p style={{ fontWeight:700, marginBottom:4, color:"var(--ev-navy)" }}>{k}</p>
                    <p style={{ fontSize:14, color:"#374151" }}>{v}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* RIGHT */}
            <div className="cctv-figure">
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1758041255/ev_emergency_process_placeholder.png"
                alt="Eco Voltex emergency process"
                className="cctv-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">Emergency Call‑Out Options</h2>

            <div className="cctv-row cctv-mt-8" role="tablist" aria-label="Package audience selector">
              <button
                className={`cctv-btn ${audience === "home" ? "cctv-btnPrimary" : "cctv-btnOutline"}`}
                role="tab" aria-selected={audience === "home"}
                onClick={() => setAudience("home")}
              >
                Home
              </button>
              <button
                className={`cctv-btn ${audience === "business" ? "cctv-btnPrimary" : "cctv-btnOutline"}`}
                role="tab" aria-selected={audience === "business"}
                onClick={() => setAudience("business")}
              >
                Business
              </button>
            </div>

            <p className="cctv-meta cctv-mt-8">Guide pricing for Greater London. Final quotes depend on fault complexity, access, parts and timing. Out‑of‑hours uplift may apply.</p>

            <div className="cctv-grid cctv-grid-3 cctv-mt-16">
              {plans.map((pkg) => (
                <div key={pkg.name} className="cctv-card">
                  <div className="cctv-card-head">
                    <p className="cctv-h3">{pkg.name}</p>
                    <span className="cctv-badge">{pkg.tag}</span>
                  </div>
                  <p className="cctv-meta">{pkg.meta}</p>
                  <p className="cctv-price">{pkg.price}</p>
                  <ul className="cctv-list cctv-mt-8">
                    {pkg.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <a href="/contact" className="cctv-btn cctv-btnPrimary cctv-btn--block cctv-mt-12">
                    {pkg.name.includes("Temporary") ? "Speak To Us" : "Book Call‑Out"}
                  </a>
                  <p className="cctv-meta cctv-mt-8">Add‑ons: EICR after repair, board upgrades with SPD/RCBOs, AFDDs where applicable.</p>
                </div>
              ))}
            </div>

            <div className="cctv-card cctv-mt-16" id="quote">
              <p className="cctv-strong">Quick Coverage Check</p>
              <form className="cctv-row cctv-mt-8" onSubmit={checkPostcode} aria-label="Coverage checker">
                <input
                  className="cctv-input"
                  placeholder="Enter your postcode (e.g., E1 6AN)"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  aria-label="Postcode"
                />
                <button className="cctv-btn cctv-btnOutline" type="submit">Check</button>
              </form>
              {pcResult && (
                <div className="cctv-meta cctv-mt-8" aria-live="polite">
                  {pcResult} <a href="/contact"><b>Contact us</b></a> now to request an urgent call‑out.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section id="compliance" className="cctv-section">
          <div className="cctv-container">
            <h2 className="cctv-h2">Compliance & Good Practice (UK)</h2>
            <div className="cctv-grid cctv-grid-2 cctv-mt-16">
              <div className="cctv-card">
                <p className="cctv-strong">Legislation & Standards</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Electricity at Work Regulations 1989 (EAWR)</li>
                  <li>BS 7671: IET Wiring Regulations</li>
                  <li>Building Regulations Part P (domestic, where applicable)</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">Emergency measures prioritise safety. Permanent repairs follow the relevant standards. Not legal advice.</p>
              </div>
              <div className="cctv-card">
                <p className="cctv-strong">Documentation</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>MEIWC/EIC issued for completed works</li>
                  <li>Handover notes with photos & labelling</li>
                  <li>Remedial report & quotations if further work is needed</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">Insurance letters available on request (scope & findings summary).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
