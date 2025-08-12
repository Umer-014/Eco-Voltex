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
      category: "General Questions",
      faqs: [
        { question: "What services does Eco Voltex provide?", answer: "We offer residential, commercial, and industrial electrical services, including fire alarm and CCTV installations, and electrical certifications." },
        { question: "Where is Eco Voltex located, and which areas do you serve?", answer: "We are based in the UK and provide services in London and the surrounding regions. Contact us to check availability in your area." },
        { question: "Are your electricians licensed and insured?", answer: "Yes, all our electricians are fully licensed, certified, and insured for your safety." }
      ],
    },
    {
      category: "Service-Related Questions",
      faqs: [
        { question: "How do I book an electrical service appointment?", answer: (
          <>
            You can book an appointment by calling us or using the 'Get in Touch' button or you can also press the WhatsApp chat icon to chat via WhatsApp.<br />
            <button
              style={{
                marginTop: '10px',
                background: '#ff5722',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 18px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </button>
          </>
        ) },
        { question: "Do you provide emergency electrical repair services?", answer: "Yes, we offer 24/7 emergency electrical repair services." },
        { question: "Can I get a free consultation or quote before hiring your services?", answer: "Yes, we provide free consultations and quotes for our services." },
        { question: "What is included in your electrical certification service?", answer: "Our certification service includes inspection, testing, and compliance verification for electrical installations." },
      ],
    },
    {
      category: "Pricing & Payment Questions",
      faqs: [
        { question: "How are your service charges calculated?", answer: "Service charges depend on the complexity of the work, materials used, and time required." },
        { question: "Do you offer flexible payment options or installment plans?", answer: "Yes, we provide multiple payment options and installment plans for large projects." },
      ],
    },
    {
      category: "Technical & Safety Questions",
      faqs: [
        { question: "What safety measures do you follow during installations?", answer: "We follow strict safety guidelines, including proper grounding, circuit protection, and compliance with local regulations." },
        { question: "What should I do in case of an electrical emergency?", answer: "Turn off the power source if possible, avoid touching electrical components, and call our emergency service immediately." },
        { question: "How often should I get my wiring or electrical system inspected?", answer: "It is recommended to get your electrical system inspected every 3-5 years or sooner if you experience issues." }
      ],
    },
    {
      category: "Website & Customer Support",
      faqs: [
        {
          question: "How can I contact Eco Voltex for support?",
          answer: (
            <>
              You can reach us via phone, email, or WhatsApp using the 'Get in Touch' button on our website.<br />
              <button
                style={{
                  marginTop: '10px',
                  background: '#ff5722',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </button>
            </>
          )
        },
        {
          question: "How do I use the WhatsApp chat feature on your website?",
          answer: "Click the WhatsApp chat icon at the bottom right of the website to instantly start a conversation with our support team."
        },
        {
          question: "Is my personal information safe when I contact you through the website?",
          answer: "Absolutely. We use secure protocols to protect your data and never share your information with third parties."
        },
        {
          question: "How quickly can I expect a response from customer support?",
          answer: "We aim to respond to all inquiries within 1 business day. For urgent matters, please use the WhatsApp chat or call us directly."
        },
        {
          question: "What should I do if I have trouble using the website or booking a service?",
          answer: (
            <>
              If you encounter any issues, please contact us via the WhatsApp chat, email, or the 'Get in Touch' button. Our support team is happy to assist you.<br  />
              <button
                style={{
                  marginTop: '10px',
                  background: '#ff5722',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Get in Touch
              </button>
            </>
          )
        },
      ],
    },
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
