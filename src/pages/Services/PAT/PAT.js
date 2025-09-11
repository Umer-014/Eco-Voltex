// src/pages/PatTestingPage.jsx
import React,{useEffect,useState} from "react";
import "./PAT.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function PatTestingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);
  return (
    <>
      <Header />
      <main className="ev ev--page">
        {/* Sticky CTA (desktop) */}
        <div className="ev-sticky-cta">
          <span className="ev-sticky-cta__label">Need PAT this week?</span>
          <a href="/contact" className="ev-btn ev-btn--primary">
            Get a fast quote
          </a>
          <a href="#pricing" className="ev-btn ev-btn--outline">
            See pricing
          </a>
        </div>

        {/* HERO */}
        <section
          style={{
            position: "relative",
            padding: "64px 0",
            color: "#0b1220",
            background: "#f9fafb", // light background
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 20px",
              display: "flex",
              flexWrap: "wrap", // responsive
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* LEFT: Text column */}
            <div
              style={{
                flex: "2 1 480px",
                minWidth: 280,
              }}
            >
              <p
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "#e5f3ff",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Same-week PAT Testing • Greater London
              </p>

              <h1
                style={{
                  margin: "16px 0 0 0",
                  fontSize: "40px",
                  lineHeight: 1.1,
                  fontWeight: 800,
                }}
              >
                PAT testing done right — <span>safe, compliant</span> & reliable
              </h1>

              <ul style={{ marginTop: 16, paddingLeft: 18 }}>
                <li>Certified engineers, DBS-checked & insured</li>
                <li>Next-day certificate & CSV results</li>
                <li>Minimal disruption, flexible scheduling</li>
              </ul>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginTop: 20,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    background: "#0ea5e9",
                    color: "black",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontWeight: 600,
                  }}
                >
                  Book PAT testing
                </a>
                <a
                  href="#pricing"
                  style={{
                    textDecoration: "none",
                    background: "transparent",
                    color: "#0b1220",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontWeight: 600,
                    border: "1px solid rgba(0,0,0,0.15)",
                  }}
                >
                  See pricing
                </a>
              </div>

              <p style={{ marginTop: 12, opacity: 0.9 }}>
                Fully insured (£2m PLI + £1m PI) • IET Code of Practice (5th
                Ed.) • BS EN 50678/50699
              </p>

              {/* Mobile-only CTA */}
              <div style={{ marginTop: 16 }}>
                <a
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    background: "#0ea5e9",
                    color: "#fff",
                    padding: "12px 16px",
                    borderRadius: 10,
                    fontWeight: 700,
                  }}
                >
                  Get a fast quote
                </a>
              </div>

              {/* Badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 24,
                }}
              >
                {[
                  "🛡️ Fully insured (£2m PLI + £1m PI)",
                  "📄 IET CoP 5th Ed.",
                  "⏱️ Out-of-hours available",
                  "🏙️ Greater London & nearby",
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "1 1 200px",
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image column */}
            <div
              style={{
                flex: "1 1 340px",
                minWidth: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={
                  "https://res.cloudinary.com/dug1siluu/image/upload/v1757617738/ChatGPT_Image_Sep_12_2025_12_08_49_AM_dwwdn9.png"
                }
                alt="PAT testing in action"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 14,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="ev-section">
          <div className="ev-container">
            <ul
              className="ev-grid ev-grid--4 ev-gap-16 ev-cards"
              style={{ listStyle: "none" }}
            >
              <li className="ev-card">
                <b>Qualified engineers</b>
                <br />
                City & Guilds PAT • DBS-checked
              </li>
              <li className="ev-card">
                <b>Standards-led</b>
                <br />
                IET CoP 5th Ed. · BS EN 50678/50699
              </li>
              <li className="ev-card">
                <b>Fully insured</b>
                <br />
                £2m Public Liability • £1m PI
              </li>
              <li className="ev-card">
                <b>Coverage</b>
                <br />
                Greater London & nearby
              </li>
            </ul>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">Trusted by London businesses</h2>
            <div className="ev-grid ev-grid--3 ev-gap-16 ev-mt-16 ev-cards">
              <figure className="ev-card">
                <blockquote>
                  “Flawless execution across 8 floors overnight. Report in our
                  inbox by 8am.”
                </blockquote>
                <figcaption className="ev-meta">
                  — Operations Manager, Coworking
                </figcaption>
              </figure>
              <figure className="ev-card">
                <blockquote>
                  “Clear defect photos and practical advice. Scheduling around
                  exams was perfect.”
                </blockquote>
                <figcaption className="ev-meta">
                  — School Business Leader
                </figcaption>
              </figure>
              <figure className="ev-card">
                <blockquote>
                  “Multi-site plan and CSV import saved us days. Great comms
                  from the team.”
                </blockquote>
                <figcaption className="ev-meta">
                  — FM for Retail Group
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* WHY + WHAT WE TEST */}
        <section className="ev-section">
          <div className="ev-container ev-grid ev-grid--12 ev-gap-32">
            <div className="ev-col ev-col--7">
              <h2 className="ev-h2">Why PAT testing matters</h2>
              <p className="ev-body">
                Portable Appliance Testing (PAT) helps you demonstrate that
                electrical equipment provided for use at work is maintained in a
                safe condition. The Electricity at Work Regulations 1989 require
                duty-holders to prevent danger from electrical equipment; PAT is
                a widely accepted, risk-based way to evidence compliance, reduce
                incidents, and satisfy insurers.
              </p>
              <ul
                className="ev-grid ev-grid--2 ev-gap-16 ev-mt-16"
                style={{ listStyle: "none" }}
              >
                <li className="ev-card">
                  <b>Risk-based compliance</b>
                  <br />
                  RAMS and test regimes tailored to your risk profile.
                </li>
                <li className="ev-card">
                  <b>Zero-disruption planning</b>
                  <br />
                  Floor-by-floor coordination, quiet hours, stakeholder comms.
                </li>
                <li className="ev-card">
                  <b>Actionable findings</b>
                  <br />
                  Defect codes, photos on request, prioritised remedials.
                </li>
                <li className="ev-card">
                  <b>Audit-ready records</b>
                  <br />
                  Asset register, test evidence and certificates.
                </li>
              </ul>
            </div>

            <aside className="ev-col ev-col--5">
              <div className="ev-card">
                <h3 className="ev-h3">What we test</h3>
                <ul className="ev-list ev-list--disc ev-mt-12">
                  <li>Class I, Class II & SELV appliances</li>
                  <li>IT/AV (PCs, monitors, servers, projectors, chargers)</li>
                  <li>Extension leads, IEC leads, multi-way adaptors & RCDs</li>
                  <li>110 V site tools & transformers (construction)</li>
                  <li>
                    Kitchen & cleaning equipment (toasters, urns, vacuums)
                  </li>
                  <li>Communal/landlord & education items (by agreement)</li>
                </ul>
                <p className="ev-meta ev-mt-12">
                  Fixed wiring (EICR), emergency lighting & fire safety are
                  separate services.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* PREP CHECKLIST */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">How to prepare (quick checklist)</h2>
            <ul
              className="ev-grid ev-grid--3 ev-gap-16 ev-mt-16 ev-cards"
              style={{ listStyle: "none" }}
            >
              {[
                "Ensure appliances are accessible and powered where possible",
                "Identify critical equipment and preferred disruption windows",
                "Provide floor plans/areas and any security/induction details",
                "Advise of sensitive spaces (clinics, exams, studios)",
                "Nominate an on-site contact for quick decisions",
                "Tell us about previous failures or recurring issues",
              ].map((t) => (
                <li key={t} className="ev-card">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="ev-section">
          <div className="ev-container">
            <h2 className="ev-h2">Our PAT testing process</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap", // responsive behavior
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {/* Left Column: Steps in 2 Columns */}
              <ol
                style={{
                  flex: "2 1 300px", // grows, shrinks, min width
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr", // 2 columns for steps
                  gap: "16px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  [
                    "Survey & plan",
                    "We confirm scope, risk profile and schedule with your team; RAMS supplied.",
                  ],
                  [
                    "Asset register",
                    "Create/update inventory with locations and IDs (barcode optional).",
                  ],
                  [
                    "Visual inspection",
                    "Damage, suitability, vents/guards, fuses, cables, plugs and ratings.",
                  ],
                  [
                    "Electrical tests",
                    "Earth continuity, insulation resistance, polarity & leakage (as applicable).",
                  ],
                  [
                    "Label & document",
                    "Pass/Fail label with due date; digital certificate and CSV results.",
                  ],
                  [
                    "Review & reminders",
                    "Agree remedials and retest intervals; renewal reminders included.",
                  ],
                ].map(([k, v], i) => (
                  <li
                    key={i}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "#fff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        marginBottom: "8px",
                        color: "#007BFF",
                      }}
                    >
                      Step {i + 1}
                    </div>
                    <p style={{ fontWeight: "600", marginBottom: "8px" }}>
                      {k}
                    </p>
                    <p style={{ margin: 0 }}>{v}</p>
                  </li>
                ))}
              </ol>

              {/* Right Column: Random Image */}
              <div
                style={{
                  flex: "1 1 250px", // image takes 1/3 width on desktop, full width on mobile
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dug1siluu/image/upload/v1757617624/ChatGPT_Image_Sep_12_2025_12_06_32_AM_fkdbv7.png"
                  }
                  alt="Random PAT testing step"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENCY MATRIX */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">How often should equipment be tested?</h2>
            <p className="ev-body ev-mt-8">
              Retest intervals are set by <b>risk assessment</b> (environment,
              equipment class, usage, user competence, history, and manufacturer
              guidance). Typical starting points are below; we confirm
              appropriate intervals during your survey.
            </p>

            <div className="ev-table-wrap ev-mt-16">
              <table className="ev-table">
                <thead>
                  <tr>
                    <th>Environment</th>
                    <th>Equipment</th>
                    <th>Formal visual inspection</th>
                    <th>Combined inspection & test</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Office / Low-risk commercial</td>
                    <td>IT, monitors, printers</td>
                    <td>12–24 months</td>
                    <td>24–48 months</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Extension leads/adaptors</td>
                    <td>12–24 months</td>
                    <td>12–24 months</td>
                  </tr>
                  <tr>
                    <td>Retail / Schools / Hospitality</td>
                    <td>Frequent-use appliances; public-accessible items</td>
                    <td>6–12 months</td>
                    <td>6–12 months</td>
                  </tr>
                  <tr>
                    <td>Back-of-house / Kitchens</td>
                    <td>Kettles, microwaves, fridges, water boilers</td>
                    <td>6–12 months</td>
                    <td>6–12 months</td>
                  </tr>
                  <tr>
                    <td>Construction / Industrial</td>
                    <td>110 V tools & leads; site distribution; RCDs</td>
                    <td>
                      3 months (visual for site distribution); RCDs: monthly
                      user test
                    </td>
                    <td>
                      3–6 months (tools/leads); 6–12 months (site distribution);
                      RCDs: periodic instrument test per risk/manufacturer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="ev-meta ev-mt-8">
              Intervals are guidance and may increase or decrease based on
              evidence and risk profile.
            </p>
          </div>
        </section>

        {/* SECTORS */}
        <section className="ev-section">
          <div className="ev-container">
            <h2 className="ev-h2">Sectors we support</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap", // makes it responsive
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {/* Left Column: Cards in 2 Columns */}
              <div
                style={{
                  flex: "2 1 300px", // grows, shrinks, min width
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {[
                  [
                    "Offices & co-working",
                    "Desk equipment, kitchens, meeting rooms",
                  ],
                  ["Retail & hospitality", "POS, back-of-house, guest areas"],
                  ["Education", "Classrooms, labs, IT suites, halls"],
                  [
                    "Healthcare & care",
                    "Non-medical electrical items (by agreement)",
                  ],
                  [
                    "Construction & FM",
                    "110 V tools, cabins, temporary supplies",
                  ],
                  [
                    "Landlords & HMOs",
                    "Communal appliances, re-lets, inventories",
                  ],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "#fff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    }}
                  >
                    <p style={{ fontWeight: "600", marginBottom: "8px" }}>
                      {t}
                    </p>
                    <p style={{ margin: 0 }}>{d}</p>
                  </div>
                ))}
              </div>

              {/* Right Column: Random Image */}
              <div
                style={{
                  flex: "1 1 250px", // flexible, min width for phone
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dug1siluu/image/upload/v1757617505/ChatGPT_Image_Sep_12_2025_12_04_49_AM_vidu8z.png"
                  }
                  alt="Random sector"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES + FORM */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">What you get</h2>
            <ul
              className="ev-grid ev-grid--3 ev-gap-16 ev-mt-16 ev-cards"
              style={{ listStyle: "none" }}
            >
              {[
                "PAT certificate (PDF) and detailed results (CSV/PDF)",
                "Updated asset register with locations and unique IDs",
                "Pass/Fail labels with next inspection date",
                "Minor repairs where practical (fuses up to 13A, plug re-terminations)",
                "Remedial recommendations with photo evidence (on request)",
                "Compliance pack for audits/insurers (on request)",
              ].map((t) => (
                <li key={t} className="ev-card">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="ev-section">
          <div className="ev-container">
            <h2 className="ev-h2">Transparent pricing (No VAT)</h2>
            <p className="ev-body ev-mt-8">
              Aligned with London norms — clear packages that protect small jobs
              and reward larger sites. Out-of-hours: +20%.
            </p>

            <div className="ev-grid ev-grid--3 ev-gap-16 ev-mt-16">
              <div className="ev-card">
                <p className="ev-strong">Small sites</p>
                <p className="ev-meta">Up to 30 items</p>
                <p className="ev-price">£120</p>
                <ul className="ev-list ev-list--dots">
                  <li>Includes travel, labels, minor fixes</li>
                  <li>Digital certificate + CSV results</li>
                  <li>No VAT charged</li>
                </ul>
                <a
                  href="/contact"
                  className="ev-btn ev-btn--primary ev-btn--block ev-mt-16"
                >
                  Book this package
                </a>
              </div>

              <div className="ev-card ev-card--accent">
                <p className="ev-strong">Growing teams</p>
                <p className="ev-meta">31–100 items</p>
                <p className="ev-price">
                  £120 + £2
                  <span className="ev-price__suffix">/item over 30</span>
                </p>
                <ul className="ev-list ev-list--dots">
                  <li>Out-of-hours available (+20%)</li>
                  <li>Consolidated reporting</li>
                  <li>No VAT charged</li>
                </ul>
                <a
                  href="/contact"
                  className="ev-btn ev-btn--primary ev-btn--block ev-mt-16"
                >
                  Get tailored quote
                </a>
              </div>

              <div className="ev-card">
                <p className="ev-strong">Large & multi-site</p>
                <p className="ev-meta">101–250+ items</p>
                <p className="ev-price">
                  from £1.50<span className="ev-price__suffix">/item</span>
                </p>
                <ul className="ev-list ev-list--dots">
                  <li>Portfolio scheduling & dedicated PM</li>
                  <li>API/CSV data share on request</li>
                  <li>Multi-site discounts up to 25%</li>
                </ul>
                <a
                  href="/contact"
                  className="ev-btn ev-btn--primary ev-btn--block ev-mt-16"
                >
                  Speak to us
                </a>
              </div>
            </div>

            <p className="ev-meta ev-mt-12">
              Prices are guidance for Greater London. Final quotes confirm
              scope, access & risk profile. No VAT charged.
            </p>
          </div>
        </section>

        {/* SAMPLE REPORT */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container ev-grid ev-grid--12 ev-gap-32">
            <div className="ev-col ev-col--7">
              <h2 className="ev-h2">See exactly what you’ll receive</h2>
              <p className="ev-body ev-mt-8">
                Preview a redacted sample certificate and a results file to
                share with stakeholders.
              </p>

              <div className="ev-actions ev-mt-16">
                <a href="/pdf.pdf" className="ev-btn ev-btn--primary">
                  Download sample PDF
                </a>
                <a href="/csv file.pdf" className="ev-btn ev-btn--outline">
                  Download sample CSV
                </a>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row", // stack on mobile
                  justifyContent: "space-between", // pushes images to far left & right
                  alignItems: "stretch", // makes them same height
                  gap: "60px",
                  width: "100%",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757602608/ChatGPT_Image_Sep_11_2025_07_56_32_PM_afleph.png"
                  alt="Sample PAT Testing Results"
                  style={{
                    flex: "1", // makes both share equal space
                    height: "400px", // fix same height
                    objectFit: "contain", // keeps image ratio, no distortion
                  }}
                />
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757601945/ChatGPT_Image_Sep_11_2025_07_41_31_PM_fzya3v.png"
                  alt="Sample PAT Testing Certificate"
                  style={{
                    flex: "1",
                    height: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className="ev-section">
          <div className="ev-container ev-grid ev-grid--12 ev-gap-32">
            <div className="ev-col ev-col--7">
              <h2 className="ev-h2">
                Serving Greater London and surrounding areas
              </h2>
              <p className="ev-body ev-mt-8">
                All 32 London boroughs and the City of London, plus regular
                routes to nearby towns in Hertfordshire, Essex, Surrey,
                Berkshire and Kent.
              </p>
              <div className="ev-actions ev-mt-16">
                <a href="/areas-we-cover" className="ev-btn ev-btn--outline">
                  Check coverage
                </a>
                <a href="/contact" className="ev-btn ev-btn--primary">
                  Book now
                </a>
              </div>
            </div>

            <div className="ev-col ev-col--5">
              <div className="ev-card">
                <p className="ev-strong">Method statements & RAMS</p>
                <p>
                  Provided on request. We can complete inductions and work under
                  permits to work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="ev-section">
          <div className="ev-container">
            <h2 className="ev-h2">Compliance & standards</h2>
            <div className="ev-grid ev-grid--2 ev-gap-16 ev-mt-16">
              <div className="ev-card">
                <p className="ev-strong">Legal position (summary)</p>
                <ul className="ev-list ev-list--disc ev-mt-12">
                  <li>
                    <b>Workplaces (England/Wales/Scotland):</b> Law requires
                    equipment to be maintained to prevent danger (EAWR 1989).
                    PAT is not prescribed but is a recognised way to evidence
                    compliance.
                  </li>
                  <li>
                    <b>Private rented sector (England):</b> 5-yearly EICR
                    mandatory for fixed wiring. PAT not mandated by PRS regs but
                    often requested by agents/insurers.
                  </li>
                  <li>
                    <b>HMOs:</b> Local licence conditions may require annual PAT
                    for landlord-supplied appliances.
                  </li>
                  <li>
                    <b>Scotland PRS:</b> Private landlords must complete EICR
                    and PAT for landlord-provided appliances.
                  </li>
                </ul>
              </div>

              <div className="ev-card">
                <p className="ev-strong">We align to</p>
                <ul className="ev-list ev-list--disc ev-mt-12">
                  <li>
                    IET{" "}
                    <em>
                      Code of Practice for In-Service Inspection and Testing of
                      Electrical Equipment
                    </em>{" "}
                    (5th Edition, 2020)
                  </li>
                  <li>
                    BS EN 50678:2020 — Verification of protective measures after
                    repair
                  </li>
                  <li>
                    BS EN 50699:2020 — Recurrent tests of electrical equipment
                  </li>
                  <li>Electricity at Work Regulations 1989</li>
                </ul>

                <p className="ev-strong ev-mt-16">Insurance & deliverables</p>
                <ul className="ev-list ev-list--disc ev-mt-12">
                  <li>
                    Insurance: £2,000,000 Public Liability & £1,000,000
                    Professional Indemnity
                  </li>
                  <li>Equipment register with unique IDs and locations</li>
                  <li>
                    Digital certificate (PDF) and detailed results (CSV/PDF)
                  </li>
                  <li>Labelled appliances with next inspection date</li>
                  <li>Method statements & RAMS on request</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">PAT testing FAQs</h2>
            <div className="ev-grid ev-grid--2 ev-gap-16 ev-mt-16">
              {[
                [
                  "Is PAT testing a legal requirement?",
                  "PAT itself is not specifically named in law for workplaces, but the Electricity at Work Regulations 1989 require electrical equipment to be maintained to prevent danger. PAT provides recognised evidence that equipment is safe to use. Scottish private landlords must include PAT as part of their electrical safety inspection.",
                ],
                [
                  "How often should I retest?",
                  "Intervals are risk-based: environment, equipment class, usage, user competence and history. Typical ranges are 3–48 months. We’ll agree an appropriate schedule during your survey.",
                ],
                [
                  "Will testing disrupt our work?",
                  "We plan around your operations, including early, late or weekend visits. Testing per item usually takes a few minutes; we coordinate floor-by-floor to minimise downtime.",
                ],
                [
                  "Do you provide certificates and an asset list?",
                  "Yes. You’ll receive a PDF certificate and a detailed results file with asset IDs, locations and outcomes. We can also supply CSVs for your CAFM/asset system.",
                ],
                [
                  "What happens if something fails?",
                  "We’ll label it as unsafe, remove it from service (with your permission), attempt minor repairs on the spot, and provide clear next steps.",
                ],
                [
                  "Which standards do you follow?",
                  "We work to the IET Code of Practice (5th Edition) and relevant British/European standards including BS EN 50678 and BS EN 50699 where applicable.",
                ],
              ].map(([q, a]) => (
                <details key={q} className="ev-card">
                  <summary className="ev-strong">{q}</summary>
                  <p className="ev-mt-8">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="ev-cta">
          <div className="ev-container ev-center">
            <h2 className="ev-h2 ev-h2--on-dark">
              Ready for safe, compliant appliances?
            </h2>
            <p className="ev-cta__sub">
              Book Eco Voltex for professional PAT testing with clear reports
              and practical advice.
            </p>
            <div className="ev-actions ev-actions--center ev-mt-16">
              <a href="/contact" className="ev-btn ev-btn--light">
                Get a quote
              </a>
              <a href="#faqs" className="ev-btn ev-btn--ghost">
                Read FAQs
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is PAT testing a legal requirement?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PAT itself is not specifically named in law for workplaces, but the Electricity at Work Regulations 1989 require electrical equipment to be maintained to prevent danger. PAT provides recognised evidence. Scottish private landlords must include PAT as part of their electrical safety inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often should I PAT test?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Intervals are risk-based, considering environment, equipment class, usage and history. Typical ranges are 3–48 months; we confirm an appropriate schedule during your survey.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
