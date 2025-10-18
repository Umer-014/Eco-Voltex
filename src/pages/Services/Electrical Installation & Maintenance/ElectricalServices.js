import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../CCTV/CCTV.css"; // Reuse the same stylesheet to mirror the CCTV page design

export default function ElectricalServices() {
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
        ? "You're in our regular coverage. We can usually survey within a few days."
        : "Likely covered — tell us your address and we’ll confirm availability."
    );
  };

  // Home (domestic) service packages
  const homePlans = [
    {
      name: "Safety Check & Minor Works",
      tag: "Entry",
      price: "from £149",
      meta: "Fault find (1 hr) + MEIWC where applicable",
      bullets: [
        "Identify tripping RCD/RCBO faults",
        "Replace accessories (like-for-like)",
        "Test results recorded",
        "12‑month workmanship warranty",
      ],
    },
    {
      name: "CU Upgrade (Dual RCD/RCBO)",
      tag: "Popular",
      price: "from £549",
      meta: "Dual‑RCD or all‑RCBO board + SPD & labelling",
      bullets: [
        "BS 7671 compliant labelling",
        "RCD/RCBO protection to circuits",
        "Initial verification + EIC issued",
        "Building Regs notification (Part P)",
      ],
    },
    {
      name: "Partial/Full Rewire",
      tag: "Premium",
      price: "from £2,499",
      meta: "Kitchen/extension or whole‑home rewire",
      bullets: [
        "Neat containment & chasing",
        "Low‑energy LED & A‑rated accessories",
        "Full test schedule & certification",
        "2‑visit snag & handover",
      ],
    },
  ];

  // Business (commercial) service packages
  const businessPlans = [
    {
      name: "Planned Maintenance (PPM)",
      tag: "Best Value",
      price: "from £39/mo",
      meta: "Quarterly checks + emergency response add‑on",
      bullets: [
        "Thermal & visual checks (sampled)",
        "Logbook updates & remedial quotes",
        "Lamp/gear replacements",
        "Priority fault attendance",
      ],
    },
    {
      name: "Distribution Upgrade",
      tag: "Popular",
      price: "from £1,199",
      meta: "New boards with SPD, RCBOs & labelling",
      bullets: [
        "Load balancing & schedules",
        "Lock‑off & isolation procedure",
        "Full test results (BS 7671)",
        "O&M pack + single‑line diagram",
      ],
    },
    {
      name: "Fit‑Out & Small Works",
      tag: "Tailored",
      price: "POA",
      meta: "Circuits, containment, lighting, power",
      bullets: [
        "CAT A/B office, retail, light industrial",
        "Emergency lighting to BS 5266",
        "Energy‑efficient LED design",
        "Out‑of‑hours working available",
      ],
    },
  ];

  const plans = audience === "home" ? homePlans : businessPlans;

  const featureItems = [
    { icon: "📘", title: "BS 7671 Compliance", text: "All works designed, installed and tested to the IET Wiring Regulations." },
    { icon: "🛡️", title: "RCD/RCBO & SPD", text: "Modern protection devices for shock, fault and surge resilience." },
    { icon: "🌍", title: "Earthing & Bonding", text: "Main & supplementary bonding verified; TT/TN systems correctly treated." },
    { icon: "🧪", title: "Testing & Certification", text: "EIC or MEIWC issued; results recorded with circuit schedules & labelling." },
    { icon: "🔧", title: "Fault Finding", text: "Systematic diagnostics for tripping, overheats, damaged cables and accessories." },
    { icon: "💡", title: "Efficient Lighting", text: "Design & install of low‑energy LED with controls where suitable." },
    { icon: "🏠", title: "Part P (Domestic)", text: "Notifiable works registered and Building Regulations compliance confirmed." },
    { icon: "📦", title: "Neat Containment", text: "Surface/flush routes with tidy finish, fire‑stopping where required." },
    { icon: "📄", title: "O&M Documentation", text: "Handover pack: certs, user guidance, photos and product warranties." },
  ];

  return (
    <>
      <Header />
      <main className="cctv cctv--page">{/* reuse classnames for identical styling */}
        {/* Sticky CTA */}
        <div className="ev-sticky-cta">
          <span className="ev-sticky-cta__label">Need an electrician this week?</span>
          <a href="/contact" className="ev-btn ev-btn--primary">Get A Fast Quote</a>
          <a href="#packages" className="ev-btn ev-btn--outline">See Pricing</a>
        </div>

        {/* HERO */}
        <section id="overview" className="cctv-section cctv-hero" aria-labelledby="hero-title">
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <h1 id="hero-title" className="cctv-h1">Electrical Installation & Maintenance — London Homes & Businesses</h1>
              <p className="cctv-hero-sub">Design‑led wiring, neat containment and rigorous testing to BS 7671 — from small works to full rewires and commercial upgrades.</p>
              <p className="cctv-hero-proof">“Professional, tidy, and thorough testing. Power restored safely the same day.” — Facilities Lead, NW1 ★★★★★</p>

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
                      "Consumer unit upgrades with SPD & RCBOs",
                      "Kitchen/extension circuits & EV/heat‑pump feeds",
                      "Testing & certification with clear labelling",
                    ]
                  : [
                      "Distribution boards, sub‑mains & containment",
                      "Emergency lighting & life‑safety feeds",
                      "PPM schedules with remedial tracking",
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
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1758040001/ev_electrical_install_hero_placeholder.png"
                  alt="Eco Voltex electrical installation and maintenance"
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
          <h2 className="cctv-h2" style={{ textAlign: "center" }}>Tailored Solutions For Homes, Landlords & Businesses</h2>

          <div
            className="cctv-container"
            style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"24px", alignItems:"stretch" }}
          >
            {/* LEFT */}
            <div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"12px", marginTop:"2px" }}>
                <div className="cctv-card">
                  <p className="cctv-h3">Residential & Landlords</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Consumer unit upgrades with SPD & labelling</li>
                    <li>Kitchen, extension & outbuilding circuits</li>
                    <li>EV/heat‑pump supplies, bonding & earthing</li>
                    <li>Planned maintenance & fault attendance</li>
                  </ul>
                </div>

                <div className="cctv-card">
                  <p className="cctv-h3">Commercial & Facilities</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Distribution boards, sub‑mains, containment</li>
                    <li>Lighting design (LED) & emergency lighting</li>
                    <li>Load assessments & single‑line diagrams</li>
                    <li>PPM programmes with asset registers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="cctv-figure" style={{ marginLeft:"auto" }}>
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1758040137/ev_electrical_solutions_placeholder.png"
                alt="Electrical solutions overview"
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
            <h2 className="cctv-h2">What You Get With Eco Voltex Electrical</h2>

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
                  ["Survey & Design","Discuss scope, map circuits, containment and protective devices."],
                  ["Quote & Plan","Transparent proposal with spec, drawings (where needed) and programme."],
                  ["First Fix","Routes prepared; containment and cabling installed neatly."],
                  ["Second Fix","Accessories, luminaires and boards installed & labelled."],
                  ["Test & Certify","Full test schedule to BS 7671 and EIC/MEIWC issued."],
                  ["Handover & Aftercare","User guidance, O&M pack and planned maintenance options."],
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
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1758040209/ev_electrical_process_placeholder.png"
                alt="Eco Voltex electrical process"
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
            <h2 className="cctv-h2">Packages — Clear & Great Value</h2>

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

            <p className="cctv-meta cctv-mt-8">Guide pricing for Greater London. Final quotes depend on routes, heights, fabric, access and specification. Out‑of‑hours: +20%.</p>

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
                    {pkg.name.includes("Fit‑Out") || pkg.name.includes("Rewire") ? "Speak To Us" : "Book Survey"}
                  </a>
                  <p className="cctv-meta cctv-mt-8">Add‑ons: EICR packages, emergency lighting tests, surge protection, AFDDs where applicable.</p>
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
            <h2 className="cctv-h2">Compliance & Good Practice (UK)</h2>
            <div className="cctv-grid cctv-grid-2 cctv-mt-16">
              <div className="cctv-card">
                <p className="cctv-strong">Legislation & Standards</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Electricity at Work Regulations 1989 (EAWR)</li>
                  <li>Building Regulations Part P (domestic)</li>
                  <li>BS 7671: IET Wiring Regulations</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">General information only — specifics confirmed on survey. Not legal advice.</p>
              </div>
              <div className="cctv-card">
                <p className="cctv-strong">Documentation</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>EIC/MEIWC issued on completion</li>
                  <li>Circuit schedules and labelling provided</li>
                  <li>Notification to Building Control where applicable</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">We also offer EICR packages if you need a full condition report.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
