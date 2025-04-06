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
        <section className="cctv-action-steps">
          <h2>What You Get With Us</h2>

          <div className="cctv-action-grid">
            {/* Before Installation */}
            <div className="cctv-action-card">
              <h3>Before Installation</h3>
              <ul>
                <li>
                  <strong>On-Site Survey:</strong> We visit your location to
                  assess coverage, lighting, and camera placement.
                </li>
                <li>
                  <strong>Customized Planning:</strong> We design a tailored
                  CCTV solution based on your specific needs.
                </li>
                <li>
                  <strong>Wiring & Power Check:</strong> We evaluate existing
                  wiring and power sources for smooth integration.
                </li>
                <li>
                  <strong>Privacy & Legal Advice:</strong> We guide you on GDPR
                  compliance and proper signage placement.
                </li>
              </ul>
            </div>

            {/* After Installation */}
            <div className="cctv-action-card">
              <h3>After Installation</h3>
              <ul>
                <li>
                  <strong>Full System Setup:</strong> Cameras, NVR/DVR, PoE, and
                  app integration — all configured & tested.
                </li>
                <li>
                  <strong>Live Monitoring Access:</strong> Get remote access via
                  smartphone or PC from anywhere, anytime.
                </li>
                <li>
                  <strong>Customer Training:</strong> We teach you how to use
                  your system, playback footage, and manage alerts.
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Fast tech support and
                  optional maintenance plans for peace of mind.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cctv-upgrade-section">
          <h3>Time to Upgrade Your CCTV System?</h3>
          <div className="cctv-upgrade-content">
            <h4 className="cctv-red-flags">
              Experiencing These CCTV Issues? Let’s Fix Them!
            </h4>
            <ul className="cctv-red-flags-list">
              <li>Blurry or Outdated Footage</li>
              <li>Frequent System Freezes</li>
              <li>Broken or Exposed Wiring</li>
              <li>No Night Vision</li>
              <li>Camera Not Recording</li>
              <li>Unstable Connection</li>
              <li>Outdated DVR/NVR</li>
              <li>No Remote Access</li>
              <li>Low Storage Capacity</li>
              <li>Physical Damage to Cameras</li>
            </ul>
            <button
              className="cctv-book-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Now – Secure Your Property Today!
            </button>
          </div>
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
