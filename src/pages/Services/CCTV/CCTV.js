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
      tag: "Best value",
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

  return (
    <>
      <Header />
      <main className="cctv cctv--page">
        {/* HERO (now white bg + black text) */}
        <section
          id="overview"
          className="cctv-section cctv-hero"
          aria-labelledby="hero-title"
        >
          <div className="cctv-container cctv-grid cctv-grid-12 cctv-align-center">
            <div className="cctv-col-7">
              <span className="cctv-pill">
                CCTV Installation • Greater London
              </span>
              <h1 id="hero-title" className="cctv-h1 cctv-h1--on-dark">
                See more. Deter more. Protect what matters.
              </h1>
              <p className="cctv-hero-sub">
                Design-led CCTV with 4K clarity, smart analytics and secure
                remote viewing — installed neatly and tuned to your risks.
              </p>
              <p className="cctv-hero-proof">
                “Neatest cabling I’ve seen. Clear 4K coverage of tills & doors.”
                — Store Manager, E2 ★★★★★
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
                      "Discreet turrets/domes with colour night vision",
                      "Smart alerts tuned for people/visitors, not pets",
                      "Secure remote viewing for the household",
                    ]
                  : [
                      "Coverage for entrances, POS, staff & stock areas",
                      "AI analytics (line crossing, vehicle filters)",
                      "Role-based access, audit logs & retention policy",
                    ]
                ).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="cctv-row cctv-hero-ctas">
                <a href="#packages" className="cctv-btn cctv-btnPrimary">
                  See packages
                </a>
                <a href="/contact" className="cctv-btn cctv-btnGhost">
                  Book a survey
                </a>
              </div>
            </div>

            <div className="cctv-col-5" aria-label="Key specs">
              <div className="cctv-card">
                <h3 className="cctv-h3" style={{ textAlign: "center" }}>
                  Performance at a Glance
                </h3>
                <div className="cctv-grid cctv-grid-2">
                  {[
                    ["Clarity", "Up to 8MP / 4K"],
                    ["Night", "Colour/IR low light"],
                    ["Smart", "Human/vehicle filters"],
                    ["Secure", "HTTPS, VLAN, strong credentials"],
                  ].map(([k, v]) => (
                    <div key={k} className="cctv-mini-kv">
                      <p className="cctv-mini-kv__k">{k}</p>
                      <p className="cctv-mini-kv__v">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="cctv-section">
          <div className="cctv-container">
            <h2 className="cctv-h2">
              Tailored solutions for homes and businesses
            </h2>
            <div className="cctv-grid cctv-grid-2 cctv-gap-16 cctv-mt-16">
              <div className="cctv-card">
                <p className="cctv-h3">Residential</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Deterrent coverage for driveways, doors, gardens</li>
                  <li>
                    Discreet turrets/domes; colour night vision where suitable
                  </li>
                  <li>Privacy masks for neighbours/public footways</li>
                  <li>Secure remote viewing for household members</li>
                </ul>
              </div>
              <div className="cctv-card">
                <p className="cctv-h3">Commercial & FM</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Entrances, POS, car parks, stock & loading bays</li>
                  <li>
                    AI analytics (human/vehicle, line crossing, intrusion)
                  </li>
                  <li>24/7 recording, health checks & cyber hardening</li>
                  <li>Multi-site dashboards, roles & audit logs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">What you get with Eco Voltex CCTV</h2>
            <ul
              className="cctv-grid cctv-grid-3 cctv-gap-16 cctv-mt-16 cctv-list-reset"
              aria-label="Key features"
            >
              {[
                "4MP–8MP (2K–4K) cameras with true WDR and low-light colour",
                "Smart detection: human/vehicle, line-crossing & intrusion",
                "Mobile & web viewing with role-based access and two-factor options",
                "Secure NVR: locked admin, strong passwords, network segmentation",
                "Privacy masking and retention controls aligned to policy",
                "Professional signage and GDPR guidance for lawful operation",
                "Storage choices: on-prem NVR, NAS or encrypted cloud",
                "Power: PoE (preferred), PoE+ for long runs; Wi-Fi where cabling isn’t feasible",
                "Optional audio challenge, siren & strobe on deterrence models",
              ].map((s) => (
                <li key={s} className="cctv-card">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="cctv-section">
          <div
            className="cctv-container"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr", // left = steps, right = image
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* LEFT SIDE (Steps in 2 columns) */}
            <div>
              <h2 className="cctv-h2">Our installation process</h2>
              <ol
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginTop: "16px",
                  padding: 0,
                  listStyle: "none",
                }}
                aria-label="Installation steps"
              >
                {[
                  [
                    "Survey & design",
                    "We map risk areas, coverage, cable paths and retention needs.",
                  ],
                  [
                    "Quote & plan",
                    "Transparent proposal with kit list, positioning plan and timeframes.",
                  ],
                  [
                    "First fix",
                    "Prepare routes; containment fitted neatly where needed.",
                  ],
                  [
                    "Install & commission",
                    "Cameras mounted, PoE/NVR configured, analytics tuned & tested.",
                  ],
                  [
                    "Handover",
                    "App setup, user training, admin docs, passwords sealed and labelled.",
                  ],
                  [
                    "Aftercare",
                    "Proactive maintenance, firmware updates and remote support.",
                  ],
                ].map(([k, v], i) => (
                  <li
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1px solid #E6EDF3",
                      borderRadius: "12px",
                      padding: "16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        color: "#16A34A",
                        fontWeight: 800,
                        marginBottom: "6px",
                      }}
                    >
                      Step {i + 1}
                    </div>
                    <p style={{ fontWeight: 700, marginBottom: "4px" }}>{k}</p>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{v}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* RIGHT SIDE (Random photo) */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://source.unsplash.com/random/400x400?technology,camera"
                alt="Eco Voltex CCTV process"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Responsive override for mobile */}
          <style>
            {`
      @media (max-width: 768px) {
        #process .cctv-container {
          grid-template-columns: 1fr !important;
        }
        #process ol {
          grid-template-columns: 1fr !important;
        }
      }
    `}
          </style>
        </section>

        {/* STORAGE + SECURITY */}
        <section id="storage" className="cctv-section cctv-soft">
          <div className="cctv-container cctv-grid cctv-grid-2 cctv-gap-16">
            <div className="cctv-card">
              <p className="cctv-h3">Storage & retention</p>
              <p className="cctv-mt-8">
                Typical retention: <b>14–30 days</b> (homes/SMEs) or{" "}
                <b>30–60+ days</b> (higher risk). We balance resolution, frame
                rate, motion activity and budget.
              </p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>Event-based recording to extend retention</li>
                <li>Health alerts for camera/disk issues (where supported)</li>
                <li>Cloud backup for critical entrances/gates</li>
              </ul>
            </div>
            <div className="cctv-card">
              <p className="cctv-h3">Cyber-secure by default</p>
              <ul className="cctv-list cctv-list--disc cctv-mt-8">
                <li>
                  Unique strong credentials; remove defaults; admin separation
                </li>
                <li>
                  Firmware updates; disable unused services; HTTPS where
                  supported
                </li>
                <li>
                  Local network isolation/VLAN & outbound-only remote access
                  where feasible
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="cctv-section">
          <div className="cctv-container">
            <h2 className="cctv-h2">
              Before & after — neat, discreet, professional
            </h2>
            <div className="cctv-grid cctv-grid-3 cctv-gap-16 cctv-mt-16">
              {[1, 2, 3].map((i) => (
                <figure key={i} className="cctv-card cctv-gallery">
                  <img
                    src={`/images/gallery/cctv-${i}.webp`}
                    width="640"
                    height="360"
                    loading="lazy"
                    alt={`Eco Voltex CCTV installation example ${i}`}
                  />
                  <figcaption className="cctv-meta">
                    Tidy containment • Correct sealants • Labelled NVR
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="cctv-section cctv-soft">
          <div className="cctv-container">
            <h2 className="cctv-h2">Packages (No VAT) — clear & great value</h2>

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
              Guide pricing for Greater London. Final quotes depend on cable
              routes, heights, fabric, access and analytics. Out-of-hours: +20%.
            </p>

            <div className="cctv-grid cctv-grid-3 cctv-gap-16 cctv-mt-16">
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
                    href="#quote"
                    className="cctv-btn cctv-btnPrimary cctv-btn--block cctv-mt-12"
                  >
                    {pkg.name.includes("Professional")
                      ? "Speak to us"
                      : "Book survey"}
                  </a>
                  <p className="cctv-meta cctv-mt-8">
                    Add-ons: cloud clip backup, proactive maintenance,
                    intercom/intruder links.
                  </p>
                </div>
              ))}
            </div>

            <div className="cctv-card cctv-mt-16">
              <div className="cctv-grid cctv-grid-2 cctv-gap-16">
                <div>
                  <p className="cctv-strong">Included</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>
                      PoE cabling, neat containment, commissioning & testing
                    </li>
                    <li>
                      App setup, quick training, admin pack (passwords, labels,
                      IP map)
                    </li>
                    <li>
                      12-month workmanship warranty (manufacturer warranties
                      apply)
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="cctv-strong">Not included</p>
                  <ul className="cctv-list cctv-list--disc cctv-mt-8">
                    <li>Scaffold/MEWP if required (quoted separately)</li>
                    <li>
                      Unusual fabric works (e.g., stone coring) or builder’s
                      works
                    </li>
                    <li>
                      Third-party monitoring fees or cloud storage subscriptions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cctv-card cctv-mt-16" id="quote">
              <p className="cctv-strong">Quick coverage check</p>
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
              <div className="cctv-meta cctv-mt-8" aria-live="polite">
                {pcResult}
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section id="compliance" className="cctv-section">
          <div className="cctv-container">
            <h2 className="cctv-h2">Compliance & good practice (UK)</h2>
            <div className="cctv-grid cctv-grid-2 cctv-gap-16 cctv-mt-16">
              <div className="cctv-card">
                <p className="cctv-strong">Signage & privacy</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Clear CCTV signage where recording occurs</li>
                  <li>
                    Privacy masks for neighbours/public areas where appropriate
                  </li>
                  <li>
                    Limit access to authorised users; keep access logs where
                    needed
                  </li>
                </ul>
              </div>
              <div className="cctv-card">
                <p className="cctv-strong">Data protection (business)</p>
                <ul className="cctv-list cctv-list--disc cctv-mt-8">
                  <li>Define purpose, retention period & lawful basis</li>
                  <li>Consider ICO registration if required (business use)</li>
                  <li>
                    Provide subject access procedures and secure storage
                    controls
                  </li>
                </ul>
                <p className="cctv-meta cctv-mt-8">
                  Domestic users often fall under the “household exemption”; we
                  still set privacy masks and good practices.
                </p>
              </div>
            </div>
            <p className="cctv-meta cctv-mt-8">
              General information only — specifics confirmed on survey. Not
              legal advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
