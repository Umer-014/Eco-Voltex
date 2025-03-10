import React from "react";
import "./PAT.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const PAT = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // No replace, so the path will be added to the history stack
  };
  return (
    <>
      <Header />
      <div className="PAT-service-container">
        <div className="PAT-hero-section">
          <h1>PAT Testing</h1>
          <h2 className="PAT-subtitle">
            Legally Compliant Testing for Appliances & Equipment
          </h2>
        </div>

        <section className="PAT-what-we-do">
          <h3>What We Do</h3>
          <div className="PAT-work-scope">
            <div className="PAT-work-category">
              <h4>Visual Inspections</h4>
              <ul>
                <li>Check for damage (cracks, frayed wires, loose plugs).</li>
                <li>Verify correct fuse ratings and secure cable grips.</li>
              </ul>
            </div>

            <div className="PAT-work-category">
              <h4>Electrical Tests</h4>
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

            <div className="PAT-work-category">
              <h4>Labelling & Reporting</h4>
              <ul>
                <li>Passed appliances receive a dated PAT sticker.</li>
                <li>Failed items are tagged and quarantined.</li>
                <li>Digital certificate for audits (stored for 5+ years).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="PAT-essential">
          <h3>Why It’s Essential</h3>

          <div className="PAT-legal">
            <h4>Legal Requirements:</h4>
            <p>
              PAT testing is mandatory under the{" "}
              <strong>UK Health and Safety at Work Act (1974)</strong>.
            </p>
            <p>
              Landlords must test all portable appliances in rental properties
              under the <strong>Electrical Safety Standards (2020)</strong>.
            </p>
          </div>

          <div className="PAT-testing-guide">
            <h4>Testing Frequency Guide:</h4>
            <table className="PAT-testing-table">
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
          </div>
        </section>

        <section className="PAT-how-it-works">
          <h3>How It Works in 3 Easy Steps:</h3>
          <div className="PAT-steps">
            <div className="PAT-step">
              <strong>1. Book Online</strong>
            </div>
            <div className="PAT-step">
              <strong>2. We Test & Tag</strong>
            </div>
            <div className="PAT-step">
              <strong>3. Get Compliant</strong>
            </div>
          </div>
        </section>

        <section className="PAT-upgrade-section">
          <h3>Ready to Upgrade?</h3>
          <div className="PAT-upgrade-content">
            <h4 className="PAT-red-flags">
              Experiencing these issues? If you see any of the problems below,
              then book us!
            </h4>
            <ul className="PAT-red-flags-list">
              <li>Burning smells from plugs.</li>
              <li>Lights that dim when you turn on appliances.</li>
              <li>Plugs/wires that feel warm.</li>
            </ul>
            <button
              className="PAT-book-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Now - Secure Your Home Today!
            </button>
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

export default PAT;
