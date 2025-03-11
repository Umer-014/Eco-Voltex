import React, { useState } from "react";
import "./PAT.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";


const categorizedFaqs = [
  {
    category: "General PAT Testing FAQs",
    faqs: [
      {
        question: "What is PAT testing?",
        answer: "PAT (Portable Appliance Testing) is the process of checking electrical appliances for safety to prevent hazards and ensure legal compliance.",
      },
      {
        question: "Why is PAT testing important?",
        answer: "It helps prevent electrical accidents, ensures safe working environments, and complies with UK health and safety regulations.",
      },
      {
        question: "Who needs to have their appliances tested?",
        answer: "Any business, landlord, or organization using portable electrical appliances should have them tested regularly.",
      },
      {
        question: "Is PAT testing legally required?",
        answer: "While not mandated by a specific law, PAT testing is a recognized method to meet the obligations of various UK regulations, such as the Health & Safety at Work Act and Electricity at Work Regulations.",
      },
    ],
  },
  {
    category: "Process and Procedure FAQs",
    faqs: [
      {
        question: "How is PAT testing performed?",
        answer: "Testing typically includes a visual inspection, electrical testing (earth continuity, insulation resistance, and polarity checks), followed by labelling and documentation.",
      },
      {
        question: "What happens during the visual inspection?",
        answer: "A certified technician checks for physical defects like cracks, frayed wires, loose plugs, and damaged casings.",
      },
      {
        question: "What electrical tests are conducted?",
        answer: "The tests include checking earth continuity (for Class I appliances), insulation resistance to detect leakage, and a polarity test to ensure correct wiring.",
      },
      {
        question: "How are the results documented?",
        answer: "Each appliance receives a pass/fail sticker with the test date, and you’re provided with a detailed digital report for your records.",
      },
    ],
  },
  {
    category: "Legal & Compliance FAQs",
    faqs: [
      {
        question: "What laws influence PAT testing?",
        answer: "PAT testing supports compliance with the Health & Safety at Work Act (1974) and the Electricity at Work Regulations (1989), along with standards set for rental properties.",
      },
      {
        question: "How does PAT testing help landlords?",
        answer: "It ensures that all portable appliances in rental properties are safe, meeting the Landlords’ Electrical Safety Standards introduced in 2020.",
      },
      {
        question: "Do I face penalties if I skip PAT testing?",
        answer: "While PAT testing itself isn’t legally mandated, failing to maintain safe electrical equipment can lead to breaches of health and safety regulations and potential legal consequences.",
      },
      {
        question: "Can PAT testing protect my business reputation?",
        answer: "Yes, regular PAT testing demonstrates a commitment to safety, reducing risks and building trust with employees, tenants, and customers.",
      },
    ],
  },
  {
    category: "Equipment & Testing Intervals FAQs",
    faqs: [
      {
        question: "What types of equipment are tested?",
        answer: "Both Class I (appliances with an earth connection) and Class II (double-insulated appliances) are tested, with specific checks for each class.",
      },
      {
        question: "What is the difference between Class I and Class II appliances?",
        answer: "Class I appliances require an earth connection for safety, while Class II appliances have double insulation and do not require an earth.",
      },
      {
        question: "How often should different environments be tested?",
        answer: "Testing frequency varies:\n- Offices & Shops: 12–24 months\n- Educational Institutions: 6–12 months\n- Construction Sites: 3–6 months\n- Hospitals & Medical Facilities: 6–12 months\n- Rental Properties: At the start of each tenancy\n- Industrial Environments: 3–6 months",
      },
      {
        question: "Can the testing interval change?",
        answer: "Yes, testing frequency can vary based on a risk assessment of the specific environment and the usage of the appliances.",
      },
    ],
  },
  {
    category: "Service & Support FAQs",
    faqs: [
      {
        question: "How do I book a PAT test?",
        answer: "You can schedule an appointment online or call our service directly to arrange a visit at your convenience.",
      },
      {
        question: "What should I expect during a PAT testing visit?",
        answer: "A certified technician will inspect, test, label your appliances, and provide a digital certificate along with a detailed report.",
      },
      {
        question: "How long are the test records kept?",
        answer: "All test records are securely stored for at least 5 years to support any future audits or compliance checks.",
      },
      {
        question: "What if an appliance fails the test?",
        answer: "Failed appliances are clearly tagged, and we provide recommendations on repair, replacement, or further evaluation to ensure safety.",
      },
    ],
  },
];


const PAT = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // No replace, so the path will be added to the history stack
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
      <div className="PAT-service-container">
        <div className="PAT-hero-section">
          <h1>PAT Testing</h1>
          <h2 className="PAT-subtitle">
            Legally Compliant Testing for Appliances & Equipment
          </h2>
        </div>

        <section className="PAT-what-we-do">
          <h3>What We Do</h3>
          <div className="PAT-work-scope">
            <div className="PAT-work-category">
              <h4>Comprehensive Visual Inspection
              </h4>
              <ul>
                <li>Cracked or damaged casings</li>
                <li>Frayed or exposed wiring</li>
                <li>Loose or worn plugs and sockets</li>
                <li>Inadequate cable grips and strain relief</li>
              </ul>
            </div>

            <div className="PAT-work-category">
              <h4>Advanced Electrical Testing</h4>
              <ul>
                <li>
                  <strong>Earth Continuity Test</strong>
                  grounded.
                </li>
                <li>
                  <strong>Insulation Resistance Test</strong>
                </li>
                <li>
                  <strong>Polarity Check</strong>
                </li>
              </ul>
            </div>

            <div className="PAT-work-category">
              <h4>Labelling, Reporting & Certification
              </h4>
              <ul>
                <li>Pass/Fail Labelling</li>
                <li>Digital Compliance Certificate</li>
                <li>Action Plan for Failed Items</li>
                <li>Record Keeping</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="PAT-essential">
          <h3>Why It’s Essential</h3>

          <div className="PAT-legal">
            <h4>Legal Requirements:</h4>
            <p>
              PAT testing is mandatory under the{" "}
              <strong>UK Health and Safety at Work Act (1974)</strong>.
            </p>
            <p>
              Landlords must test all portable appliances in rental properties
              under the <strong>Electrical Safety Standards (2020)</strong>.
            </p>
          </div>

          <div className="PAT-testing-guide">
            <h4>Testing Frequency Guide:</h4>
            <table className="PAT-testing-table">
              <thead>
                <tr>
                  <th>Environment</th>
                  <th>Testing Interval</th>
                  <th>High-Risk Appliances</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Offices/Shops</td>
                  <td>12–24 months</td>
                  <td>Kettles, heaters, printers</td>
                </tr>
                <tr>
                  <td>Construction Sites</td>
                  <td>3–6 months</td>
                  <td>Power tools, extension leads</td>
                </tr>
                <tr>
                  <td>Schools/Hospitals</td>
                  <td>6–12 months</td>
                  <td>Medical devices, IT equipment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="PAT-how-it-works">
          <h3>How It Works in 3 Easy Steps:</h3>
          <div className="PAT-steps">
            <div className="PAT-step">
              <strong>1. Book Online</strong>
            </div>
            <div className="PAT-step">
              <strong>2. We Test & Tag</strong>
            </div>
            <div className="PAT-step">
              <strong>3. Get Compliant</strong>
            </div>
          </div>
        </section>

        <section className="PAT-upgrade-section">
          <h3>Ready to Upgrade?</h3>
          <div className="PAT-upgrade-content">
            <h4 className="PAT-red-flags">
              Experiencing these issues? If you see any of the problems below,
              then book us!
            </h4>
            <ul className="PAT-red-flags-list">
              <li>Frayed</li>
              <li>Damaged</li>
              <li>Exposed</li>
              <li>Overheating</li>
              <li>Malfunctioning</li>
              <li>Sparking</li>
              <li>Flickering</li>
              <li>Cracked</li>
              <li>Burnt</li>
              <li>Unstable</li>
            </ul>
            <button
              className="PAT-book-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Now - Secure Your Home Today!
            </button>
          </div>
        </section>

        <section className="PAT-faq-section">
      <h3>FAQs</h3>
      {categorizedFaqs.map((cat, catIndex) => (
        <div key={catIndex} className="faq-category">
          <h4>{cat.category}</h4>
          <div className="PAT-faq">
            {cat.faqs
              .slice(0, expandedCategories[catIndex] ? cat.faqs.length : 3)
              .map((faq, faqIndex) => (
                <div key={faqIndex} className="PAT-faq-item">
                  <button
                    className="PAT-faq-question"
                    onClick={() => toggleFAQ(catIndex, faqIndex)}
                  >
                    {faq.question}
                    <span className="PAT-faq-icon">
                      {activeFAQIndex[catIndex] === faqIndex ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`PAT-faq-answer ${
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

export default PAT;
