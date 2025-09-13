// /mnt/data/PAT.js
/* src/pages/PatTestingPage.jsx */
import React, { useEffect, useState } from "react";
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
            Get A Fast Quote
          </a>
          <a href="#pricing" className="ev-btn ev-btn--outline">
            See Pricing
          </a>
        </div>

        {/* HERO */}
        <section
          style={{
            position: "relative",
            padding: "64px 0",
            color: "var(--ev-text)",
            background: "var(--ev-bg-soft)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* LEFT: Text column */}
            <div style={{ flex: "2 1 480px", minWidth: 280 }}>
              <h1
                style={{
                  margin: "16px 0 0 0",
                  fontSize: "40px",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  color: "var(--ev-primary-800)",
                }}
              >
                PAT Testing Done Right — <span>Safe, Compliant</span> & Reliable
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
                    background: "var(--ev-accent)",
                    color: "#fff",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontWeight: 600,
                  }}
                >
                  Book PAT Testing
                </a>
                <a
                  href="#pricing"
                  style={{
                    textDecoration: "none",
                    background: "#fff",
                    color: "var(--ev-primary-800)",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontWeight: 600,
                    border: "1px solid var(--ev-border)",
                  }}
                >
                  See Pricing
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
                    background: "var(--ev-accent)",
                    color: "#fff",
                    padding: "12px 16px",
                    borderRadius: 10,
                    fontWeight: 700,
                  }}
                >
                  Get A Fast Quote
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
                      border: "1px solid var(--ev-border)",
                      boxShadow: "0 2px 6px rgba(4,30,50,0.08)",
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
                  "https://res.cloudinary.com/dug1siluu/image/upload/v1757788696/ChatGPT_Image_Sep_13_2025_11_37_58_PM_blssbd.png"
                }
                alt="PAT testing in action"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 14,
                  boxShadow: "0 8px 24px rgba(4,30,50,0.15)",
                  background: "#fff",
                  objectFit: "contain",
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
                <b>Qualified Engineers</b>
                <br />
                City & Guilds PAT • DBS-checked
              </li>
              <li className="ev-card">
                <b>Standards-Led</b>
                <br />
                IET CoP 5th Ed. · BS EN 50678/50699
              </li>
              <li className="ev-card">
                <b>Fully Insured</b>
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
            <h2 className="ev-h2">Trusted By London Businesses</h2>
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
              <h2 className="ev-h2">Why PAT Testing Matters</h2>
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
                  <b>Risk-Based Compliance</b>
                  <br />
                  RAMS and test regimes tailored to your risk profile.
                </li>
                <li className="ev-card">
                  <b>Zero-Disruption Planning</b>
                  <br />
                  Floor-by-floor coordination, quiet hours, stakeholder comms.
                </li>
                <li className="ev-card">
                  <b>Actionable Findings</b>
                  <br />
                  Defect codes, photos on request, prioritised remedials.
                </li>
                <li className="ev-card">
                  <b>Audit-Ready Records</b>
                  <br />
                  Asset register, test evidence and certificates.
                </li>
              </ul>
            </div>

            <aside className="ev-col ev-col--5">
              <div className="ev-card">
                <h3 className="ev-h3">What We Test</h3>
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
            <h2 className="ev-h2">How To Prepare (Quick Checklist)</h2>
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
            <h2 className="ev-h2">Our PAT Testing Process</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {/* Left Column: Steps in 2 Columns */}
              <ol
                style={{
                  flex: "2 1 300px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  [
                    "Survey & Plan",
                    "We confirm scope, risk profile and schedule with your team; RAMS supplied.",
                  ],
                  [
                    "Asset Register",
                    "Create/update inventory with locations and IDs (barcode optional).",
                  ],
                  [
                    "Visual Inspection",
                    "Damage, suitability, vents/guards, fuses, cables, plugs and ratings.",
                  ],
                  [
                    "Electrical Tests",
                    "Earth continuity, insulation resistance, polarity & leakage (as applicable).",
                  ],
                  [
                    "Label & Document",
                    "Pass/Fail label with due date; digital certificate and CSV results.",
                  ],
                  [
                    "Review & Reminders",
                    "Agree remedials and retest intervals; renewal reminders included.",
                  ],
                ].map(([k, v], i) => (
                  <li
                    key={i}
                    style={{
                      border: "1px solid var(--ev-border)",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "#fff",
                      boxShadow: "0 2px 6px rgba(4,30,50,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: 8,
                        color: "var(--ev-accent)",
                      }}
                    >
                      Step {i + 1}
                    </div>
                    <p style={{ fontWeight: 600, marginBottom: 8 }}>{k}</p>
                    <p style={{ margin: 0 }}>{v}</p>
                  </li>
                ))}
              </ol>

              {/* Right Column: Image */}
              <div
                style={{
                  flex: "1 1 250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dug1siluu/image/upload/v1757617624/ChatGPT_Image_Sep_12_2025_12_06_32_AM_fkdbv7.png"
                  }
                  alt="PAT testing step"
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENCY MATRIX */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">How Often Should Equipment Be Tested?</h2>
            <p className="ev-body ev-mt-8">
              Retest intervals are set by <b>risk assessment</b> (environment,
              equipment class, usage, user competence, history, and manufacturer
              guidance). Typical starting points are below; we confirm
              appropriate intervals during your survey.
            </p>

            <div className="ev-table-wrap ev-mt-16">
              <table className="ev-table ev-table--responsive">
                <thead>
                  <tr>
                    <th>Environment</th>
                    <th>Equipment</th>
                    <th>Formal Visual Inspection</th>
                    <th>Combined Inspection &amp; Test</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Environment">
                      Construction / Site Work (110&nbsp;V)
                    </td>
                    <td data-label="Equipment">
                      110&nbsp;V portable tools &amp; leads
                    </td>
                    <td data-label="Formal Visual Inspection">Monthly</td>
                    <td data-label="Combined Inspection &amp; Test">
                      Before first use on site, then every 3&nbsp;months
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">
                      Construction / Site Work (230&nbsp;V)
                    </td>
                    <td data-label="Equipment">
                      230&nbsp;V portable tools &amp; leads
                    </td>
                    <td data-label="Formal Visual Inspection">Weekly</td>
                    <td data-label="Combined Inspection &amp; Test">
                      Before first use on site, then monthly
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">
                      Construction / Site Offices
                    </td>
                    <td data-label="Equipment">
                      Office equipment used on site
                    </td>
                    <td data-label="Formal Visual Inspection">6-monthly</td>
                    <td data-label="Combined Inspection &amp; Test">
                      Before first use on site, then yearly
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">RCDs (On Site)</td>
                    <td data-label="Equipment">
                      Fixed &amp; portable RCD protection
                    </td>
                    <td data-label="Formal Visual Inspection">
                      Weekly (fixed); Monthly (portable)
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      Before first use on site, then 3-monthly (portable RCDs:
                      monthly user test)
                    </td>
                  </tr>

                  <tr>
                    <td data-label="Environment">Offices (Low-Risk)</td>
                    <td data-label="Equipment">
                      IT rarely moved (desktops, photocopiers, fax)
                    </td>
                    <td data-label="Formal Visual Inspection">
                      2–4&nbsp;years
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      None if Class&nbsp;II; otherwise up to 5&nbsp;years
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">Low-Risk Commercial</td>
                    <td data-label="Equipment">Extension leads / adaptors</td>
                    <td data-label="Formal Visual Inspection">
                      6&nbsp;months–4&nbsp;years (risk-based)
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      1–5&nbsp;years (risk-based)
                    </td>
                  </tr>

                  <tr>
                    <td data-label="Environment">
                      General (Clean / Dry Areas)
                    </td>
                    <td data-label="Equipment">
                      Double-insulated (Class&nbsp;II) moved occasionally (not
                      hand-held)
                    </td>
                    <td data-label="Formal Visual Inspection">
                      2–4&nbsp;years
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      Not normally required
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">General (Higher Use)</td>
                    <td data-label="Equipment">
                      Hand-held Class&nbsp;II (some floor cleaners / kitchen
                      items)
                    </td>
                    <td data-label="Formal Visual Inspection">
                      6–12&nbsp;months
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      Not normally required
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">General (Higher Risk)</td>
                    <td data-label="Equipment">
                      Earthed Class&nbsp;I (eg kettles, some floor cleaners)
                    </td>
                    <td data-label="Formal Visual Inspection">
                      6–12&nbsp;months
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      1–2&nbsp;years
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Environment">All Areas</td>
                    <td data-label="Equipment">
                      Cables, leads, plugs, battery chargers
                    </td>
                    <td data-label="Formal Visual Inspection">
                      6&nbsp;months–4&nbsp;years (depends on use)
                    </td>
                    <td data-label="Combined Inspection &amp; Test">
                      1–5&nbsp;years (depends on connected equipment)
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
            <h2 className="ev-h2">Sectors We Support</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {/* Left Column: Cards in 2 Columns */}
              <div
                style={{
                  flex: "2 1 300px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {[
                  [
                    "Offices & Co-Working",
                    "Desk equipment, kitchens, meeting rooms",
                  ],
                  ["Retail & Hospitality", "POS, back-of-house, guest areas"],
                  ["Education", "Classrooms, labs, IT suites, halls"],
                  [
                    "Healthcare & Care",
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
                      border: "1px solid var(--ev-border)",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "#fff",
                      boxShadow: "0 2px 6px rgba(4,30,50,0.08)",
                    }}
                  >
                    <p style={{ fontWeight: 600, marginBottom: 8 }}>{t}</p>
                    <p style={{ margin: 0 }}>{d}</p>
                  </div>
                ))}
              </div>

              {/* Right Column: Image */}
              <div
                style={{
                  flex: "1 1 250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dug1siluu/image/upload/v1757617505/ChatGPT_Image_Sep_12_2025_12_04_49_AM_vidu8z.png"
                  }
                  alt="Sector illustration"
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 8,
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES + FORM */}
        <section className="ev-section ev-section--soft">
          <div className="ev-container">
            <h2 className="ev-h2">What You Get</h2>
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
            <h2 className="ev-h2">Transparent Pricing (No VAT)</h2>
            <p className="ev-body ev-mt-8">
              Aligned with London norms — clear packages that protect small jobs
              and reward larger sites. Out-of-hours: +20%.
            </p>

            <div className="ev-grid ev-grid--3 ev-gap-16 ev-mt-16">
              <div className="ev-card">
                <p className="ev-strong">Small Sites</p>
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
                  Book This Package
                </a>
              </div>

              <div className="ev-card ev-card--accent">
                <p className="ev-strong">Growing Teams</p>
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
                  Get Tailored Quote
                </a>
              </div>

              <div className="ev-card">
                <p className="ev-strong">Large & Multi-Site</p>
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
                  Speak To Us
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
              <h2 className="ev-h2">See Exactly What You’ll Receive</h2>
              <p className="ev-body ev-mt-8">
                Preview a redacted sample certificate and a results file to
                share with stakeholders.
              </p>

              <div className="ev-actions ev-mt-16">
                <a
                  href="/sample.pdf"
                  className="ev-btn ev-btn--primary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download Sample PDF
                </a>
                <a
                  href="/sample.csv"
                  className="ev-btn ev-btn--primary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download Sample CSV
                </a>
              </div>

              <br />

              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                  gap: "60px",
                  width: "100%",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757602608/ChatGPT_Image_Sep_11_2025_07_56_32_PM_afleph.png"
                  alt="Sample PAT testing results"
                  loading="lazy"
                  style={{
                    flex: 1,
                    height: "400px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757601945/ChatGPT_Image_Sep_11_2025_07_41_31_PM_fzya3v.png"
                  alt="Sample PAT testing certificate"
                  loading="lazy"
                  style={{
                    flex: 1,
                    height: "400px",
                    objectFit: "contain",
                    width: "100%",
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
                Serving Greater London And Surrounding Areas
              </h2>
              <p className="ev-body ev-mt-8">
                All 32 London boroughs and the City of London, plus regular
                routes to nearby towns in Hertfordshire, Essex, Surrey,
                Berkshire and Kent.
              </p>
              <div className="ev-actions ev-mt-16">
                <a href="/areas-we-cover" className="ev-btn ev-btn--primary">
                  Check Coverage
                </a>
                <a href="/contact" className="ev-btn ev-btn--primary">
                  Book Now
                </a>
              </div>
              <br />
              <div className="ev-card">
                <p className="ev-strong">Method Statements & RAMS</p>
                <p>
                  Provided on request. We can complete inductions and work under
                  permits to work.
                </p>
              </div>
            </div>

            <div className="ev-col ev-col--5">
              <div
                style={{
                  flex: "1 1 340px",
                  minWidth: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/dug1siluu/image/upload/v1757617738/ChatGPT_Image_Sep_12_2025_12_08_49_AM_dwwdn9.png"
                  }
                  alt="PAT testing in action"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 14,
                    boxShadow: "0 8px 24px rgba(4,30,50,0.15)",
                    background: "#fff",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="ev-section">
          <div className="ev-container">
            <h2 className="ev-h2">Compliance & Standards</h2>
            <div className="ev-grid ev-grid--2 ev-gap-16 ev-mt-16">
              <div className="ev-card">
                <p className="ev-strong">Legal Position (Summary)</p>
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
                <p className="ev-strong">We Align To</p>
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

                <p className="ev-strong ev-mt-16">Insurance & Deliverables</p>
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
        <section className="ev-section ev-section--soft" id="faqs">
          <div className="ev-container">
            <h2 className="ev-h2">PAT Testing FAQs</h2>
            <div className="ev-grid ev-grid--2 ev-gap-16 ev-mt-16">
              {[
                [
                  "Is PAT Testing A Legal Requirement?",
                  "PAT itself is not specifically named in law for workplaces, but the Electricity at Work Regulations 1989 require electrical equipment to be maintained to prevent danger. PAT provides recognised evidence that equipment is safe to use. Scottish private landlords must include PAT as part of their electrical safety inspection.",
                ],
                [
                  "How Often Should I Retest?",
                  "Intervals are risk-based: environment, equipment class, usage, user competence and history. Typical ranges are 3–48 months. We’ll agree an appropriate schedule during your survey.",
                ],
                [
                  "Will Testing Disrupt Our Work?",
                  "We plan around your operations, including early, late or weekend visits. Testing per item usually takes a few minutes; we coordinate floor-by-floor to minimise downtime.",
                ],
                [
                  "Do You Provide Certificates And An Asset List?",
                  "Yes. You’ll receive a PDF certificate and a detailed results file with asset IDs, locations and outcomes. We can also supply CSVs for your CAFM/asset system.",
                ],
                [
                  "What Happens If Something Fails?",
                  "We’ll label it as unsafe, remove it from service (with your permission), attempt minor repairs on the spot, and provide clear next steps.",
                ],
                [
                  "Which Standards Do You Follow?",
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
              Ready For Safe, Compliant Appliances?
            </h2>
            <p className="ev-cta__sub">
              Book Eco Voltex for professional PAT testing with clear reports
              and practical advice.
            </p>
            <div className="ev-actions ev-actions--center ev-mt-16">
              <a href="/contact" className="ev-btn ev-btn--light">
                Get A Quote
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
                  name: "Is PAT Testing A Legal Requirement?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PAT itself is not specifically named in law for workplaces, but the Electricity at Work Regulations 1989 require electrical equipment to be maintained to prevent danger. PAT provides recognised evidence. Scottish private landlords must include PAT as part of their electrical safety inspection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How Often Should I PAT Test?",
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
