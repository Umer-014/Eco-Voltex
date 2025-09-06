import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./FireAlarms.css";

const FireAlarms = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Fire Alarm Solutions in London | Eco Voltex</title>
        <meta
          name="description"
          content="Eco Voltex provides expert fire alarm installation and maintenance in London, featuring the Advanced FireGuard 5000 for superior safety. Ensure compliance and protection with our certified solutions."
        />
        <meta
          name="keywords"
          content="fire alarm installation London, fire alarm maintenance London, Eco Voltex, Advanced FireGuard 5000, fire safety systems, certified fire alarm installers UK, BS 5839 compliance"
        />
      </Helmet>

      <Header />
      <div className="service-container">
        {/* Hero Section */}
        <header className="service-hero">
          <div className="service-hero-overlay">
            <h1>Safeguard Your Property with Eco Voltex Fire Alarms</h1>
            <p>Advanced Fire Safety Powered by FireGuard 5000</p>
          </div>
        </header>

        {/* Intro */}
        <section className="service-intro">
          <p>
            At <span className="highlight">Eco Voltex</span>, we deliver{" "}
            <strong>state-of-the-art fire alarm solutions</strong> across London, featuring the{" "}
            <strong>Advanced FireGuard 5000</strong> for reliable detection and rapid response. Our certified team ensures compliance with{" "}
            <strong>BS 5839 standards</strong>, protecting homes and businesses with tailored safety systems.
          </p>
        </section>

        {/* What We Do */}
        <section className="service-section what-we-do">
          <h2>Our Fire Alarm Expertise</h2>
          <div className="what-we-do-text">
            <div className="what-we-do-block">
              <h3>Precision Fire Alarm Installation</h3>
              <p>
                We install advanced fire alarm systems, including the FireGuard 5000, customized to your property for optimal safety and early detection.
              </p>
              <ul>
                <li>High-sensitivity smoke and heat detectors</li>
                <li>Smart systems with remote monitoring capabilities</li>
                <li>Integration with existing safety infrastructure</li>
              </ul>
            </div>
            <div className="what-we-do-block">
              <h3>Reliable Maintenance</h3>
              <p>
                Our maintenance services ensure your fire alarms remain fully operational, with regular testing and prompt repairs for continuous protection.
              </p>
              <ul>
                <li>System testing and sensor calibration</li>
                <li>Software updates for enhanced reliability</li>
                <li>24/7 support for emergency issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="service-section">
          <h2>Our Fire Alarm Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Custom Fire Alarm Installation</h3>
              <ul>
                <li>Advanced detectors for smoke and heat</li>
                <li>Networked systems for large properties</li>
                <li>Remote alerts via mobile apps</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Maintenance & Upgrades</h3>
              <ul>
                <li>Routine system checks and testing</li>
                <li>Upgrades to the latest fire safety technology</li>
                <li>Fast response for repairs and troubleshooting</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Compliance & Safety</h3>
              <ul>
                <li>BS 5839-compliant system design</li>
                <li>Secure data and system management</li>
                <li>Consultation for regulatory compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="service-section why-choose-us">
          <h2>Why Choose Eco Voltex for Fire Alarms?</h2>
          <ul className="why-list">
            <li>Advanced FireGuard 5000 for superior fire detection</li>
            <li>Certified experts with extensive fire safety experience</li>
            <li>Customized solutions for residential and commercial properties</li>
            <li>Full compliance with UK fire safety standards</li>
            <li>Trusted by London clients for reliability and expertise</li>
          </ul>
        </section>

        {/* Importance of Fire Alarms */}
        <section className="service-section">
          <h2>Why Fire Alarms Are Essential</h2>
          <p>
            A modern fire alarm system, like the FireGuard 5000, ensures early detection, rapid response, and compliance with safety standards. Eco Voltex delivers expertly installed and maintained systems to protect lives and property.
          </p>
        </section>

        {/* How We Work */}
        <section className="service-section service-process" aria-labelledby="how-we-work-title">
          <h2 id="how-we-work-title">Our Fire Alarm Installation Process</h2>
          <ol className="service-process-steps" aria-label="Eco Voltex Fire Alarm process">
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>1</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Site Assessment</h3>
                <p className="service-step-text">Comprehensive survey and tailored quotation.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>2</div>
              <div className="service-step-body">
                <h3 className="service-step-title">System Design</h3>
                <p className="service-step-text">Custom fire alarm solutions for optimal coverage.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>3</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Expert Installation</h3>
                <p className="service-step-text">Professional setup with minimal disruption.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>4</div>
              <div className="service-step-body">
                <h3 className="service-step-title">System Testing</h3>
                <p className="service-step-text">Rigorous testing and client training.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>5</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Ongoing Support</h3>
                <p className="service-step-text">Maintenance and rapid response services.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Call To Action */}
        <section className="service-cta">
          <h2>Protect Lives and Property with Eco Voltex</h2>
          <p>Get expert fire alarm solutions tailored to your needs in London and beyond.</p>
          <a href="/contact" className="service-cta-btn">Get a Free Quote Now</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FireAlarms;