import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./FireAlarms.css";
import { useNavigate } from "react-router-dom";

const FireAlarms = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // No replace, so the path will be added to the history stack
  };
  return (
    <>
      <Header />
      <div className="service-container">
        <header className="service-header">
          <h1>Fire Alarm Systems</h1>
          <h2>Your First Line of Defense Against Fire Hazards</h2>
        </header>

        <section className="service-intro">
          <h3>🔥 The Reality:</h3>
          <ul>
            <li>
              UK fires cause <strong>£1.3 billion</strong> in damages annually
              (Home Office Report).
            </li>
            <li>
              80% of fire-related deaths occur in properties{" "}
              <strong>without working alarms</strong>.
            </li>
          </ul>

          <h3>🔥 Our Promise:</h3>
          <ul>
            <li>
              <strong>Tailored Protection:</strong> Systems designed for your
              property size, layout, and risks.
            </li>
            <li>
              <strong>Zero Compromise:</strong> Full compliance with UK law and
              insurance requirements.
            </li>
          </ul>
        </section>

        <section className="steps">
          <h2>How Our Fire Alarm Systems Work</h2>

          <div className="step">
            <h3>Step 1: Risk Assessment</h3>
            <ul>
              <li>
                We identify fire hazards (e.g., kitchens, electrical rooms,
                storage areas).
              </li>
              <li>Recommend detector types:</li>
              <ul>
                <li>
                  🔥 <strong>Smoke Detectors:</strong> Early warnings in
                  offices, corridors.
                </li>
                <li>
                  🔥 <strong>Heat Detectors:</strong> Ideal for kitchens,
                  garages (ignores cooking fumes).
                </li>
                <li>
                  🔥 <strong>CO Detectors:</strong> Essential for boiler rooms
                  or gas-powered spaces.
                </li>
              </ul>
            </ul>
          </div>

          <div className="step">
            <h3>Step 2: System Design</h3>
            <ul>
              <li>
                📍 <strong>Conventional Systems:</strong> Best for small shops,
                cafes, or apartments.
              </li>
              <li>
                📍 <strong>Addressable Systems:</strong> Pinpoint device
                locations (ideal for large buildings).
              </li>
              <li>
                📍 <strong>Wireless Systems:</strong> No messy cables, encrypted
                signals, quick retrofits.
              </li>
            </ul>
          </div>

          <div className="step">
            <h3>Step 3: Installation & Testing</h3>
            <ul>
              <li>
                🔧 <strong>Discreet Placement:</strong> Alarms installed in
                ceilings or walls.
              </li>
              <li>
                🔊 <strong>Sound Testing:</strong> Alarms reach 65dB+ in all
                rooms.
              </li>
              <li>
                💡 <strong>Emergency Lighting:</strong> Ensures safe exit during
                power failure.
              </li>
            </ul>
          </div>

          <div className="step">
            <h3>Step 4: 24/7 Monitoring & Maintenance</h3>
            <ul>
              <li>
                🔄 <strong>Annual Maintenance:</strong> Sensor cleaning, battery
                checks, software updates.
              </li>
              <li>
                🚨 <strong>Emergency Repairs:</strong> Faulty detectors replaced
                within 4 hours.
              </li>
            </ul>
          </div>
        </section>

        <section className="booking-info">
          <h2>🔧 What Action Do You Need to Take?</h2>
          <p>Before we begin, please ensure:</p>
          <ul>
            <li>
              🔹 We have access to all areas (attics, basements, server rooms).
            </li>
            <li>🔹 Floor plans are available to streamline design.</li>
            <li>
              🔹 High-risk zones (e.g., kitchens, electrical rooms) are noted.
            </li>
            <li>🔹 Power outlets are accessible for control panels.</li>
          </ul>

          <h3>🔥 Critical Stats:</h3>
          <ul>
            <li>
              📉 <strong>60%</strong> of UK businesses never recover after a
              major fire.
            </li>
            <li>
              ⚡ Interlinked alarms reduce evacuation time by{" "}
              <strong>50%</strong>.
            </li>
          </ul>
        </section>

        <section className="cta">
          <h2>📞 Don’t Risk Fines or Fires!</h2>
          <p>
            👉 <strong>Get Your Free Fire Safety Audit Today!</strong>
          </p>
          <button className="cta-button" onClick={() => navigateTo("/contact")}>
            Schedule Free Risk Assessment →
          </button>
        </section>

        <section className="faqs">
          <h2>FAQs: Demystifying Fire Alarms</h2>
          <div className="faq">
            <h4>❓ "How often should fire alarms be tested?"</h4>
            <p>
              ✅ "Test weekly using the ‘test button.’ Full system checks are
              done annually."
            </p>
          </div>
          <div className="faq">
            <h4>❓ "Can I silence a false alarm?"</h4>
            <p>
              ✅ "Yes—modern systems have ‘hush buttons’ and multi-sensor
              technology to reduce false triggers."
            </p>
          </div>
          <div className="faq">
            <h4>❓ "What’s the lifespan of a fire alarm?"</h4>
            <p>
              ✅ "Detectors last 10 years, and batteries should be replaced
              every 1–2 years."
            </p>
          </div>
          <div className="faq">
            <h4>❓ "Do landlords need fire alarms?"</h4>
            <p>
              ✅ "Yes—rental properties require interlinked alarms in living
              areas and kitchens (by law)."
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FireAlarms;
