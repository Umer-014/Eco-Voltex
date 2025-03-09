import React from "react";
import "./Service2.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

const Service2 = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // No replace, so the path will be added to the history stack
  };
  return (
    <>
      <Header />
      <div className="service-container">
        <h1>PAT Testing</h1>
        <h2 className="subtitle">
          Legally Compliant Testing for Appliances & Equipment
        </h2>

        <section className="section">
          <h3>What We Do</h3>
          <div className="service-details">
            <div className="service-item">
              <h4>✅ Visual Inspections:</h4>
              <ul>
                <li>Check for damage (cracks, frayed wires, loose plugs).</li>
                <li>Verify correct fuse ratings and secure cable grips.</li>
              </ul>
            </div>

            <div className="service-item">
              <h4>✅ Electrical Tests:</h4>
              <ul>
                <li>
                  <strong>Earth Continuity:</strong> Ensures appliances are
                  grounded.
                </li>
                <li>
                  <strong>Insulation Resistance:</strong> Detects current leaks.
                </li>
                <li>
                  <strong>Lead Polarity:</strong> Confirms live/neutral wires
                  are correctly connected.
                </li>
              </ul>
            </div>

            <div className="service-item">
              <h4>✅ Labelling & Reporting:</h4>
              <ul>
                <li>Passed appliances receive a dated PAT sticker.</li>
                <li>Failed items are tagged and quarantined.</li>
                <li>Digital certificate for audits (stored for 5+ years).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Why It’s Essential</h3>
          <h4>Legal Requirements:</h4>
          <p>
            PAT testing is mandatory under the{" "}
            <strong>UK Health and Safety at Work Act (1974)</strong>.
          </p>
          <p>
            Landlords must test all portable appliances in rental properties
            under the <strong>Electrical Safety Standards (2020)</strong>.
          </p>

          <h4>Testing Frequency Guide:</h4>
          <table className="testing-table">
            <thead>
              <tr>
                <th>Environment</th>
                <th>Testing Interval</th>
                <th>High-Risk Appliances</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Offices/Shops</td>
                <td>12–24 months</td>
                <td>Kettles, heaters, printers</td>
              </tr>
              <tr>
                <td>Construction Sites</td>
                <td>3–6 months</td>
                <td>Power tools, extension leads</td>
              </tr>
              <tr>
                <td>Schools/Hospitals</td>
                <td>6–12 months</td>
                <td>Medical devices, IT equipment</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h3>✅ How It Works in 3 Easy Steps:</h3>
          <ul className="steps">
            <li>
              <strong>1. Book Online –</strong> Pick a date (same-day slots
              available!).
            </li>
            <li>
              <strong>2. We Test & Tag –</strong> Minimal disruption; we’ll work
              around you.
            </li>
            <li>
              <strong>3. Get Compliant –</strong> Download your certificate
              instantly.
            </li>
          </ul>
        </section>

        <section className="section">
          <h3>🛎 Ready to Upgrade?</h3>
          <div className="upgrade-section">
            <h4>🔍 Spot These Red Flags?</h4>
            <ul>
              <li>Burning smells from plugs.</li>
              <li>Lights that dim when you turn on appliances.</li>
              <li>Plugs/wires that feel warm.</li>
            </ul>

            <p className="fix-it">
              👉 <strong>Let’s Fix It Together!</strong>
            </p>
            <button
              className="book-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Your PAT Testing Today or get Free Quote!
            </button>
            <br></br>

            <h3>💡 Did You Know?</h3>
            <p>
              PAT testing takes less time than a coffee break per appliance. For
              a small office (20 devices), you’re fully compliant in under 2
              hours!
            </p>
          </div>
        </section>

        <section className="section">
          <h3>FAQs</h3>
          <div className="faq">
            <h4>❓ How long does a PAT test take?</h4>
            <p>
              Approximately 5–10 minutes per appliance. A typical office (50
              appliances) takes 2–3 hours.
            </p>

            <h4>❓ Do you test fixed appliances (e.g., ovens, AC units)?</h4>
            <p>
              No—PAT testing covers portable devices only. Fixed appliances
              require a separate Electrical Installation Condition Report
              (EICR).
            </p>

            <h4>❓ Can I test appliances myself?</h4>
            <p>
              Only if you’re a ‘competent person’ under HSE guidelines. Improper
              testing can void insurance.
            </p>

            <h4>❓ What happens if an appliance fails?</h4>
            <p>
              We’ll disconnect it, provide a failure report, and recommend
              repairs or replacements.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Service2;
