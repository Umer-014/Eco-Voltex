import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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

      {/* Hero Section */}
      <section className="hero">
        <h1>CCTV & Security Systems</h1>
        <p>24/7 Surveillance to Protect Your People, Property, and Peace of Mind</p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Our CCTV Systems?</h2>
        <ul>
          <li>✅ <strong>Crime Deterrence:</strong> Visible cameras reduce burglary risk by 50% (UK Crime Statistics).</li>
          <li>✅ <strong>Remote Monitoring:</strong> Watch live footage on your phone, tablet, or PC—anytime, anywhere.</li>
          <li>✅ <strong>Legal Compliance:</strong> GDPR-compliant systems with signage, encryption, and data protection.</li>
          <li>✅ <strong>Future-Proof Tech:</strong> Upgrade with AI analytics, facial recognition, or thermal imaging.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works: Your Custom Security Ecosystem</h2>

        <h3>1. Camera Types for Every Need</h3>
        <ul>
          <li><strong>Dome Cameras:</strong> Discreet, vandal-proof design. Ideal for shops, reception areas, offices.</li>
          <li><strong>Bullet Cameras:</strong> Long-range, weatherproof (IP67-rated). Ideal for car parks, warehouses.</li>
          <li><strong>PTZ Cameras:</strong> Remote-controlled to track movement. Best for large sites, construction yards.</li>
          <li><strong>Covert Cameras:</strong> Hidden in clocks, smoke detectors, signage. Great for high-risk zones.</li>
        </ul>

        <h3>2. Advanced Features</h3>
        <ul>
          <li>🎥 <strong>4K Ultra-HD Resolution:</strong> Capture license plates or faces up to 25 meters away.</li>
          <li>🌙 <strong>Night Vision:</strong> Infrared LEDs for clear footage in total darkness (up to 30m range).</li>
          <li>🤖 <strong>AI-Powered Analytics:</strong> Detect loitering, abandoned objects, unauthorized access. Ignores false alarms from animals or moving trees.</li>
        </ul>

        <h3>3. Storage & Access</h3>
        <ul>
          <li><strong>On-Site Storage:</strong> NVR/DVR systems with 1TB–8TB storage (30–90 days of footage).</li>
          <li><strong>Cloud Storage:</strong> GDPR-compliant, encrypted backups. Instant playback via smartphone app.</li>
        </ul>

        <h3>4. Access Control Integration</h3>
        <ul>
          <li>🔒 <strong>Smart Locks:</strong> Keyless entry via fingerprint, PIN, or smartphone.</li>
          <li>⏳ <strong>Time-Based Access:</strong> Restrict entry hours for cleaners, contractors, or staff.</li>
        </ul>
      </section>

      {/* What Action to Take */}
      <section className="action-steps">
        <h2>What Action Do You Need to Take?</h2>

        <h3>Before Installation:</h3>
        <ul>
          <li>📍 <strong>Site Survey:</strong> Walk your property to identify blind spots.</li>
          <li>📶 <strong>Internet Setup:</strong> Ensure stable Wi-Fi for cloud storage and remote access.</li>
          <li>⚖ <strong>Legal Compliance:</strong> Review GDPR rules for CCTV signage in public areas.</li>
        </ul>

        <h3>Did You Know?</h3>
        <ul>
          <li>💰 <strong>Insurance Savings:</strong> Certified CCTV systems can reduce business insurance premiums by 15–20%.</li>
          <li>📼 <strong>Remote Evidence:</strong> Footage can resolve disputes (e.g., accidents, theft) in minutes.</li>
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
        <button className="cta-button" onClick={() => navigateTo("/contact")}>📅 Schedule Your Free Consultation</button>
        <button className="cta-button" onClick={() => navigateTo("/services")}>🔍 Explore More Security Solutions</button>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>FAQs: Answering Your Concerns</h2>

        <h3>Q: Can CCTV work without Wi-Fi?</h3>
        <p>A: Yes! We offer 4G-enabled cameras and offline recording options.</p>

        <h3>Q: What if someone damages the camera?</h3>
        <p>A: Tamper-proof cameras trigger alerts and keep recording.</p>

        <h3>Q: How long is footage stored?</h3>
        <p>A: On-site: 30–90 days. Cloud: 30 days (extendable).</p>

        <h3>Q: Are wireless systems secure?</h3>
        <p>A: Yes—dual-frequency signals and anti-jamming tech prevent hacking.</p>

        <h3>Q: Can I view multiple locations at once?</h3>
        <p>A: Yes! Our app supports multi-site monitoring on one dashboard.</p>
      </section>

      <Footer />
    </div>
  );
};

export default CCTV;
