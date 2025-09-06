import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./ElectricalServices.css";

const ElectricalServices = () => {
  return (
    <>
      <Helmet>
        <title>
          Electrical Installation & Maintenance in London | Eco Voltex
        </title>
        <meta
          name="description"
          content="Eco Voltex provides professional electrical installation and maintenance services across London and nearby areas. Certified, reliable, and energy-efficient solutions for homes and businesses."
        />
        <meta
          name="keywords"
          content="Electrical installation London, electrical maintenance London, Eco Voltex, certified electricians UK, reliable electrical services"
        />
      </Helmet>

      <Header />
      <div className="electrical-container">
        {/* Hero Section */}
        <header className="electrical-hero">
          <div className="electrical-hero-overlay">
            <h1>Eco Voltex – Electrical Installation & Maintenance</h1>
            <p>
              Expert electrical services for homes, businesses, and industries
            </p>
          </div>
        </header>

        {/* Intro */}
        <section className="electrical-intro">
          <p>
            At <span className="highlight">Eco Voltex</span>, we deliver expert{" "}
            <strong>electrical installation and maintenance services</strong>{" "}
            for residential, commercial, and industrial clients across London.
            All of our work is carried out by certified professionals in line
            with <strong>UK electrical safety standards</strong>.
          </p>
        </section>

        {/* What We Do */}
        <section className="electrical-section what-we-do">
          <h2>What We Do</h2>

          <div className="what-we-do-text">
            <div className="what-we-do-block">
              <h3>Electrical Installation</h3>
              <p>
                Eco Voltex delivers safe, efficient, and fully compliant
                electrical installation services across London and nearby areas.
                From complete wiring projects to advanced power systems, we
                ensure every installation meets the highest professional
                standards.
              </p>
              <ul>
                <li>
                  New installations for homes, offices, and industrial sites
                </li>
                <li>System upgrades and rewiring solutions</li>
                <li>Custom-designed electrical systems</li>
              </ul>
            </div>

            <div className="what-we-do-block">
              <h3>Electrical Maintenance</h3>
              <p>
                Our tailored maintenance programs reduce risks, lower operating
                costs, and extend the life of your electrical infrastructure.
                Regular inspections and preventive care help prevent downtime
                and ensure ongoing safety.
              </p>
              <ul>
                <li>Planned preventive maintenance schedules</li>
                <li>Routine inspections and compliance checks</li>
                <li>Rapid fault detection and emergency support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="electrical-section">
          <h2>Our Services</h2>
          <div className="electrical-service-grid">
            <div className="electrical-service-card">
              <h3>Electrical Installation</h3>
              <ul>
                <li>New installations for homes & offices</li>
                <li>Full rewiring & upgrades</li>
                <li>Custom lighting & system integration</li>
              </ul>
            </div>
            <div className="electrical-service-card">
              <h3>Maintenance & Repairs</h3>
              <ul>
                <li>Routine inspections & testing</li>
                <li>Preventive maintenance programs</li>
                <li>24/7 emergency callouts</li>
              </ul>
            </div>
            <div className="electrical-service-card">
              <h3>Safety & Compliance</h3>
              <ul>
                <li>Electrical Installation Condition Reports (EICR)</li>
                <li>Surge protection & grounding</li>
                <li>Compliance with UK regulations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="electrical-section why-choose-us">
          <h2>Why Choose Eco Voltex?</h2>
          <ul className="why-list">
            <li>Certified electricians with proven experience</li>
            <li>Tailored solutions for homes, businesses, and industries</li>
            <li>Strong commitment to safety and compliance</li>
            <li>Energy-efficient designs that save costs long term</li>
            <li>Reliable service trusted across London</li>
          </ul>
        </section>

        {/* Importance of Maintenance */}
        <section className="electrical-section">
          <h2>Why Regular Maintenance Matters</h2>
          <p>
            Small electrical issues can turn into major problems if left
            unchecked. Routine maintenance helps prevent hazards, reduce
            downtime, and keep your systems running efficiently. With Eco
            Voltex, you get peace of mind that your property is safe and
            compliant.
          </p>
        </section>

        {/* How We Work */}
        <section
          className="electrical-section electrical-process"
          aria-labelledby="how-we-work-title"
        >
          <h2 id="how-we-work-title">How We Work</h2>

          <ol
            className="electrical-process-steps"
            aria-label="Eco Voltex process"
          >
            <li className="electrical-process-step">
              <div className="electrical-step-badge" aria-hidden>
                1
              </div>
              <div className="electrical-step-body">
                <h3 className="electrical-step-title">
                  Consultation & assessment
                </h3>
                <p className="electrical-step-text">
                  Site review and a clear written quotation.
                </p>
              </div>
            </li>

            <li className="electrical-process-step">
              <div className="electrical-step-badge" aria-hidden>
                2
              </div>
              <div className="electrical-step-body">
                <h3 className="electrical-step-title">Design & planning</h3>
                <p className="electrical-step-text">
                  Practical proposals with cost and programme.
                </p>
              </div>
            </li>

            <li className="electrical-process-step">
              <div className="electrical-step-badge" aria-hidden>
                3
              </div>
              <div className="electrical-step-body">
                <h3 className="electrical-step-title">
                  Professional installation
                </h3>
                <p className="electrical-step-text">
                  Neat, safe work with minimal disruption.
                </p>
              </div>
            </li>

            <li className="electrical-process-step">
              <div className="electrical-step-badge" aria-hidden>
                4
              </div>
              <div className="electrical-step-body">
                <h3 className="electrical-step-title">
                  Inspection & certification
                </h3>
                <p className="electrical-step-text">
                  Final tests, documentation and formal handover.
                </p>
              </div>
            </li>

            <li className="electrical-process-step">
              <div className="electrical-step-badge" aria-hidden>
                5
              </div>
              <div className="electrical-step-body">
                <h3 className="electrical-step-title">Ongoing support</h3>
                <p className="electrical-step-text">
                  Optional maintenance plans and rapid follow-up.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Call To Action */}
        <section className="electrical-cta">
          <h2>Power Up Your Property with Eco Voltex</h2>
          <p>
            Contact us today for trusted electrical installation and maintenance
            services across London and surrounding areas.
          </p>
          <a href="/contact" className="electrical-cta-btn">
            Get in Touch
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ElectricalServices;
