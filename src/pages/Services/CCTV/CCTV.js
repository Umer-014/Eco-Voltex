import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./CCTV.css";
import { useNavigate } from "react-router-dom";

const CCTV = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Navigates to the given path
  };
  return (
    <div>
      <Header />

      <div className="CCTV-service-container">
        {/* Hero Section */}
        <div className="CCTV-hero-section">
          <h1 className="h1">CCTV Security</h1>
          <p className="CCTV-subtitle">
            Protect what matters most with smart CCTV solutions that deter crime
            and ensure peace of mind.
          </p>
        </div>

        

        {/* What We Do Section */}
        <section className="cctv-what-we-do">
          <h2>What We Do</h2>

          <div className="cctv-card-container">
            <div className="cctv-card">
              <h3> Camera Installation & Setup</h3>
              <ul>
                <li>
                  <strong>Seamless Camera Installation</strong>
                </li>
                <li>
                  <strong>Professional Wiring & Configuration</strong>
                </li>
                <li>
                  <strong>Power Over Ethernet (PoE) Integration</strong>
                </li>
              </ul>
            </div>

            <div className="cctv-card">
              <h3> NVR/DVR Setup & Integration</h3>
              <ul>
                <li>
                  <strong>Advanced NVR Systems</strong>
                </li>
                <li>
                  <strong>Reliable DVR Solutions</strong>
                </li>
                <li>
                  <strong>Comprehensive System Integration</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="cctv-card-container">
            <div className="cctv-card">
              <h3> Maintenance & Support</h3>
              <ul>
                <li>
                  <strong>Continuous Maintenance</strong>
                </li>
                <li>
                  <strong>Instant Technical Support</strong>
                </li>
              </ul>
            </div>

            <div className="cctv-card">
              <h3> Security Solutions</h3>
              <ul>
                <li>
                  <strong>Personalized Security Design</strong>
                </li>
                <li>
                  <strong>Remote Monitoring</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="cctv-why-choose">
          <h2>Why Choose Our CCTV Systems?</h2>
          <ul>
            <li>
              <strong>Crime Deterrence</strong>
            </li>
            <li>
              <strong>Remote Monitoring</strong>
            </li>
            <li>
              <strong>Legal Compliance</strong>
            </li>
            <li>
              <strong>Future-Proof Tech</strong>
            </li>
          </ul>
        </section>

        {/* What Action to Take */}
        <section className="action-steps">
          <h2>What Action Do You Need to Take?</h2>

          <h3>Before Installation:</h3>
          <ul>
            <li>
              📍 <strong>Site Survey:</strong> Walk your property to identify
              blind spots.
            </li>
            <li>
              📶 <strong>Internet Setup:</strong> Ensure stable Wi-Fi for cloud
              storage and remote access.
            </li>
            <li>
              ⚖ <strong>Legal Compliance:</strong> Review GDPR rules for CCTV
              signage in public areas.
            </li>
          </ul>

          <h3>Did You Know?</h3>
          <ul>
            <li>
              💰 <strong>Insurance Savings:</strong> Certified CCTV systems can
              reduce business insurance premiums by 15–20%.
            </li>
            <li>
              📼 <strong>Remote Evidence:</strong> Footage can resolve disputes
              (e.g., accidents, theft) in minutes.
            </li>
          </ul>
        </section>

        {/* Booking Checklist */}
        <section className="booking-checklist">
          <h2>Booking Checklist</h2>
          <h3>✅ Prepare for Installation:</h3>
          <ul>
            <li>Sketch your property layout.</li>
            <li>Note high-risk zones (e.g., entrances, cash registers).</li>
            <li>Confirm power outlets and Wi-Fi access.</li>
          </ul>

          <h3>✅ Post-Installation Steps:</h3>
          <ul>
            <li>Test remote access via the app.</li>
            <li>Train staff on basic controls (e.g., playback, alerts).</li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <section className="cta-buttons">
          <button className="cta-button" onClick={() => navigateTo("/contact")}>
            📅 Schedule Your Free Consultation
          </button>
          <button
            className="cta-button"
            onClick={() => navigateTo("/services")}
          >
            🔍 Explore More Security Solutions
          </button>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>FAQs: Answering Your Concerns</h2>

          <h3>Q: Can CCTV work without Wi-Fi?</h3>
          <p>
            A: Yes! We offer 4G-enabled cameras and offline recording options.
          </p>

          <h3>Q: What if someone damages the camera?</h3>
          <p>A: Tamper-proof cameras trigger alerts and keep recording.</p>

          <h3>Q: How long is footage stored?</h3>
          <p>A: On-site: 30–90 days. Cloud: 30 days (extendable).</p>

          <h3>Q: Are wireless systems secure?</h3>
          <p>
            A: Yes—dual-frequency signals and anti-jamming tech prevent hacking.
          </p>

          <h3>Q: Can I view multiple locations at once?</h3>
          <p>
            A: Yes! Our app supports multi-site monitoring on one dashboard.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CCTV;
