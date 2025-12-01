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
    setPcResult(
      inCoverage(postcode)
        ? "You're in our regular coverage. We can usually survey within a few days."
        : "Likely covered — tell us your address and we’ll confirm availability."
    );
  };

  // HOME packages (aligned to reference tone)
  const homePlans = [
    {
      name: "Lighting Installations",
      tag: "Popular",
      price: "from £149",
      meta: "Indoor & outdoor lighting — LED, feature & security",
      bullets: [
        "Design & positioning advice",
        "Neat second-fix and clean finish",
        "Testing & minor making good",
        "12-month workmanship guarantee",
      ],
    },
    {
      name: "Consumer Unit Upgrades",
      tag: "Safety First",
      price: "from £549",
      meta: "Dual-RCD or all-RCBO board with SPD & clear labelling",
      bullets: [
        "BS 7671 compliant components",
        "Initial verification & EIC issued",
        "Part P Building Control notification",
        "RCD/RCBO protection to circuits",
      ],
    },
    {
      name: "Full Property Rewiring",
      tag: "Comprehensive",
      price: "from £2,499",
      meta: "Replace outdated wiring to current standards",
      bullets: [
        "Planned routes & neat containment",
        "Low-energy LED and modern controls",
        "Full test results & certification",
        "Snag visit and handover pack",
      ],
    },
  ];

  // BUSINESS packages (aligned to reference tone)
  const businessPlans = [
    {
      name: "Distribution Upgrades",
      tag: "Popular",
      price: "from £1,199",
      meta: "Boards with RCBOs, SPD, schedules & labelling",
      bullets: [
        "Load assessment & balancing",
        "Lock-off & isolation procedure",
        "Full BS 7671 test results",
        "As-installed single-line diagram",
      ],
    },
    {
      name: "Fit-Out & Small Works",
      tag: "Tailored",
      price: "POA",
      meta: "Power, lighting, containment, sub-mains & more",
      bullets: [
        "CAT A/B office, retail, light industrial",
        "Emergency lighting to BS 5266",
        "Energy-efficient LED design",
        "Out-of-hours working available",
      ],
    },
    {
      name: "Planned Maintenance (PPM)",
      tag: "Best Value",
      price: "from £39/mo",
      meta: "Scheduled checks with priority callouts",
      bullets: [
        "Thermal & visual sampling",
        "Asset register & logbook updates",
        "Remedial tracking & quotes",
        "Priority fault attendance",
      ],
    },
  ];

  const plans = audience === "home" ? homePlans : businessPlans;

  const featureItems = [
    {
      title: "24/7 Emergency Support",
      text: "Rapid response for urgent faults and safety issues.",
    },
    {
      title: "1-Hour Rapid Response",
      text: "Same-day attendance available across Greater London.",
    },
    {
      title: "Fully Qualified Engineers",
      text: "NAPIT-approved, ECS Gold Card, and audit-ready documentation.",
    },
    {
      title: "UKAS & NAPIT Approved",
      text: "Independent assessment of competence and compliance.",
    },
    {
      title: "Free Estimates",
      text: "Clear, itemised quotes with no hidden extras.",
    },
    {
      title: "12-Month Guarantee",
      text: "Workmanship warranty as standard on installations.",
    },
    {
      title: "Proper Certification",
      text: "EIC/MEIWC issued with circuit schedules and labelling.",
    },
    {
      title: "Excellent Reviews",
      text: "Trusted by homeowners, landlords and facilities teams.",
    },
  ];

  const boroughs = [
    "Barking & Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "City of London",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith & Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington & Chelsea",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
  ];

  return (
    <>
      <Header />
      <main className="cctv cctv--page">
        {/* HERO */}
        <section
          id="overview"
          className="cctv-section cctv-hero"
          aria-labelledby="hero-title"
        >
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <h1 id="hero-title" className="cctv-h1">
                Reliable Electrical Installations Across Greater London
              </h1>
              <p className="cctv-hero-sub">
                Safe, efficient and compliant electrical work for homes and
                businesses — from new lighting and additional sockets to
                consumer unit upgrades and full rewiring.
              </p>

              <div
                className="cctv-row"
                role="tablist"
                aria-label="Audience selector"
              >
                <button
                  className={`cctv-chip ${
                    audience === "home" ? "cctv-chip--active" : ""
                  }`}
                  onClick={() => setAudience("home")}
                  role="tab"
                  aria-selected={audience === "home"}
                >
                  Home
                </button>
                <button
                  className={`cctv-chip ${
                    audience === "business" ? "cctv-chip--active" : ""
                  }`}
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
                      "Indoor/outdoor lighting installed & certified",
                      "Extra sockets, cooker points & EV/heat-pump feeds",
                      "Consumer unit upgrades with RCBOs & SPD",
                    ]
                  : [
                      "Distribution boards, sub-mains & containment",
                      "Emergency lighting to BS 5266 & life-safety feeds",
                      "PPM schedules with remedial tracking",
                    ]
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="cctv-row cctv-hero-ctas">
                <a href="#packages" className="cctv-btn cctv-btnPrimary">
                  See Packages
                </a>
                <a href="/contact" className="cctv-btn cctv-btnOutline">
                  Book A Survey
                </a>
              </div>
            </div>

            <div className="cctv-col-5">
              <div className="cctv-figure">
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1758040001/ev_electrical_install_hero_placeholder.png"
                  alt="Eco Voltex electricians installing lighting and consumer unit"
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
          <h2 className="cctv-h2" style={{ textAlign: "center" }}>
            Professional Electrical Installations — Homes & Businesses
          </h2>

          <div
            className="cctv-container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              alignItems: "stretch",
            }}
          >
            {/* LEFT */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "10px",
                  marginTop: "2px",
                }}
              >
                <div className="cctv-card">
                  <p className="cctv-h3">Lighting — Indoor & Outdoor</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Ambient, task & feature lighting (LED)</li>
                    <li>Security and landscape lighting</li>
                    <li>Switching & control upgrades</li>
                    <li>Testing and certification included</li>
                  </ul>
                </div>
                <div className="cctv-card">
                  <p className="cctv-h3">Installation & Upgrades</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Ambient, task & feature lighting (LED)</li>
                    <li>Security and landscape lighting</li>
                    <li>Switching & control upgrades</li>
                    <li>Testing and certification included</li>
                  </ul>
                </div>

                <div className="cctv-card">
                  <p className="cctv-h3">Sockets, Switches & Power</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>New points, spurs & cooker supplies</li>
                    <li>Kitchen/extension circuits and outbuildings</li>
                    <li>EV/heat-pump feeds, earthing & bonding</li>
                    <li>Neat containment and labels</li>
                  </ul>
                </div>

                <div className="cctv-card">
                  <p className="cctv-h3">Consumer Units & Rewiring</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>RCBO/RCD protection with SPD</li>
                    <li>Replace outdated wiring to current standards</li>
                    <li>Full test schedules & EIC/MEIWC</li>
                    <li>Building Regulations (Part P) notification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1764426580/20251129_1926_Premium_Electrical_Installation_simple_compose_01kb801eb6fecrs3wnd533a0ca_zngnuz.png"
                alt="Examples of lighting, power and consumer unit works"
                style={{
                  width: "100%",
                  height: "auto", // or "300px" if you want a fixed height
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="features" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">Why Choose Eco Voltex?</h2>

            <div className="features-grid cctv-mt-16" aria-label="Key features">
              {featureItems.map((f) => (
                <article key={f.title} className="feature" role="listitem">
                  <header className="feature-head">
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
          <div
            className="cctv-container"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <div>
              <h2 className="cctv-h2">Our Electrical Installation Process</h2>
              <ol
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "16px",
                  marginTop: "16px",
                  padding: 0,
                  listStyle: "none",
                }}
                aria-label="Installation steps"
              >
                {[
                  [
                    "Initial Contact & Assessment",
                    "Tell us what you need — we’ll advise on urgency and next steps.",
                  ],
                  [
                    "Survey & Design",
                    "We agree the scope, routes, protective devices and programme.",
                  ],
                  [
                    "Quote & Booking",
                    "Clear, itemised proposal with options; choose a convenient slot.",
                  ],
                  [
                    "First Fix",
                    "Containment and cabling installed neatly, with minimal disruption.",
                  ],
                  [
                    "Second Fix",
                    "Accessories, luminaires and boards fitted and labelled.",
                  ],
                  [
                    "Test, Certify & Handover",
                    "BS 7671 testing, EIC/MEIWC issued, O&M pack and user guidance.",
                  ],
                ].map(([k, v], i) => (
                  <li
                    key={i}
                    style={{
                      background: "#F7FAF8",
                      border: "1px solid #E6EDF3",
                      borderRadius: "12px",
                      padding: "16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      className="cctv-strong"
                      style={{ color: "var(--ev-green)" }}
                    >
                      Step {i + 1}
                    </div>
                    <p
                      style={{
                        fontWeight: 700,
                        marginBottom: 4,
                        color: "var(--ev-navy)",
                      }}
                    >
                      {k}
                    </p>
                    <p style={{ fontSize: 14, color: "#374151" }}>{v}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* RIGHT */}
            <div className="cctv-figure">
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1764610639/20251201_2235_Electrical_Installation_Stages_remix_01kbdfk46dfdmbrwkx8rrxvx7p_tikjlh.png"
                alt="Eco Voltex installation process overview"
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
            <h2 className="cctv-h2">Clear Packages & Great Value</h2>

            <div
              className="cctv-row cctv-mt-8"
              role="tablist"
              aria-label="Package audience selector"
            >
              <button
                className={`cctv-btn ${
                  audience === "home" ? "cctv-btnPrimary" : "cctv-btnOutline"
                }`}
                role="tab"
                aria-selected={audience === "home"}
                onClick={() => setAudience("home")}
              >
                Home
              </button>
              <button
                className={`cctv-btn ${
                  audience === "business"
                    ? "cctv-btnPrimary"
                    : "cctv-btnOutline"
                }`}
                role="tab"
                aria-selected={audience === "business"}
                onClick={() => setAudience("business")}
              >
                Business
              </button>
            </div>

            <p className="cctv-meta cctv-mt-8">
              Guide pricing for Greater London. Final quotes depend on routes,
              heights, fabric, access and specification. Out-of-hours: +20%.
            </p>

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
                    {pkg.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="cctv-btn cctv-btnPrimary cctv-btn--block cctv-mt-12"
                  >
                    {pkg.name.includes("Rewiring") ||
                    pkg.name.includes("Fit-Out")
                      ? "Speak To Us"
                      : "Book Survey"}
                  </a>
                  <p className="cctv-meta cctv-mt-8">
                    Add-ons: EICR packages, emergency lighting tests, surge
                    protection, AFDDs where applicable.
                  </p>
                </div>
              ))}
            </div>

            <div className="cctv-card cctv-mt-16" id="quote">
              <p className="cctv-strong">Quick Coverage Check</p>
              <form
                className="cctv-row cctv-mt-8"
                onSubmit={checkPostcode}
                aria-label="Coverage checker"
              >
                <input
                  className="cctv-input"
                  placeholder="Enter your postcode (e.g., E1 6AN)"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  aria-label="Postcode"
                />
                <button className="cctv-btn cctv-btnOutline" type="submit">
                  Check
                </button>
              </form>
              {pcResult && (
                <div className="cctv-meta cctv-mt-8" aria-live="polite">
                  {pcResult}{" "}
                  <a href="/contact">
                    <b>Contact us</b>
                  </a>{" "}
                  today to book your survey.
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
                  <li>BS 7671: IET Wiring Regulations</li>
                  <li>Building Regulations Part P (domestic)</li>
                  <li>Electricity at Work Regulations 1989 (EAWR)</li>
                </ul>
                <p className="cctv-meta cctv-mt-8">
                  General guidance — specific requirements confirmed on survey.
                </p>
              </div>
              <div className="cctv-card">
                <p className="cctv-strong">Certification & Notification</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>EIC/MEIWC issued on completion</li>
                  <li>Circuit schedules & labelling provided</li>
                  <li>
                    Part P notification to Building Control where applicable
                  </li>
                </ul>
                <p className="cctv-meta cctv-mt-8">
                  Eco Voltex is NAPIT-approved and UKAS-accredited.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
