import { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./CCTV.css";
import { useNavigate } from "react-router-dom";

const categorizedFaqs = [
  {
    category: "General CCTV Screen FAQs",
    description: "Essential information about CCTV screens and their functions.",
    faqs: [
      {
        question: "What is a CCTV screen, and how does it work?",
        answer:
          "A CCTV screen displays live or recorded footage from security cameras connected through DVR or NVR systems.",
      },
      {
        question: "Can I use any monitor as a CCTV screen?",
        answer:
          "Yes, most standard monitors and TVs with HDMI or VGA input can be used as CCTV screens if they match the DVR/NVR output.",
      },
      {
        question: "How many cameras can I view on one CCTV screen?",
        answer:
          "Depending on the DVR/NVR and screen size, you can view 4, 8, 16, or more camera feeds simultaneously using split-screen modes.",
      },
      {
        question: "Is there a delay in the live video feed on CCTV screens?",
        answer:
          "Minimal delay may occur due to processing time, especially with IP cameras or wireless systems, but it's usually under 1 second.",
      },
      {
        question: "Can I view my CCTV feed remotely on my phone or computer?",
        answer:
          "Yes, most modern CCTV systems offer mobile or desktop apps that allow remote live viewing and playback via the internet.",
      },
    ],
  },
  {
    category: "CCTV Screen Installation FAQs",
    description:
      "Details about setup, positioning, and compatibility during installation.",
    faqs: [
      {
        question: "What is the ideal location for installing a CCTV screen?",
        answer:
          "Install the screen in a secure control room or near the entrance where staff can easily monitor camera feeds.",
      },
      {
        question: "What cables are needed to connect a CCTV screen?",
        answer:
          "HDMI or VGA cables are commonly used. For long distances, HDMI extenders or coaxial connections might be required.",
      },
      {
        question: "Can I wall-mount my CCTV screen?",
        answer:
          "Yes, most CCTV monitors support wall mounting with standard VESA brackets. Ensure cable management is considered.",
      },
      {
        question: "Do I need a power backup (UPS) for the CCTV screen?",
        answer:
          "A UPS is recommended to keep the screen and system running during power outages and prevent damage.",
      },
      {
        question: "How do I connect multiple screens to a single CCTV system?",
        answer:
          "You can use HDMI splitters or DVR/NVR systems with multiple video outputs to connect multiple screens.",
      },
    ],
  },
  {
    category: "CCTV Screen Testing FAQs",
    description:
      "How to verify system functionality and fix common video issues.",
    faqs: [
      {
        question: "How can I test if my CCTV screen is working properly?",
        answer:
          "Check power, input source (HDMI/VGA), and connection to the DVR/NVR. Try plugging in another device to test the screen.",
      },
      {
        question: "Why is my CCTV screen showing 'No Signal'?",
        answer:
          "Check if the DVR/NVR is powered on, cables are secure, and the correct input source is selected on the monitor.",
      },
      {
        question: "How do I test the connection between the camera and the screen?",
        answer:
          "Verify the DVR/NVR input, cable continuity, and that the camera is powered. You should see the feed on the screen.",
      },
      {
        question: "Is there a way to test the screen resolution and frame rate?",
        answer:
          "Use the DVR/NVR settings to view resolution settings. You may also test using a computer to confirm the monitor specs.",
      },
      {
        question: "Why is there no video feed even though the DVR is on?",
        answer:
          "It could be due to a faulty cable, incorrect input setting, or a damaged DVR output port. Test with another screen if needed.",
      },
    ],
  },
  {
    category: "CCTV Screen Maintenance FAQs",
    description: "Tips to maintain screen quality and prevent system failure.",
    faqs: [
      {
        question: "How often should I clean my CCTV screen?",
        answer:
          "Clean the screen monthly using a microfiber cloth and screen-safe cleaner to avoid dust buildup and smudges.",
      },
      {
        question: "What should I do if the screen starts flickering?",
        answer:
          "Check the cable connections and try another HDMI/VGA cable. Also verify if the power supply is stable.",
      },
      {
        question: "How can I prevent burn-in or ghost images?",
        answer:
          "Avoid displaying static images for long periods. Use screensavers or motion screen modes if supported.",
      },
      {
        question: "Can I use surge protectors or stabilizers with the CCTV screen?",
        answer:
          "Yes, it’s highly recommended to protect against voltage fluctuations that can damage the screen or power supply.",
      },
      {
        question: "What are the signs that my CCTV screen needs replacement?",
        answer:
          "Frequent flickering, no display, discoloration, or dead pixels indicate that your screen may need to be replaced.",
      },
    ],
  },
];


const CCTV = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Navigates to the given path
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
    <div>
      <Header />

      <div className="CCTV-service-container">
        {/* Hero Section */}
        <div className="CCTV-hero-section">
          <h1 className="h1">CCTV Security</h1>
          <p className="CCTV-subtitle">
            Protect what matters most with smart CCTV solutions that deter crime
            and ensure peace of mind.
          </p>
        </div>

        {/* What We Do Section */}
        <section className="cctv-what-we-do">
          <h2>What We Do</h2>

          <div className="cctv-card-container">
            <div className="cctv-card">
              <h3> Camera Installation & Setup</h3>
              <ul>
                <li>
                  <strong>Seamless Camera Installation</strong>
                </li>
                <li>
                  <strong>Professional Wiring & Configuration</strong>
                </li>
                <li>
                  <strong>Power Over Ethernet (PoE) Integration</strong>
                </li>
              </ul>
            </div>

            <div className="cctv-card">
              <h3> NVR/DVR Setup & Integration</h3>
              <ul>
                <li>
                  <strong>Advanced NVR Systems</strong>
                </li>
                <li>
                  <strong>Reliable DVR Solutions</strong>
                </li>
                <li>
                  <strong>Comprehensive System Integration</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="cctv-card-container">
            <div className="cctv-card">
              <h3> Maintenance & Support</h3>
              <ul>
                <li>
                  <strong>Continuous Maintenance</strong>
                </li>
                <li>
                  <strong>Instant Technical Support</strong>
                </li>
              </ul>
            </div>

            <div className="cctv-card">
              <h3> Security Solutions</h3>
              <ul>
                <li>
                  <strong>Personalized Security Design</strong>
                </li>
                <li>
                  <strong>Remote Monitoring</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="cctv-why-choose">
          <h2>Why Choose Our CCTV Systems?</h2>
          <ul>
            <li>
              <strong>Crime Deterrence</strong>
            </li>
            <li>
              <strong>Remote Monitoring</strong>
            </li>
            <li>
              <strong>Legal Compliance</strong>
            </li>
            <li>
              <strong>Future-Proof Tech</strong>
            </li>
          </ul>
        </section>

        {/* What Action to Take */}
        <section className="cctv-action-steps">
          <h2>What You Get With Us</h2>

          <div className="cctv-action-grid">
            {/* Before Installation */}
            <div className="cctv-action-card">
              <h3>Before Installation</h3>
              <ul>
                <li>
                  <strong>On-Site Survey:</strong> We visit your location to
                  assess coverage, lighting, and camera placement.
                </li>
                <li>
                  <strong>Customized Planning:</strong> We design a tailored
                  CCTV solution based on your specific needs.
                </li>
                <li>
                  <strong>Wiring & Power Check:</strong> We evaluate existing
                  wiring and power sources for smooth integration.
                </li>
                <li>
                  <strong>Privacy & Legal Advice:</strong> We guide you on GDPR
                  compliance and proper signage placement.
                </li>
              </ul>
            </div>

            {/* After Installation */}
            <div className="cctv-action-card">
              <h3>After Installation</h3>
              <ul>
                <li>
                  <strong>Full System Setup:</strong> Cameras, NVR/DVR, PoE, and
                  app integration — all configured & tested.
                </li>
                <li>
                  <strong>Live Monitoring Access:</strong> Get remote access via
                  smartphone or PC from anywhere, anytime.
                </li>
                <li>
                  <strong>Customer Training:</strong> We teach you how to use
                  your system, playback footage, and manage alerts.
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Fast tech support and
                  optional maintenance plans for peace of mind.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="cctv-upgrade-section">
          <h3>Time to Upgrade Your CCTV System?</h3>
          <div className="cctv-upgrade-content">
            <h4 className="cctv-red-flags">
              Experiencing These CCTV Issues? Let’s Fix Them!
            </h4>
            <ul className="cctv-red-flags-list">
              <li>Blurry or Outdated Footage</li>
              <li>Frequent System Freezes</li>
              <li>Broken or Exposed Wiring</li>
              <li>No Night Vision</li>
              <li>Camera Not Recording</li>
              <li>Unstable Connection</li>
              <li>Outdated DVR/NVR</li>
              <li>No Remote Access</li>
              <li>Low Storage Capacity</li>
              <li>Physical Damage to Cameras</li>
            </ul>
            <button
              className="cctv-book-button"
              onClick={() => navigateTo("/contact")}
            >
              Book Now – Secure Your Property Today!
            </button>
          </div>
        </section>
        {/* FAQs Section */}
        <section className="cctv-faq-section">
          <h3>FAQs</h3>
          {categorizedFaqs.map((cat, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h4>{cat.category}</h4>
              <div className="cctv-faq">
                {cat.faqs
                  .slice(0, expandedCategories[catIndex] ? cat.faqs.length : 3)
                  .map((faq, faqIndex) => (
                    <div key={faqIndex} className="cctv-faq-item">
                      <button
                        className="cctv-faq-question"
                        onClick={() => toggleFAQ(catIndex, faqIndex)}
                      >
                        {faq.question}
                        <span className="cctv-faq-icon">
                          {activeFAQIndex[catIndex] === faqIndex ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`cctv-faq-answer ${
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
    </div>
  );
};

export default CCTV;
