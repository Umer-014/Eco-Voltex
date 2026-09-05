import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FAQPage.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for expand/collapse
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const FAQPage = () => {
  const navigate = useNavigate();
const faqSections = [
  {
    category: "About Eco Voltex",
    faqs: [
      {
        question: "What services does Eco Voltex provide?",
        answer:
          "Eco Voltex provides professional electrical, fire safety and security services for residential and commercial properties. Our services include electrical installations and maintenance, consumer unit upgrades, electrical inspection and testing, fire alarm systems, CCTV installations and other electrical safety solutions."
      },
      {
        question: "Do you work on both residential and commercial properties?",
        answer:
          "Yes. We provide services for homes, landlords, offices, shops, restaurants, commercial premises and other properties. Every project is assessed based on its individual requirements."
      },
      {
        question: "Which areas does Eco Voltex cover?",
        answer:
          "Eco Voltex is based in London and provides services across London and surrounding areas. Contact us with your postcode and project details to check availability in your location."
      },
      {
        question: "Why should I choose Eco Voltex?",
        answer:
          "We focus on providing reliable workmanship, clear communication, professional service and practical solutions. We take the time to understand the requirements of each property and recommend suitable solutions for safety, compliance and long-term reliability."
      }
    ]
  },

  {
    category: "Electrical Services",
    faqs: [
      {
        question: "What electrical services do you provide?",
        answer:
          "We provide a wide range of electrical services including new installations, electrical upgrades, rewiring, additional sockets and lighting, consumer unit upgrades, fault finding, electrical maintenance, inspection and testing."
      },
      {
        question: "Can you upgrade or replace an old consumer unit?",
        answer:
          "Yes. We can inspect your existing consumer unit and discuss suitable upgrade options based on the condition of your installation and your property's electrical requirements."
      },
      {
        question: "Do you carry out electrical fault finding?",
        answer:
          "Yes. If your electrics are tripping, circuits are not working or you are experiencing an electrical fault, we can investigate the issue and identify the cause before recommending the appropriate repair."
      },
      {
        question: "Can you install new sockets, lighting and electrical circuits?",
        answer:
          "Yes. We can install additional sockets, lighting, new circuits and other electrical equipment for homes and commercial properties, subject to the requirements of the installation."
      },
      {
        question: "Do you provide electrical work for renovations and new projects?",
        answer:
          "Yes. We can assist with electrical installations for renovations, refurbishments, extensions and new projects. We recommend discussing the project with us before work begins so that the electrical installation can be properly planned."
      }
    ]
  },

  {
    category: "Electrical Certificates & Testing",
    faqs: [
      {
        question: "What is an EICR?",
        answer:
          "An EICR stands for Electrical Installation Condition Report. It involves inspecting and testing the fixed electrical installation to assess its condition and identify any observations that may require attention."
      },
      {
        question: "Do you provide EICR certificates?",
        answer:
          "Yes. Eco Voltex can carry out electrical inspection and testing and provide the appropriate documentation where applicable."
      },
      {
        question: "Do landlords need an electrical inspection certificate?",
        answer:
          "Landlords have legal responsibilities regarding the safety of electrical installations in rented properties. The requirements can depend on the type and location of the property, so we can discuss your property and inspection requirements with you."
      },
      {
        question: "What happens if an electrical installation fails an inspection?",
        answer:
          "If issues are identified during an inspection, they will be recorded in the report. We can explain the observations and, where requested, provide a quotation for any remedial work required."
      },
      {
        question: "Can you carry out electrical testing for commercial properties?",
        answer:
          "Yes. We can discuss electrical inspection and testing requirements for offices, shops and other commercial premises."
      }
    ]
  },

  {
    category: "Fire Alarm & Fire Safety",
    faqs: [
      {
        question: "Do you install fire alarm systems?",
        answer:
          "Yes. Eco Voltex provides fire alarm installation services for suitable residential and commercial properties. The recommended system will depend on the size, layout and requirements of the property."
      },
      {
        question: "Can you upgrade an existing fire alarm system?",
        answer:
          "Yes. We can assess an existing fire alarm installation and discuss whether repairs, upgrades or replacement may be required."
      },
      {
        question: "How many smoke or heat detectors do I need?",
        answer:
          "The number and type of detectors required depends on the property's layout, rooms, use and fire safety requirements. We can assess the property and recommend a suitable solution."
      },
      {
        question: "Do you provide fire alarm maintenance and testing?",
        answer:
          "We can discuss maintenance, testing and servicing requirements for existing fire alarm systems. Contact us with details of your current system for further information."
      }
    ]
  },

  {
    category: "CCTV & Security Systems",
    faqs: [
      {
        question: "Do you install CCTV systems?",
        answer:
          "Yes. Eco Voltex provides CCTV installation services for homes and businesses, helping customers improve security and monitor their property."
      },
      {
        question: "Can I view my CCTV cameras on my phone?",
        answer:
          "Many modern CCTV systems can be configured for remote viewing through a compatible mobile application, subject to the equipment and internet connection."
      },
      {
        question: "Can you upgrade my existing CCTV system?",
        answer:
          "Yes. We can assess your existing CCTV system and discuss suitable upgrade options, including improved camera coverage, higher resolution cameras or replacement equipment."
      },
      {
        question: "How many CCTV cameras do I need?",
        answer:
          "The number of cameras depends on the size and layout of the property and the areas you want to monitor. We can discuss your requirements and recommend suitable camera locations."
      },
      {
        question: "Do you install CCTV systems for businesses?",
        answer:
          "Yes. We provide CCTV solutions for homes, shops, offices and other commercial properties."
      }
    ]
  },

  {
    category: "Pricing & Quotations",
    faqs: [
      {
        question: "Do you provide free quotations?",
        answer:
          "Yes. We can provide a quotation for your project after discussing the requirements. For larger or more complex work, a site visit may be required before providing an accurate quotation."
      },
      {
        question: "How is the price of electrical work calculated?",
        answer:
          "The cost depends on several factors including the type of work, size of the project, materials required, access, existing installation and the time required to complete the work."
      },
      {
        question: "Will I know the cost before work starts?",
        answer:
          "Where possible, we aim to clearly explain the proposed work and provide the relevant quotation before work begins. If additional work is identified during the project, we will discuss this with you."
      },
      {
        question: "Do you provide quotations for commercial projects?",
        answer:
          "Yes. We can provide quotations for electrical, fire alarm and CCTV projects for commercial properties."
      }
    ]
  },

  {
    category: "Booking & Customer Support",
    faqs: [
      {
        question: "How do I book a service with Eco Voltex?",
        answer: (
          <>
            You can contact us through our website, phone or WhatsApp. Tell us about your property and the work you require, and our team will discuss the next steps with you.
            <br />
            <button
              style={{
                marginTop: "15px",
                background: "#ff5722",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 20px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "1rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>
          </>
        )
      },
      {
        question: "What information should I provide when requesting a quotation?",
        answer:
          "Please provide as much information as possible about the work you require, including the property type, location, description of the work and any relevant photographs or existing reports. This helps us understand your requirements and provide more accurate advice."
      },
      {
        question: "How quickly will Eco Voltex respond to my enquiry?",
        answer:
          "We aim to respond to enquiries as soon as possible. Response times may vary depending on workload and the nature of the enquiry."
      },
      {
        question: "Can I contact Eco Voltex through WhatsApp?",
        answer:
          "Yes. You can use the WhatsApp chat option on our website to contact us directly and discuss your requirements."
      },
      {
        question: "What if I am not sure which service I need?",
        answer:
          "No problem. Contact us and explain the issue or project you have. We will discuss your requirements and help you understand which service may be suitable."
      }
    ]
  }
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Header />
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h3 className="faq-category">{section.category}</h3>
          <div className="faq-list">
            {section.faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(sectionIndex + "-" + index)}>
                  {faq.question}
                  {openIndex === sectionIndex + "-" + index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div className={`faq-answer ${openIndex === sectionIndex + "-" + index ? "open" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default FAQPage;
