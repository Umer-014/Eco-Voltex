import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./CCTV.css";

const CCTVSecurity = () => {
  return (
    <>
      <Helmet>
        <title>Advanced CCTV Security Solutions in London | Eco Voltex</title>
        <meta
          name="description"
          content="Eco Voltex offers expert CCTV installation and maintenance in London, featuring the IPC-9800MOVTADHS for superior surveillance. Secure your property with our certified, reliable solutions."
        />
        <meta
          name="keywords"
          content="CCTV installation London, CCTV maintenance London, Eco Voltex, IPC-9800MOVTADHS, security camera systems, certified CCTV installers UK, smart surveillance"
        />
      </Helmet>

      <Header />
      <div className="service-container">
        {/* Hero Section */}
        <header className="service-hero">
          <div className="service-hero-overlay">
            <h1>Protect Your Property with Eco Voltex CCTV</h1>
            <p>Advanced Surveillance Powered by IPC-9800MOVTADHS</p>
          </div>
        </header>

        {/* Intro */}
        <section className="service-intro">
          <p>
            At <span className="highlight">Eco Voltex</span>, we deliver{" "}
            <strong>cutting-edge CCTV security solutions</strong> across London, featuring the{" "}
            <strong>IPC-9800MOVTADHS</strong> for unmatched clarity and smart monitoring. Our certified team ensures compliance with{" "}
            <strong>UK regulations</strong>, providing peace of mind for homes and businesses.
          </p>
        </section>

        {/* What We Do */}
        <section className="service-section what-we-do">
          <h2>Our CCTV Security Expertise</h2>
          <div className="what-we-do-text">
            <div className="what-we-do-block">
              <h3>Precision CCTV Installation</h3>
              <p>
                We install advanced CCTV systems, including the IPC-9800MOVTADHS, tailored to your property for comprehensive coverage and intelligent analytics.
              </p>
              <ul>
                <li>4K cameras with night vision and motion detection</li>
                <li>Smart systems with mobile app access</li>
                <li>Integration with existing security infrastructure</li>
              </ul>
            </div>
            <div className="what-we-do-block">
              <h3>Reliable Maintenance</h3>
              <p>
                Our maintenance services keep your CCTV systems at peak performance, with regular checks and rapid response to ensure uninterrupted protection.
              </p>
              <ul>
                <li>Camera cleaning and system diagnostics</li>
                <li>Software updates for enhanced cybersecurity</li>
                <li>24/7 support for urgent issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="service-section">
          <h2>Our CCTV Security Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Custom CCTV Installation</h3>
              <ul>
                <li>High-resolution cameras with advanced features</li>
                <li>Cloud and local storage for secure footage</li>
                <li>Real-time monitoring via mobile apps</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Maintenance & Upgrades</h3>
              <ul>
                <li>Regular system checks and optimization</li>
                <li>Upgrades to the latest surveillance technology</li>
                <li>Fast, reliable repairs and support</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Compliance & Security</h3>
              <ul>
                <li>GDPR-compliant data handling</li>
                <li>Secure encryption and access controls</li>
                <li>Expert consultation for regulatory compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="service-section why-choose-us">
          <h2>Why Choose Eco Voltex for CCTV?</h2>
          <ul className="why-list">
            <li>Advanced IPC-9800MOVTADHS for superior surveillance</li>
            <li>Certified experts with extensive CCTV experience</li>
            <li>Customized solutions for homes and businesses</li>
            <li>Full compliance with UK data and safety standards</li>
            <li>Trusted by London clients for reliability and innovation</li>
          </ul>
        </section>

        {/* Importance of CCTV */}
        <section className="service-section">
          <h2>Why CCTV Security Matters</h2>
          <p>
            A state-of-the-art CCTV system, like those powered by the IPC-9800MOVTADHS, deters crime, monitors activity, and provides critical evidence. Eco Voltex ensures your system is expertly installed and maintained for maximum security.
          </p>
        </section>

        {/* How We Work */}
        <section className="service-section service-process" aria-labelledby="how-we-work-title">
          <h2 id="how-we-work-title">Our CCTV Installation Process</h2>
          <ol className="service-process-steps" aria-label="Eco Voltex CCTV process">
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
                <p className="service-step-text">Custom CCTV solutions for optimal coverage.</p>
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
          <h2>Secure Your Property Today with Eco Voltex</h2>
          <p>Get expert CCTV solutions tailored to your needs in London and beyond.</p>
          <a href="/contact" className="service-cta-btn">Get a Free Quote Now</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CCTVSecurity;