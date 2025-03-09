import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./InstallationMaintenance.css";
import { useNavigate } from "react-router-dom";


const categorizedFaqs = [
  {
    category: "General Electrical Questions",
    faqs: [
      {
        question: "What are the signs that my home needs rewiring?",
        answer:
          "Frequent breaker trips, flickering lights, burning smells, or old rubber/fabric wiring.",
      },
      {
        question: "How long does a full house rewire take?",
        answer:
          "Typically 5-10 days, depending on property size and complexity.",
      },
      {
        question: "Is my property safe if my fuse box is old?",
        answer:
          "Older fuse boxes may lack essential safety features. Upgrading to an RCBO consumer unit enhances protection.",
      },
      {
        question: "How do I know if my home’s electrical system is safe?",
        answer:
          "Regular inspections, no burning smells, no frequent breaker trips, and up-to-date wiring.",
      },
      {
        question: "What does it mean to comply with BS 7671 regulations?",
        answer:
          "It ensures that your electrical system meets the UK’s latest safety standards, reducing fire and shock risks.",
      },
      {
        question: "How often should I have my electrical system checked?",
        answer:
          "Every 10 years for homeowners, every 5 years for rental properties, or sooner if issues arise.",
      },
      {
        question: "What should I do in case of an electrical emergency?",
        answer:
          "Turn off the power at the consumer unit and call an electrician immediately.",
      },
      {
        question: "Do you provide emergency electrical repair services?",
        answer:
          "Yes, we offer urgent repairs for power outages, tripping circuits, and electrical hazards.",
      },
    ],
  },
  {
    category: "Installation & Upgrades",
    faqs: [
      {
        question: "Do I need an electrician to install an EV charger at home?",
        answer:
          "Yes, EV chargers require professional installation to meet safety regulations.",
      },
      {
        question: "Can I upgrade my old sockets and switches without rewiring?",
        answer:
          "Yes, modern sockets can be installed if the existing wiring is in good condition.",
      },
      {
        question: "What’s the benefit of surge protection?",
        answer:
          "It prevents damage to appliances caused by voltage spikes and lightning strikes.",
      },
      {
        question: "When should I upgrade my fuse box?",
        answer:
          "If it has outdated fuses, lacks RCD protection, or frequently trips.",
      },
      {
        question: "Can I install additional sockets without rewiring my home?",
        answer:
          "Yes, extra sockets can be installed if your wiring is safe and up to code.",
      },
      {
        question: "How much does a full house rewire cost?",
        answer:
          "Costs vary based on house size, wiring condition, and complexity—contact us for a quote.",
      },
      {
        question: "Do you install energy-efficient lighting?",
        answer:
          "Yes, we provide LED lighting solutions to lower energy bills and enhance brightness.",
      },
      {
        question: "Can I install an EV charger at home?",
        answer:
          "Yes, we install home EV charging stations with safe and compliant wiring.",
      },
    ],
  },
  {
    category: "Maintenance & Repairs",
    faqs: [
      {
        question: "Why do my circuit breakers keep tripping?",
        answer:
          "Possible causes include overloaded circuits, faulty wiring, or damaged appliances.",
      },
      {
        question: "What should I do if I smell burning from an outlet?",
        answer:
          "Switch off the power immediately and call a qualified electrician.",
      },
      {
        question: "Why are my lights flickering?",
        answer:
          "Loose wiring, overloaded circuits, or faulty bulbs may be the cause.",
      },
      {
        question: "Why do my plugs and sockets feel hot?",
        answer:
          "This may indicate an overloaded circuit or faulty wiring that needs urgent attention.",
      },
      {
        question: "What are the dangers of old electrical wiring?",
        answer:
          "Risks include electrical fires, shocks, and inefficiencies that increase energy costs.",
      },
    ],
  },
  {
    category: "EICR & Landlord Inspections",
    faqs: [
      {
        question: "How often should I get an EICR report?",
        answer:
          "Every 5 years for rental properties and 10 years for owner-occupied homes.",
      },
      {
        question: "What happens if my property fails an EICR test?",
        answer:
          "Necessary repairs must be completed to bring the installation up to standard.",
      },
      {
        question: "Is an EICR required when selling a house?",
        answer:
          "Not legally required, but it reassures buyers of electrical safety.",
      },
      {
        question: "Do landlords need an EICR certificate?",
        answer:
          "Yes, UK law requires landlords to have an Electrical Installation Condition Report every 5 years.",
      },
      {
        question: "What happens if my EICR report fails?",
        answer:
          "You must carry out the necessary remedial work to make the installation safe.",
      },
      {
        question:
          "Can I get an EICR certificate for my home even if I’m not renting it out?",
        answer:
          "Yes, it’s a great way to ensure your home’s electrical system is safe.",
      },
    ],
  },
  {
    category: "Outdoor & Smart Home Electrical Work",
    faqs: [
      {
        question: "Can you install security lighting outside my home?",
        answer:
          "Yes, we offer motion-sensor and dusk-to-dawn security lighting.",
      },
      {
        question: "Do you install smart home systems?",
        answer:
          "Yes, we install smart lighting, thermostats, and home automation systems.",
      },
      {
        question:
          "How do I make my home more energy-efficient with electrical upgrades?",
        answer:
          "Upgrading to LED lighting, installing smart thermostats, and ensuring modern wiring can reduce energy bills.",
      },
      {
        question: "Do you install security lighting and outdoor sockets?",
        answer:
          "Yes, we install weatherproof outdoor lighting, motion sensors, and garden sockets.",
      },
      {
        question:
          "Can you integrate smart home systems like automated lighting and thermostats?",
        answer:
          "Yes, we install smart home technology for convenience, security, and energy efficiency.",
      },
    ],
  },
  {
    category: "Rewiring Service Specifics & Pricing",
    faqs: [
      {
        question: "How long does a full rewiring take?",
        answer:
          "Most 3-bed homes take 3-5 days. We work room-by-room to minimise disruption: Day 1: Safety checks & temporary power setup. Days 2-4: Remove old wires & install new circuits. Day 5: Final testing + certification.",
      },
      {
        question: "Why are your quotes higher than others?",
        answer:
          "We use BS 7671-compliant materials (e.g., Hager consumer units) and certified labour. Cheap quotes often cut corners:\n❌ Substandard cables (fire risk).\n❌ No testing/certification (voids insurance).\n✅ Our guarantee: 12-month warranty on all work.",
      },
      {
        question: "Can I stay in my home during rewiring?",
        answer:
          "Yes! We’ll work from 8 AM – 4 PM (no overnight disruption), keep 1-2 rooms powered at all times, and clean up daily.",
      },
    ],
  },
];


const InstallationMaintenance = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeFAQIndex, setActiveFAQIndex] = useState({});
  const navigate = useNavigate();

  const toggleFAQ = (catIndex, faqIndex) => {
    setActiveFAQIndex((prev) => ({
      ...prev,
      [catIndex]: prev[catIndex] === faqIndex ? null : faqIndex,
    }));
  };

  const toggleCategoryExpand = (catIndex) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catIndex]: !prev[catIndex],
    }));
  };

  return (
    <>
      <Header />
      <div className="InstallationMaintenance-service-container">
        <div className="InstallationMaintenance-hero-section">
          <h1>Electrical Installation & Maintenance</h1>
          <h2 className="InstallationMaintenance-subtitle">
            Safe, Efficient Power Solutions for Homes & Businesses
          </h2>
        </div>

        <div className="InstallationMaintenance-what-we-do">
          <h3>What We Do</h3>
          <div className="InstallationMaintenance-work-scope">
            <div className="InstallationMaintenance-work-category">
              <h4>Installations</h4>
              <ul>
                <li>Full wiring for new builds, extensions, or renovations.</li>
                <li>Consumer unit (fuse box) installation and upgrades.</li>
                <li>
                  Lighting circuits, sockets, switches, and EV charger setups.
                </li>
              </ul>
            </div>

            <div className="InstallationMaintenance-work-category">
              <h4>Upgrades</h4>
              <ul>
                <li>
                  Rewiring outdated systems (e.g., fabric-insulated or rubber
                  wiring).
                </li>
                <li>Surge protection installation to safeguard appliances.</li>
                <li>
                  Fuse box replacements (e.g., upgrading to modern RCBOs).
                </li>
              </ul>
            </div>

            <div className="InstallationMaintenance-work-category">
              <h4>Maintenance</h4>
              <ul>
                <li>
                  Fault diagnosis (tracing shorts, flickering lights, tripping
                  circuits).
                </li>
                <li>
                  Emergency repairs for power outages or electrical hazards.
                </li>
                <li>Landlord safety inspections (EICR certificates).</li>
              </ul>
            </div>

            <div className="InstallationMaintenance-work-category">
              <h4>Specialist Services</h4>
              <ul>
                <li>Outdoor lighting (garden, security, or decorative).</li>
                <li>Data cabling for offices or smart home networks.</li>
                <li>
                  Smart home integration (lighting, thermostats, audio systems).
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="InstallationMaintenance-why-choose-us">
          <h3>Why Choose Us</h3>
          <div className="InstallationMaintenance-step-process">
            <div className="InstallationMaintenance-step">
              <h4>Consultation</h4>
              <p>
                Free on-site survey to assess your electrical needs and risks.
              </p>
              <p>
                Discussion of timelines, budgets, and compliance requirements.
              </p>
            </div>

            <div className="InstallationMaintenance-step">
              <h4>Quote</h4>
              <p>Transparent pricing with no hidden fees (labor, materials).</p>
            </div>

            <div className="InstallationMaintenance-step">
              <h4>Installation</h4>
              <p>Certified technicians work with minimal disruption.</p>
              <p>
                Use of high-quality materials (e.g., Hager consumer units, MK
                sockets).
              </p>
            </div>

            <div className="InstallationMaintenance-step">
              <h4>Testing</h4>
              <p>
                Full compliance with BS 7671 (18th Edition Wiring Regulations).
              </p>
              <p>Earth fault loop impedance, polarity, and RCD testing.</p>
            </div>

            <div className="InstallationMaintenance-step">
              <h4>Handover</h4>
              <p>
                Electrical Installation Certificate (EIC) or Minor Works
                Certificate provided.
              </p>
              <p>Debris removed, and system operation explained.</p>
            </div>
          </div>
        </section>

        <section className="InstallationMaintenance-ready-to-upgrade">
          <h3>Ready to Upgrade?</h3>
          <div className="InstallationMaintenance-upgrade-section">
            <h4>
              Experiencing these issues? If you see any of the problems below,
              then book us!
            </h4>
            <ul className="InstallationMaintenance-red-flags-list">
              <li>Breaker Tripping</li>
              <li>Overloaded Circuit</li>
              <li>Lights Flickering</li>
              <li>Burning Smell</li>
              <li>Sparks Flying</li>
              <li>Partial Blackout</li>
              <li>Hot Outlets</li>
              <li>Old Wiring</li>
              <li>Partial Blackout</li>
              <li>Electrical Emergency</li>
            </ul>

            <button
              className="InstallationMaintenance-book-button"
              onClick={() => navigate("/contact")}
              aria-label="Book your free electrical health check"
            >
              Book Now – Secure Your Home Today!
            </button>
          </div>
        </section>

        <section className="InstallationMaintenance-faq-section">
          <h3>FAQs</h3>
          {categorizedFaqs.map((cat, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h4>{cat.category}</h4>
              <div className="InstallationMaintenance-faq">
                {cat.faqs
                  .slice(
                    0,
                    expandedCategories[catIndex]
                      ? cat.faqs.length
                      : 3
                  )
                  .map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="InstallationMaintenance-faq-item"
                    >
                      <button
                        className="InstallationMaintenance-faq-question"
                        onClick={() => toggleFAQ(catIndex, faqIndex)}
                      >
                        {faq.question}
                        <span className="InstallationMaintenance-faq-icon">
                          {activeFAQIndex[catIndex] === faqIndex ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`InstallationMaintenance-faq-answer ${
                          activeFAQIndex[catIndex] === faqIndex ? "open" : ""
                        }`}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                {cat.faqs.length > 3 && !expandedCategories[catIndex] && (
                  <button
                    className="read-more-button"
                    onClick={() => toggleCategoryExpand(catIndex)}
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>

      </div>
      <Footer />
    </>
  );
};

export default InstallationMaintenance;
