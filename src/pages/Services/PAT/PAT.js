import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./PAT.css";

const PATTesting = () => {
  return (
    <>
      <Helmet>
        <title>
          Professional PAT Testing Services in London | Eco Voltex
        </title>
        <meta
          name="description"
          content="Eco Voltex offers expert PAT testing services in London and surrounding areas. Ensure safety and compliance with our certified, efficient, and reliable appliance testing solutions."
        />
        <meta
          name="keywords"
          content="PAT testing London, portable appliance testing, Eco Voltex, electrical safety testing, certified PAT testers UK"
        />
      </Helmet>

      <Header />
      <div className="service-container">
        {/* Hero Section */}
        <header className="service-hero">
          <div className="service-hero-overlay">
            <h1>Safe Appliances with Eco Voltex PAT Testing</h1>
            <p>Comprehensive testing for ultimate safety and compliance</p>
          </div>
        </header>

        {/* Intro */}
        <section className="service-intro">
          <p>
            At <span className="highlight">Eco Voltex</span>, we specialize in{" "}
            <strong>Portable Appliance Testing (PAT)</strong> across London, ensuring your electrical appliances are safe and compliant with{" "}
            <strong>UK regulations</strong>. Our certified testers deliver fast, reliable, and non-disruptive services for homes, offices, and industries.
          </p>
        </section>

        {/* What We Do */}
        <section className="service-section what-we-do">
          <h2>Our PAT Testing Expertise</h2>
          <div className="what-we-do-text">
            <div className="what-we-do-block">
              <h3>Thorough PAT Testing</h3>
              <p>
                We provide meticulous PAT testing to identify faults and ensure your appliances meet the latest safety standards, reducing risks of electrical hazards.
              </p>
              <ul>
                <li>Testing for all portable appliances, from office equipment to industrial machinery</li>
                <li>Visual inspections and advanced electrical testing</li>
                <li>Compliance with IET Code of Practice</li>
              </ul>
            </div>
            <div className="what-we-do-block">
              <h3>Maintenance & Compliance Support</h3>
              <p>
                Our services include tailored maintenance plans and detailed reporting to keep your appliances safe and compliant year-round.
              </p>
              <ul>
                <li>Customized testing schedules to suit your needs</li>
                <li>Comprehensive test reports and asset registers</li>
                <li>Fast re-testing and repair coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="service-section">
          <h2>Our PAT Testing Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Appliance Safety Testing</h3>
              <ul>
                <li>Full visual and electrical inspections</li>
                <li>Testing for all appliance classes (Class I, II, III)</li>
                <li>Minimal downtime with efficient processes</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Reporting & Documentation</h3>
              <ul>
                <li>Detailed digital and printed test reports</li>
                <li>Pass/fail labels for easy identification</li>
                <li>Compliance certificates for audits</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Compliance & Risk Management</h3>
              <ul>
                <li>Risk assessments for high-usage appliances</li>
                <li>Guidance on Health & Safety regulations</li>
                <li>Support for workplace safety audits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="service-section why-choose-us">
          <h2>Why Choose Eco Voltex for PAT Testing?</h2>
          <ul className="why-list">
            <li>Certified testers trained to the highest standards</li>
            <li>Flexible testing schedules to minimize disruption</li>
            <li>Full compliance with UK safety regulations</li>
            <li>Cost-effective solutions with transparent pricing</li>
            <li>Trusted by businesses and homeowners across London</li>
          </ul>
        </section>

        {/* Importance of PAT Testing */}
        <section className="service-section">
          <h2>Why PAT Testing is Essential</h2>
          <p>
            Regular PAT testing prevents electrical accidents, ensures compliance with legal requirements, and protects your property and people.
            Eco Voltex’s expert testing services deliver safety, reliability, and peace of mind.
          </p>
        </section>

        {/* How We Work */}
        <section className="service-section service-process" aria-labelledby="how-we-work-title">
          <h2 id="how-we-work-title">Our PAT Testing Process</h2>
          <ol className="service-process-steps" aria-label="Eco Voltex PAT testing process">
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>1</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Initial Consultation</h3>
                <p className="service-step-text">On-site assessment and transparent quotation.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>2</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Testing Schedule</h3>
                <p className="service-step-text">Flexible planning to minimize disruption.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>3</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Expert Testing</h3>
                <p className="service-step-text">Thorough testing with certified equipment.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>4</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Detailed Reporting</h3>
                <p className="service-step-text">Comprehensive reports and certifications.</p>
              </div>
            </li>
            <li className="service-process-step">
              <div className="service-step-badge" aria-hidden>5</div>
              <div className="service-step-body">
                <h3 className="service-step-title">Ongoing Support</h3>
                <p className="service-step-text">Regular re-testing and compliance advice.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Call To Action */}
        <section className="service-cta">
          <h2>Ensure Safety with Eco Voltex PAT Testing</h2>
          <p>Contact us for expert PAT testing services across London and surrounding areas.</p>
          <a href="/contact" className="service-cta-btn">Request a Quote</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PATTesting;