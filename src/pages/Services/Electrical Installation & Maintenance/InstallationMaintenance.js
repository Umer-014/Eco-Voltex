import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./InstallationMaintenance.css";
import { useNavigate } from "react-router-dom";

const InstallationMaintenance = () => {

      const navigate = useNavigate();
    
      const navigateTo = (path) => {
        navigate(path); // No replace, so the path will be added to the history stack
      };
    

  return (
    <>
      <Header />
    <div className="service-container">
      <h1>Electrical Installation & Maintenance</h1>
      <h2 className="subtitle">Safe, Efficient Power Solutions for Homes & Businesses</h2>

      <section className="section">
        <h3>What We Do</h3>
        <div className="work-scope">
          <div className="work-category">
            <h4>✅ Installations:</h4>
            <ul>
              <li>Full wiring for new builds, extensions, or renovations.</li>
              <li>Consumer unit (fuse box) installation and upgrades.</li>
              <li>Lighting circuits, sockets, switches, and EV charger setups.</li>
            </ul>
          </div>

          <div className="work-category">
            <h4>✅ Upgrades:</h4>
            <ul>
              <li>Rewiring outdated systems (e.g., fabric-insulated or rubber wiring).</li>
              <li>Surge protection installation to safeguard appliances.</li>
              <li>Fuse box replacements (e.g., upgrading to modern RCBOs).</li>
            </ul>
          </div>

          <div className="work-category">
            <h4>✅ Maintenance:</h4>
            <ul>
              <li>Fault diagnosis (tracing shorts, flickering lights, tripping circuits).</li>
              <li>Emergency repairs for power outages or electrical hazards.</li>
              <li>Landlord safety inspections (EICR certificates).</li>
            </ul>
          </div>

          <div className="work-category">
            <h4>✅ Specialist Services:</h4>
            <ul>
              <li>Outdoor lighting (garden, security, or decorative).</li>
              <li>Data cabling for offices or smart home networks.</li>
              <li>Smart home integration (lighting, thermostats, audio systems).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Why Choose Us</h3>
        <div className="step-process">
          <div className="step">
            <h4>🔍 Consultation</h4>
            <p>Free on-site survey to assess your electrical needs and risks.</p>
            <p>Discussion of timelines, budgets, and compliance requirements.</p>
          </div>

          <div className="step">
            <h4>💰 Quote</h4>
            <p>Transparent pricing with no hidden fees (labor, materials).</p>
          </div>

          <div className="step">
            <h4>⚡ Installation</h4>
            <p>Certified technicians work with minimal disruption.</p>
            <p>Use of high-quality materials (e.g., Hager consumer units, MK sockets).</p>
          </div>

          <div className="step">
            <h4>🛠️ Testing</h4>
            <p>Full compliance with BS 7671 (18th Edition Wiring Regulations).</p>
            <p>Earth fault loop impedance, polarity, and RCD testing.</p>
          </div>

          <div className="step">
            <h4>📜 Handover</h4>
            <p>Electrical Installation Certificate (EIC) or Minor Works Certificate provided.</p>
            <p>Debris removed, and system operation explained.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>🛎 Ready to Upgrade?</h3>
        <div className="upgrade-section">
          <h4>🔍 Spot These Red Flags?</h4>
          <ul>
            <li>Burning smells from sockets.</li>
            <li>Breakers that trip daily.</li>
            <li>Plugs that feel hot to touch.</li>
          </ul>

          <p className="fix-it">👉 <strong>Let’s Fix It Together!</strong></p>
          <button className="book-button" onClick={() => navigateTo("/contact")}>Book Your Free Electrical Health Check</button>
          <p className="includes">Includes a safety report + priority booking!</p>

          <h4>💡 Did You Know?</h4>
          <p>
            Old wiring (pre-1960s) causes <strong>30% of UK house fires</strong>.
            Modern systems aren’t just safer—they’ll lower your energy bills too!
          </p>
        </div>
      </section>

      <section className="section">
        <h3>FAQs</h3>
        <div className="faq">
          <h4>❓ What does BS 7671 compliance mean?</h4>
          <p>It ensures your system meets the UK’s latest safety standards, reducing fire and shock risks.</p>

          <h4>❓ Do I need to rewire my old house?</h4>
          <p>If your wiring is over 30 years old or shows signs of damage (e.g., flickering lights), rewiring is recommended.</p>

          <h4>❓ What’s included in an EICR report?</h4>
          <p>A detailed inspection of circuits, safety tests, and a pass/fail certificate for landlords or insurers.</p>
        </div>
      </section>
    </div>
    <Footer />
        </>
  );
};

export default InstallationMaintenance;
