// /mnt/data/CCTV.js
import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./CCTV.css";

export default function EcoVoltexCctvPagePreview() {
  const [audience, setAudience] = React.useState("home");
  const [postcode, setPostcode] = React.useState("");
  const [pcResult, setPcResult] = React.useState("");

  const inCoverage = (pc) => {
    if (!pc) return false;
    const s = pc.toUpperCase().replace(/\s+/g, "");
    const allowed = ["E","EC","N","NW","W","WC","SE","SW","BR","CR","DA","EN","HA","IG","KT","TW","UB","SM","RM","WD","SL","AL"];
    return allowed.some((p) => s.startsWith(p));
  };

  const checkPostcode = (e) => {
    e.preventDefault();
    setPcResult(
      inCoverage(postcode)
        ? "You're in our regular coverage. We can usually survey within a few days."
        : "Likely covered — tell us your address and we’ll confirm availability."
    );
  };

  const homePlans = [
    {
      name: "Starter 2-Cam",
      tag: "Entry",
      price: "from £549",
      meta: "2× 4MP/8MP PoE + NVR (1TB)",
      bullets: [
        "Neat cabling & containment",
        "Colour night vision",
        "App set-up & training",
        "12-month workmanship warranty",
      ],
    },
    {
      name: "Family 4-Cam",
      tag: "Popular",
      price: "from £899",
      meta: "4× 4MP/8MP PoE + NVR (2TB)",
      bullets: [
        "Front & rear coverage",
        "Smart motion alerts",
        "Quick ‘find footage’ tutorial",
        "Secure remote viewing",
      ],
    },
    {
      name: "Home Pro 6-Cam",
      tag: "Premium",
      price: "from £1,249",
      meta: "6× 4MP/8MP PoE + NVR (4TB)",
      bullets: [
        "Driveway + garden + side return",
        "AI filters (human/vehicle)",
        "Labelled ports & admin pack",
        "30-day health check",
      ],
    },
  ];

  const businessPlans = [
    {
      name: "Small Business 4–6",
      tag: "Best Value",
      price: "from £1,099",
      meta: "4–6× 4MP/8MP PoE + NVR (2–4TB)",
      bullets: [
        "Entrances, POS & stock areas",
        "AI analytics (line/vehicle)",
        "Staff access + audit",
        "Retention policy guidance",
      ],
    },
    {
      name: "Retail Focus 6–8",
      tag: "Retail",
      price: "from £1,399",
      meta: "6–8× 4MP/8MP PoE + NVR (4TB)",
      bullets: [
        "Till & aisle coverage",
        "Incident tagging",
        "Signage included",
        "Dashboard snapshots",
      ],
    },
    {
      name: "Professional 8–16+",
      tag: "Tailored",
      price: "from £1,799",
      meta: "Mixed optics, multi-site ready",
      bullets: [
        "Cross-site roles",
        "Central monitoring",
        "Reports & alerts",
        "Maintenance SLA available",
      ],
    },
  ];

  const plans = audience === "home" ? homePlans : businessPlans;

  /* Feature list for "What You Get" (same content, nicer UI) */
  const featureItems = [
    { icon:"🔭", title:"4MP–8MP (2K–4K)", text:"True WDR and low-light colour for clarity day and night." },
    { icon:"🧠", title:"Smart Detection", text:"Human/vehicle, line-crossing and intrusion analytics." },
    { icon:"🔐", title:"Secure Access", text:"Mobile & web viewing with roles and two-factor options." },
    { icon:"🗄️", title:"Hardened NVR", text:"Locked admin, strong passwords, network segmentation." },
    { icon:"🛡️", title:"Privacy & Retention", text:"Privacy masking and retention controls to match policy." },
    { icon:"📜", title:"Signage & GDPR", text:"Professional signage and guidance for lawful operation." },
    { icon:"💾", title:"Flexible Storage", text:"On-prem NVR, NAS or encrypted cloud options." },
    { icon:"⚡", title:"Power Options", text:"PoE / PoE+ preferred; Wi-Fi where cabling isn’t feasible." },
    { icon:"🚨", title:"Active Deterrence", text:"Optional audio challenge, siren and strobe models." },
  ];

  return (
    <>
      <Header />
      <main className="cctv cctv--page">
        {/* Sticky CTA (desktop; uses global ev styles) */}
        <div className="ev-sticky-cta">
          <span className="ev-sticky-cta__label">Need CCTV this week?</span>
          <a href="/contact" className="ev-btn ev-btn--primary">Get A Fast Quote</a>
          <a href="#packages" className="ev-btn ev-btn--outline">See Pricing</a>
        </div>

        {/* HERO */}
        <section id="overview" className="cctv-section cctv-hero" aria-labelledby="hero-title">
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <h1 id="hero-title" className="cctv-h1">CCTV Security Solutions For London Homes &amp; Businesses</h1>
              <p className="cctv-hero-sub">Design-led CCTV with 4K clarity, smart analytics and secure remote viewing — installed neatly and tuned to your risks.</p>
              <p className="cctv-hero-proof">“Neatest cabling I’ve seen. Clear 4K coverage of tills &amp; doors.” — Store Manager, E2 ★★★★★</p>

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
                      "Discreet turrets/domes with colour night vision",
                      "Smart alerts tuned for people/visitors, not pets",
                      "Secure remote viewing for the household",
                    ]
                  : [
                      "Coverage for entrances, POS, staff & stock areas",
                      "AI analytics (line crossing, vehicle filters)",
                      "Role-based access, audit logs & retention policy",
                    ]).map((x) => <li key={x}>{x}</li>)}
              </ul>

              <div className="cctv-row cctv-hero-ctas">
                <a href="#packages" className="cctv-btn cctv-btnPrimary">See Packages</a>
                <a href="/contact" className="cctv-btn cctv-btnOutline">Book A Survey</a>
              </div>
            </div>

            <div className="cctv-col-5">
              <div className="cctv-figure">
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757790538/ChatGPT_Image_Sep_14_2025_12_08_45_AM_lmyc78.png"
                  alt="CCTV installation and monitoring preview"
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
          <h2 className="cctv-h2" style={{ textAlign: "center" }}>Tailored Solutions For Homes And Businesses</h2>

          <div
            className="cctv-container"
            style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"24px", alignItems:"stretch" }}
          >
            {/* LEFT */}
            <div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"12px", marginTop:"2px" }}>
                <div className="cctv-card">
                  <p className="cctv-h3">Residential</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Deterrent coverage for driveways, doors, gardens</li>
                    <li>Discreet turrets/domes; colour night vision where suitable</li>
                    <li>Privacy masks for neighbours/public footways</li>
                    <li>Secure remote viewing for household members</li>
                  </ul>
                </div>

                <div className="cctv-card">
                  <p className="cctv-h3">Commercial &amp; FM</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Entrances, POS, car parks, stock &amp; loading bays</li>
                    <li>AI analytics (human/vehicle, line crossing, intrusion)</li>
                    <li>24/7 recording, health checks &amp; cyber hardening</li>
                    <li>Multi-site dashboards, roles &amp; audit logs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="cctv-figure" style={{ marginLeft:"auto" }}>
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1757775249/ChatGPT_Image_Sep_13_2025_07_52_01_PM_n8opip.png"
                alt="CCTV solutions"
                className="cctv-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* WHAT YOU GET (improved look) */}
        <section id="features" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">What You Get With Eco Voltex CCTV</h2>

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
              <h2 className="cctv-h2">Our Installation Process</h2>
              <ol
                style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"16px", marginTop:"16px", padding:0, listStyle:"none" }}
                aria-label="Installation steps"
              >
                {[
                  ["Survey & Design","We map risk areas, coverage, cable paths and retention needs."],
                  ["Quote & Plan","Transparent proposal with kit list, positioning plan and timeframes."],
                  ["First Fix","Prepare routes; containment fitted neatly where needed."],
                  ["Install & Commission","Cameras mounted, PoE/NVR configured, analytics tuned & tested."],
                  ["Handover","App set-up, user training, admin docs, passwords sealed and labelled."],
                  ["Aftercare","Proactive maintenance, firmware updates and remote support."],
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
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1757778102/20250913_2018_CCTV_Installation_Process_simple_compose_01k51tdb4kfctaywayb6nk255s_lbvgkf.png"
                alt="Eco Voltex CCTV process"
                className="cctv-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* STORAGE + SECURITY */}
        <section id="storage" className="cctv-section cctv-soft">
          <div className="cctv-container cctv-grid cctv-grid-2">
            <div className="cctv-card">
              <p className="cctv-h3">Storage &amp; Retention</p>
              <p className="cctv-mt-8">Typical retention: <b>14–30 days</b> (homes/SMEs) or <b>30–60+ days</b> (higher risk). We balance resolution, frame rate, motion activity and budget.</p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>Event-based recording to extend retention</li>
                <li>Health alerts for camera/disk issues (where supported)</li>
                <li>Cloud backup for critical entrances/gates</li>
              </ul>
            </div>
            <div className="cctv-card">
              <p className="cctv-h3">Cyber-Secure By Default</p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>Unique strong credentials; remove defaults; admin separation</li>
                <li>Firmware updates; disable unused services; HTTPS where supported</li>
                <li>Local network isolation/VLAN &amp; outbound-only remote access where feasible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">Packages (No VAT) — Clear &amp; Great Value</h2>

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

            <p className="cctv-meta cctv-mt-8">Guide pricing for Greater London. Final quotes depend on cable routes, heights, fabric, access and analytics. Out-of-hours: +20%.</p>

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
                    {pkg.name.includes("Professional") ? "Speak To Us" : "Book Survey"}
                  </a>
                  <p className="cctv-meta cctv-mt-8">Add-ons: cloud clip backup, proactive maintenance, intercom/intruder links.</p>
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
                  {pcResult} <a href="/contact"><b>Contact us</b></a> today to book your survey.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section id="compliance" className="cctv-section">
          <div className="cctv-container">
            <h2 className="cctv-h2">Compliance &amp; Good Practice (UK)</h2>
            <div className="cctv-grid cctv-grid-2 cctv-mt-16">
              <div className="cctv-card">
                <p className="cctv-strong">Signage &amp; Privacy</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Clear CCTV signage where recording occurs</li>
                  <li>Privacy masks for neighbours/public areas where appropriate</li>
                  <li>Limit access to authorised users; keep access logs where needed</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">General information only — specifics confirmed on survey. Not legal advice.</p>
              </div>
              <div className="cctv-card">
                <p className="cctv-strong">Data Protection (Business)</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Define purpose, retention period &amp; lawful basis</li>
                  <li>Consider ICO registration if required (business use)</li>
                  <li>Provide subject access procedures and secure storage controls</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">Domestic users often fall under the “household exemption”; we still set privacy masks and good practices.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
