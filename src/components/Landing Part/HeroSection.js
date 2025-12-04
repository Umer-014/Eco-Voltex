// HeroSection.js
import "./HeroSection.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const [audience, setAudience] = React.useState("home");

  const navigateTo = (path) => {
    navigate(path);
  };

  // Testimonials slider
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroBullets =
    audience === "home"
      ? [
          "Neat, certified work for homes & HMOs",
          "EICR, PAT, fire alarms & consumer units",
          "Emergency electricians — evenings & weekends",
        ]
      : [
          "Planned maintenance & emergency call-outs",
          "Fire alarms, CCTV, distribution & containment",
          "Asset lists, certificates and clear reporting",
        ];

  const serviceTiles = [
    {
      key: "electrical",
      title: "Electrical Installations & Upgrades",
      tag: "Homes & Businesses",
      text: "Rewires, new circuits, consumer units and upgrades to BS 7671.",
      linkLabel: "View electrical services",
      path: "/services/Installation-Maintenance",
    },
    {
      key: "fire",
      title: "Fire Alarms & Life Safety",
      tag: "Fire & HMO Compliance",
      text: "Design, installation, commissioning & maintenance to BS 5839-1/-6.",
      linkLabel: "Explore fire alarm services",
      path: "/services/Fire-alarms",
    },
    {
      key: "pat",
      title: "PAT Testing & Compliance",
      tag: "Offices, Retail, Schools",
      text: "Risk-based PAT programmes with asset registers and clear reports.",
      linkLabel: "View PAT testing",
      path: "/services/PAT-testing",
    },
    {
      key: "cctv",
      title: "CCTV & Security Systems",
      tag: "Home & Business",
      text: "Smart CCTV systems with neat cabling, storage and cyber best practice.",
      linkLabel: "View CCTV services",
      path: "/services/CCTV",
    },
    {
      key: "emergency",
      title: "24/7 Emergency Electrician",
      tag: "1-Hour Response",
      text: "Rapid fault finding, make-safe and repairs across Greater London.",
      linkLabel: "See emergency options",
      // Adjust route to match your router if different:
      path: "/services/emergency-electrical",
    },
    {
      key: "booking",
      title: "Instant Quote & Booking",
      tag: "Online Wizard",
      text: "Build your EICR, PAT, fire or emergency quote in minutes.",
      linkLabel: "Use booking wizard",
      path: "/book-now",
    },
  ];

  const testimonials = [
    {
      quote:
        "Eco Voltex provided outstanding electrical services for our office in London. Professional, efficient and friendly.",
      name: "Sarah J.",
      role: "Business Owner, London",
    },
    {
      quote:
        "Quick response and excellent workmanship. I feel much safer with the new fire alarm system.",
      name: "Michael B.",
      role: "Homeowner, London",
    },
    {
      quote:
        "PAT testing was quick, thorough and well documented. Ideal for our portfolio of properties.",
      name: "Linda K.",
      role: "Landlord, London",
    },
    {
      quote:
        "Emergency electrician arrived within the hour and got us trading again the same evening.",
      name: "James T.",
      role: "Restaurant Owner, London",
    },
    {
      quote:
        "From first call to certification, everything was clear and compliant. They’re now our go-to contractor.",
      name: "Priya S.",
      role: "Shop Manager, London",
    },
    {
      quote:
        "They upgraded our lighting and helped us cut running costs without disruption to staff.",
      name: "Omar R.",
      role: "Office Manager, London",
    },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-gradient" />
        <div className="home-hero-container">
          <motion.div
            className="home-hero-left"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="london-badge" aria-label="Service area">
              London & Nearby Counties •{" "}
              <span>24/7 Electrical & Fire Safety</span>
            </div>

            <h1 id="home-hero-title">
              Electrical, Fire & Safety —{" "}
              <span className="home-hero-highlight">Done Properly</span>.
            </h1>

            <p className="home-hero-sub">
              Eco Voltex delivers neat, standards-led electrical work, fire
              alarms, CCTV, PAT testing and emergency call-outs for{" "}
              <strong>homes, landlords and businesses</strong>.
            </p>

            {/* Audience toggle */}
            <div
              className="home-toggle"
              role="tablist"
              aria-label="Choose Home or Business services"
            >
              <button
                className={`home-toggle-btn ${
                  audience === "home" ? "home-toggle-btn--active" : ""
                }`}
                role="tab"
                aria-selected={audience === "home"}
                onClick={() => setAudience("home")}
              >
                Home & Landlords
              </button>
              <button
                className={`home-toggle-btn ${
                  audience === "business" ? "home-toggle-btn--active" : ""
                }`}
                role="tab"
                aria-selected={audience === "business"}
                onClick={() => setAudience("business")}
              >
                Business & Facilities
              </button>
            </div>

            <ul className="home-hero-bullets">
              {heroBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="home-hero-ctas">
              <button
                className="home-btn home-btn--primary"
                onClick={() => navigateTo("/book-now")}
              >
                Get Instant Quote & Booking
              </button>
              <button
                className="home-btn home-btn--ghost"
                onClick={() => navigateTo("/contact")}
              >
                Talk To An Engineer
              </button>
            </div>

            <div className="home-hero-meta">
              NAPIT Approved • BS 7671 / BS 5839 / IET CoP aligned • Fully
              insured
            </div>
          </motion.div>

          <motion.div
            className="home-hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="home-hero-card-grid"
              aria-label="Key services overview"
            >
              <div className="home-hero-card home-hero-card--primary">
                <h3>Compliance Bundle</h3>
                <p>
                  EICR, PAT, fire alarms & emergency lighting for single or
                  multi-site.
                </p>
                <button
                  className="home-link-btn"
                  onClick={() => navigateTo("/book-now")}
                >
                  Build my quote →
                </button>
              </div>
              <div className="home-hero-card">
                <h4>Fire & Life Safety</h4>
                <p>
                  Fire alarms to BS 5839-1/-6, maintenance and documentation.
                </p>
                <button
                  className="home-link-btn"
                  onClick={() => navigateTo("/services/Fire-alarms")}
                >
                  Fire alarm page →
                </button>
              </div>
              <div className="home-hero-card">
                <h4>Emergency Call-Outs</h4>
                <p>1-hour rapid response across London for urgent faults.</p>
                <button
                  className="home-link-btn"
                  onClick={() => navigateTo("/services/emergency-electrical")}
                >
                  Emergency page →
                </button>
              </div>
              <div className="home-hero-card">
                <h4>Check Coverage</h4>
                <p>We cover London postcodes and nearby counties.</p>
                <button
                  className="home-link-btn"
                  onClick={() => navigateTo("/locations")}
                >
                  View areas we cover →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE TILES (showing all main pages) */}
      <section className="home-section" aria-labelledby="home-services-title">
        <div className="home-section-header">
          <h2 id="home-services-title">
            All Your Electrical & Safety Needs In One Place
          </h2>
          <p>
            From small domestic faults to multi-site compliance programmes, Eco
            Voltex brings the same neat workmanship and clear documentation
            across every service.
          </p>
        </div>

        <div className="home-tile-grid">
          {serviceTiles.map((svc) => (
            <motion.article
              key={svc.key}
              className="home-tile"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="home-tile-tag">{svc.tag}</div>
              <h3 className="home-tile-title">{svc.title}</h3>
              <p className="home-tile-text">{svc.text}</p>
              <button
                className="home-link-btn"
                onClick={() => navigateTo(svc.path)}
              >
                {svc.linkLabel} →
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* STRIP CTA */}
      <section className="home-strip">
        <div className="home-strip-content">
          <div>
            <h2>Ready To Get Started?</h2>
            <p>
              Use the instant booking wizard, or send your plans and we’ll
              propose the right electrical, fire and testing package.
            </p>
          </div>
          <div className="home-strip-ctas">
            <button
              className="home-btn home-btn--primary"
              onClick={() => navigateTo("/book-now")}
            >
              Start Booking Wizard
            </button>
            <button
              className="home-btn home-btn--ghost"
              onClick={() => navigateTo("/contact")}
            >
              Email us your requirements
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="home-testimonials"
        aria-labelledby="home-testimonials-title"
      >
        <h2 id="home-testimonials-title">What Our Clients Say</h2>
        <Slider className="home-testimonials-row" {...testimonialSettings}>
          {testimonials.map((t) => (
            <div className="home-testimonial" key={t.name}>
              <p className="home-testimonial-quote">“{t.quote}”</p>
              <div className="home-client-info">
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default HeroSection;
