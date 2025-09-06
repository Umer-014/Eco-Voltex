import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./ElectricalServices.css";

const ElectricalServices = () => {
  return (
    <>
      <Helmet>
        <title>Expert Electrical Services in London | Eco Voltex</title>
        <meta
          name="description"
          content="Eco Voltex offers professional electrical installation and maintenance services in London and nearby areas. Certified, energy-efficient solutions for homes and businesses."
        />
        <meta
          name="keywords"
          content="electrical installation London, electrical maintenance London, Eco Voltex, certified electricians UK, energy-efficient electrical solutions"
        />
      </Helmet>

      <Header />
      <div className="service-container">
        {/* Hero Section */}
        <header className="service-hero">
          <div className="service-hero-overlay">
            <h1>Eco Voltex Electrical Services</h1>
            <p>
              Powering your home and business with safe, efficient solutions
            </p>
          </div>
        </header>

        {/* Intro */}
        <section className="service-intro">
          <p>
            At <span className="highlight">Eco Voltex</span>, we deliver{" "}
            <strong>expert electrical installation and maintenance</strong>{" "}
            across London. Our certified electricians ensure your systems are
            safe, efficient, and compliant with{" "}
            <strong>UK electrical standards</strong>.
          </p>
        </section>

        {/* What We Do */}
        <section className="service-section what-we-do">
          <h2>Our Electrical Expertise</h2>
          <div className="what-we-do-text">
            <div className="what-we-do-block">
              <h3>Electrical Installation</h3>
              <p>
                From new builds to renovations, we provide tailored electrical
                installations that prioritize safety and efficiency.
              </p>
              <ul>
                <li>Complete wiring for homes and commercial spaces</li>
                <li>Smart lighting and energy-efficient systems</li>
                <li>Custom power solutions for industrial sites</li>
              </ul>
            </div>
            <div className="what-we-do-block">
              <h3>Maintenance & Repairs</h3>
              <p>
                Our proactive maintenance plans keep your electrical systems
                reliable, minimizing downtime and ensuring safety.
              </p>
              <ul>
                <li>Regular inspections and compliance checks</li>
                <li>Fast fault diagnosis and repairs</li>
                <li>24/7 emergency electrical support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="service-section">
          <h2>Our Electrical Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Installation Solutions</h3>
              <ul>
                <li>New builds and full rewiring</li>
                <li>Smart home and office integrations</li>
                <li>Energy-efficient lighting design</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Maintenance Programs</h3>
              <ul>
                <li>Preventive maintenance schedules</li>
                <li>Safety inspections and testing</li>
                <li>Emergency repair services</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Safety & Compliance</h3>
              <ul>
                <li>EICR (Electrical Installation Condition Reports)</li>
                <li>Surge protection and grounding systems</li>
                <li>Full compliance with UK regulations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="service-section why-choose-us">
          <h2>Why Choose Eco Voltex?</h2>
          <ul className="why-list">
            <li>Certified electricians with extensive expertise</li>
            <li>Custom solutions for all property types</li>
            <li>Commitment to safety and regulatory compliance</li>
            <li>Energy-efficient designs to reduce costs</li>
            <li>Trusted across London for reliable service</li>
          </ul>
        </section>

        {/* Importance of Electrical Services */}
        <section className="service-section">
          <h2>Why Electrical Services Matter</h2>
          <p>
            Safe and efficient electrical systems are critical for your
            property’s functionality and safety. Eco Voltex ensures your
            installations and maintenance meet the highest standards, preventing
            hazards and optimizing performance.
          </p>
        </section>

        {/* How We Work */}
        <section
          className="service-section service-process"
          aria-labelledby="how-we-work-title"
        >
          <h2 id="how-we-work-title">Our Process</h2>
          <ol
            className="service-process-steps"
            aria-label="Eco Voltex electrical process"
          >
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>
                1
              </div>
              <div className="service-step-body">
                <h3 className="service-step-title">Site Assessment</h3>
                <p className="service-step-text">
                  Detailed consultation and transparent quotation.
                </p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>
                2
              </div>
              <div className="service-step-body">
                <h3 className="service-step-title">System Design</h3>
                <p className="service-step-text">
                  Customized electrical plans for your needs.
                </p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>
                3
              </div>
              <div className="service-step-body">
                <h3 className="service-step-title">
                  Professional Installation
                </h3>
                <p className="service-step-text">
                  Expert installation with minimal disruption.
                </p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>
                4
              </div>
              <div className="service-step-body">
                <h3 className="service-step-title">Testing & Certification</h3>
                <p className="service-step-text">
                  Thorough testing and compliance documentation.
                </p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>
                5
              </div>
              <div className="service-step-body">
                <h3 className="service-step-title">Ongoing Support</h3>
                <p className="service-step-text">
                  Maintenance plans and rapid response services.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Call To Action */}
        <section className="service-cta">
          <h2>Power Up with Eco Voltex</h2>
          <p>
            Contact us for expert electrical services across London and
            surrounding areas.
          </p>
          <a href="/contact" className="service-cta-btn">
            Request a Quote
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ElectricalServices;
