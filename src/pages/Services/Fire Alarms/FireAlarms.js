import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./FireAlarms.css";
import { useNavigate } from "react-router-dom";

const categorizedFaqs = [
  {
    category: "General Fire Alarm FAQs",
    description:
      "Essential information about fire alarms and their importance.",
    faqs: [
      {
        question: "Why do I need a fire alarm system?",
        answer:
          "Fire alarms detect smoke, heat, and gas leaks early, preventing loss of life and property damage. UK law requires them in most buildings.",
      },
      {
        question: "What are the different types of fire alarms?",
        answer:
          "There are smoke detectors, heat detectors, carbon monoxide (CO) detectors, and multi-sensor alarms. Systems can be conventional, addressable, or wireless.",
      },
      {
        question: "Do fire alarms detect carbon monoxide (CO)?",
        answer:
          "Not all fire alarms detect CO. You need a separate CO detector to monitor for gas leaks and poisoning risks.",
      },
      {
        question: "How do wireless fire alarms work?",
        answer:
          "Wireless alarms use encrypted radio signals instead of cables, making them easier to install with minimal disruption.",
      },
    ],
  },
  {
    category: "Installation & Compliance FAQs",
    description:
      "Understand legal requirements, regulations, and installation processes.",
    faqs: [
      {
        question: "Are fire alarms legally required in all buildings?",
        answer:
          "Yes! UK law (BS 5839) requires fire alarms in homes, rental properties, businesses, and public buildings.",
      },
      {
        question: "Where should I install fire alarms in my property?",
        answer:
          "Homes: Install alarms in hallways, living rooms, kitchens, and sleeping areas. Businesses: Alarms should be in offices, storerooms, kitchens, and escape routes.",
      },
      {
        question: "What is BS 5839, and why is it important?",
        answer:
          "BS 5839 is the British Standard for fire detection and alarm systems. It sets rules for design, installation, and maintenance to ensure safety.",
      },
      {
        question: "Can I install a fire alarm system myself?",
        answer:
          "No, fire alarm installation must be done by a certified engineer to ensure it meets UK safety laws and insurance requirements.",
      },
    ],
  },
  {
    category: "Testing, Maintenance & Troubleshooting FAQs",
    description: "Keeping your system working properly.",
    faqs: [
      {
        question: "How often should I test my fire alarms?",
        answer:
          "Weekly (press the test button) and annually (full system check by professionals).",
      },
      {
        question: "Why does my fire alarm keep beeping?",
        answer:
          "Common reasons include: Low battery (replace immediately), dust or smoke buildup (clean with a soft brush), and end of lifespan (replace after 10 years).",
      },
      {
        question: "What should I do if my fire alarm goes off falsely?",
        answer:
          "Check for steam, smoke, or dust near the sensor. If it persists, get a professional inspection.",
      },
      {
        question: "How long do fire alarms last?",
        answer:
          "Smoke and heat detectors last around 10 years. Batteries should be replaced every 1–2 years.",
      },
    ],
  },
  {
    category: "Fire Alarms for Businesses & Landlords FAQs",
    description:
      "Legal responsibilities for commercial properties & landlords.",
    faqs: [
      {
        question: "Are fire alarms mandatory for landlords?",
        answer:
          "Yes! UK law requires rental properties to have interlinked smoke alarms and heat detectors in key areas.",
      },
      {
        question:
          "What happens if my business doesn’t have a fire alarm system?",
        answer:
          "You could face legal penalties, insurance invalidation, and business closure for non-compliance.",
      },
      {
        question: "Can I get fined for a faulty fire alarm system?",
        answer:
          "Yes, non-functioning alarms can lead to heavy fines or legal action.",
      },
      {
        question: "How often should businesses have a fire alarm inspection?",
        answer:
          "Annually, as per BS 5839, with additional monthly checks by in-house staff.",
      },
    ],
  },
  {
    category: "Cost, Upgrades & Booking FAQs",
    description: "Pricing, system upgrades, and how to book a service.",
    faqs: [
      {
        question: "How much does a fire alarm system cost?",
        answer:
          "Costs depend on the property size and type of system (conventional, addressable, or wireless). Get a free quote today!",
      },
      {
        question: "Can I upgrade my old fire alarm system?",
        answer:
          "Yes! We upgrade outdated systems to modern, fully compliant fire alarms with better sensitivity and reliability.",
      },
      {
        question: "Do I need emergency lighting with my fire alarm system?",
        answer:
          "For businesses and rental properties, yes. Emergency lighting ensures safe exits during power failures.",
      },
      {
        question:
          "How do I book a fire alarm installation or maintenance service?",
        answer:
          "Easy! Contact us online or call us for a free consultation & quote.",
      },
    ],
  },
  {
    category: "Missing Fire Alarm Documentation FAQs",
    description:
      "What to do if you have a fire alarm but no official records or paperwork.",
    faqs: [
      {
        question:
          "What if my fire alarm system was installed, but I don’t have any documentation?",
        answer:
          "You need a Fire Alarm Installation Certificate (BS 5839) to prove compliance. We can conduct an inspection and issue a new certificate.",
      },
      {
        question:
          "Can I still prove compliance without installation documents?",
        answer:
          "If you don’t have documents, you may need a Fire Risk Assessment and an official system inspection to verify compliance.",
      },
      {
        question:
          "What is a Fire Alarm Installation Certificate, and why do I need it?",
        answer:
          "This certificate confirms that your fire alarm system meets UK safety regulations (BS 5839). It’s required for insurance, legal compliance, and landlord responsibilities.",
      },
      {
        question: "Who is responsible for keeping fire alarm records?",
        answer:
          "Business owners, landlords, and building managers must maintain up-to-date fire alarm documentation.",
      },
      {
        question: "How can I get a replacement fire alarm certificate?",
        answer:
          "We can inspect, test, and certify your system to provide a new compliance certificate.",
      },
      {
        question: "Can I be fined for not having fire alarm records?",
        answer:
          "Yes! Missing documentation can result in fines, invalidated insurance, and legal action in case of a fire-related incident.",
      },
      {
        question:
          "What if my fire alarm system was installed years ago and I don’t know if it’s compliant?",
        answer:
          "Book a full compliance check with us. We’ll inspect, test, and upgrade your system if needed.",
      },
      {
        question:
          "Do landlords need to provide fire alarm certificates to tenants?",
        answer:
          "Yes! Landlords must provide proof of a functioning fire alarm system for legal and insurance purposes.",
      },
      {
        question: "How often should fire alarm records be updated?",
        answer:
          "Fire alarm logs should be updated after every test, service, or modification. Annual certificates must be renewed.",
      },
      {
        question:
          "What if my fire alarm system is working fine, but I don’t have an installation report?",
        answer:
          "Even if the system functions correctly, you still need documentation to prove compliance. We can issue certification after an inspection.",
      },
    ],
  },
];

const FireAlarms = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Adds path to history stack
  };

  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeFAQIndex, setActiveFAQIndex] = useState({});

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
      <div className="FireAlarm-container">
        <header className="FireAlarm-header">
          <h1>Fire Alarm Systems</h1>
          <h2>Your First Line of Defense Against Fire Hazards</h2>
        </header>

        <section className="FireAlarm-steps">
          <h2>Revolutionizing Fire Safety in 4 Steps</h2>
          <div className="FireAlarm-step-cards">
            <div className="FireAlarm-step">
              <h3>Step 1: Risk Assessment</h3>
              <ul>
                <li>
                  <strong>Identify Areas:</strong> Kitchens, electrical rooms,
                  and storage areas.
                </li>
                <li>
                  <strong>Assess Layout:</strong> Determine system type based on
                  building size.
                </li>
                <li>
                  <strong>Detector Choice:</strong> Use smoke, heat, or CO
                  detectors as needed.
                </li>
              </ul>
            </div>

            <div className="FireAlarm-step">
              <h3>Step 2: System Design</h3>
              <ul>
                <li>
                  <strong>Conventional:</strong> For small spaces like cafés or
                  apartments.
                </li>
                <li>
                  <strong>Addressable:</strong> For large buildings needing
                  pinpoint detection.
                </li>
                <li>
                  <strong>Wireless:</strong> Ideal for historic or rented
                  properties.
                </li>
                <li>
                  <strong>Upgrades:</strong> Modernize outdated systems.
                </li>
              </ul>
            </div>

            <div className="FireAlarm-step">
              <h3>Step 3: Installation & Testing</h3>
              <ul>
                <li>
                  <strong>Expert Setup:</strong> Installed per BS 5839
                  standards.
                </li>
                <li>
                  <strong>Thorough Testing:</strong> Ensure detectors and alarms
                  perform reliably.
                </li>
                <li>
                  <strong>Emergency Lighting:</strong> Optional, for enhanced
                  safety.
                </li>
                <li>
                  <strong>Certification:</strong> Official compliance document
                  provided.
                </li>
              </ul>
            </div>

            <div className="FireAlarm-step">
              <h3>Step 4: 24/7 Monitoring & Maintenance</h3>
              <ul>
                <li>
                  <strong>Regular Maintenance:</strong> Annual checks, cleaning,
                  and updates.
                </li>
                <li>
                  <strong>Quick Repairs:</strong> Faulty detectors replaced
                  within 4 hours.
                </li>
                <li>
                  <strong>Compliance Support:</strong> Meets BS 5839 standards
                  and insurance requirements.
                </li>
              </ul>
            </div>
          </div>
        </section>


        <section className="FireAlarm-intro">
          <h2>
          Our Lifesaving Mission Born from Harsh Reality
          </h2>
          <div className="FireAlarm-intro-cards">
            <div className="FireAlarm-intro-card">
              <h3>The Burning Truth</h3>
              <ul>
                <li>
                  UK fires cause <strong>£1.3 billion</strong> in damages
                  annually (Home Office Report).
                </li>
                <li>
                  80% of fire-related deaths occur in properties{" "}
                  <strong>without working fire alarms</strong>.
                </li>
                <li>
                  Electrical faults and cooking incidents are leading causes of
                  preventable fires.
                </li>
              </ul>
            </div>
            <div className="FireAlarm-intro-card">
              <h3>Our Lifesaving Mission</h3>
              <ul>
                <li>
                  Every second counts – our fire alarms provide crucial early
                  warnings.
                </li>
                <li>
                  We deliver tailored, compliant systems designed to protect
                  your property’s unique risks.
                </li>
                <li>
                  Our certified engineers ensure expert installation and
                  continuous maintenance for total safety.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fire-section-why-us">
          <div className="fire-content-why-us">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Certified Fire Alarm Engineers</li>
              <li>Fully Compliant Systems</li>
              <li>Hassle-Free Installation</li>
              <li>Tailored for Your Property</li>
            </ul>
          </div>
        </section>

        <section className="FireAlarm-booking-cta">
          <div className="FireAlarm-booking-info">
            <h2>What Action Do You Need to Take?</h2>
            <p>Before we begin, please ensure:</p>
            <ul>
              <li>
                We have access to all areas (attics, basements, server rooms).
              </li>
              <li>Floor plans are available to streamline design.</li>
              <li>
                High-risk zones (e.g., kitchens, electrical rooms) are noted.
              </li>
              <li>Power outlets are accessible for control panels.</li>
            </ul>
          </div>
        </section>

        <div className="FireAlarm-cta">
            <h2>Don’t Risk Fines or Fires!</h2>
            <button
              className="FireAlarm-cta-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Now - Secure Your Home Today!
            </button>
          </div>

        <section className="Fire-faq-section">
          <h3>FAQs</h3>
          {categorizedFaqs.map((cat, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h4>{cat.category}</h4>
              <div className="Fire-faq">
                {cat.faqs
                  .slice(0, expandedCategories[catIndex] ? cat.faqs.length : 3)
                  .map((faq, faqIndex) => (
                    <div key={faqIndex} className="Fire-faq-item">
                      <button
                        className="Fire-faq-question"
                        onClick={() => toggleFAQ(catIndex, faqIndex)}
                      >
                        {faq.question}
                        <span className="Fire-faq-icon">
                          {activeFAQIndex[catIndex] === faqIndex ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`Fire-faq-answer ${
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

export default FireAlarms;
