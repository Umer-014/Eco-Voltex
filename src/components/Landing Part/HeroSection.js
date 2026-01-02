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

  const navigateTo = (path) => navigate(path);

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2600,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const serviceTiles = [
    {
      key: "electrical",
      title: "Electrical Installations & Upgrades",
      tag: "Homes & Businesses",
      text: "Rewires, new circuits, containment and consumer units to BS 7671.",
      linkLabel: "View electrical services",
      path: "/services/Electrical-Installation-Maintenance",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1764613806/20251201_2323_Eco_Energy_Illustration_remix_01kbdjc4q0f2vayyppswy3sa31_dlrchb.png",
    },
    {
      key: "emergency",
      title: "24/7 Emergency Electrician",
      tag: "1-Hour Aim",
      text: "Fault-finding, make-safe & repairs for loss of power, burning, tripping and more.",
      linkLabel: "See emergency options",
      path: "/services/emergency-electrical",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1764613919/20251201_2325_Futuristic_Electrical_Emergency_Scene_remix_01kbdjen2vf9w98300a6fphk62_1_aeuopm.png",
    },
    {
      key: "fire",
      title: "Fire Alarms & Life Safety",
      tag: "BS 5839-1 / -6",
      text: "Design, installation, commissioning & maintenance for HMOs and commercial sites.",
      linkLabel: "Explore fire alarm page",
      path: "/services/Fire-alarms",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1759097756/ChatGPT_Image_Sep_29_2025_03_14_50_AM_xruenn.png",
    },
    {
      key: "pat",
      title: "PAT Testing Programmes",
      tag: "Offices, Retail, Education",
      text: "Risk-based PAT testing with asset registers, CSV exports and clear reports.",
      linkLabel: "View PAT testing",
      path: "/services/PAT-testing",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1757788696/ChatGPT_Image_Sep_13_2025_11_37_58_PM_blssbd.png",
    },
    {
      key: "cctv",
      title: "CCTV & Security",
      tag: "Homes & Business",
      text: "Neat PoE CCTV systems with secure storage and privacy best practice.",
      linkLabel: "View CCTV page",
      path: "/services/CCTV",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1757790538/ChatGPT_Image_Sep_14_2025_12_08_45_AM_lmyc78.png",
    },

    {
      key: "booking",
      title: "Instant Quote & Booking",
      tag: "Online Wizard",
      text: "Build EICR, PAT, fire or emergency quotes in minutes — sent straight to WhatsApp.",
      linkLabel: "Use booking wizard",
      path: "/book now",
      image:
        "https://res.cloudinary.com/dug1siluu/image/upload/v1764085502/20251125_2042_Modern_Electrical_Workspace_Banner_simple_compose_01kaxtree2fykv11a2qkc4ar7z_rvc6l6.png",
    },
  ];

  const stats = [
    {
      label: "Projects completed",
      value: "1,000+",
      hint: "EICR, PAT, upgrades and alarms",
    },
    {
      label: "Emergency response aim",
      value: "< 2 hrs",
      hint: "Call-outs across Greater London",
    },
    {
      label: "Service area",
      value: "London + M25",
      hint: "32 boroughs and nearby towns",
    },
  ];

  const testimonials = [
    {
      quote:
        "Eco Voltex handled our office upgrade, fire alarm and PAT with zero hassle. One team, everything sorted.",
      name: "Sarah J.",
      role: "Business Owner, Central London",
    },
    {
      quote:
        "They upgraded the consumer unit, completed the EICR and guided me as a landlord. Very clear and professional.",
      name: "Michael B.",
      role: "Landlord, West London",
    },
    {
      quote:
        "Perfect for multi-site PAT and testing. CSVs dropped straight into our CAFM system.",
      name: "Linda K.",
      role: "Facilities Manager, Retail Group",
    },
    {
      quote:
        "Emergency electrician arrived within the hour and got our restaurant back trading the same evening.",
      name: "James T.",
      role: "Restaurant Owner, Croydon",
    },
    {
      quote:
        "Fire alarm works, electrical upgrades and documentation were all neat and aligned with BS standards.",
      name: "Priya S.",
      role: "Property Manager, Uxbridge",
    },
    {
      quote:
        "From the first WhatsApp to final certificate, communication was brilliant. Highly recommended.",
      name: "Omar R.",
      role: "Homeowner, East London",
    },
  ];

  const previewBlocks = [
    {
      key: "fire-preview",
      title: "Fire Alarms That Stand Up To Scrutiny",
      text: "L1–L5, P1–P2 and Grade A–D/LD systems, with documentation your consultants will respect.",
      cta: "Open fire alarm page",
      path: "/services/Fire-alarms",
    },
    {
      key: "pat-preview",
      title: "PAT Testing Built For Audits",
      text: "Detailed CSVs, asset IDs and clear defect notes — ideal for schools, offices and portfolios.",
      cta: "See PAT testing page",
      path: "/services/PAT-testing",
    },
    {
      key: "cctv-preview",
      title: "CCTV That Looks Good And Works Hard",
      text: "Smart coverage, neat cabling and privacy-aware recording for homes and businesses.",
      cta: "Explore CCTV page",
      path: "/services/CCTV",
    },
  ];

  const heroBullets =
    audience === "home"
      ? [
          "Safe, tidy work in homes, flats and HMOs",
          "Consumer units, EICRs, PAT and smoke/heat alarms",
          "24/7 emergency support when something fails",
        ]
      : [
          "Planned testing, maintenance and upgrades",
          "Fire alarms, distribution, lighting and PAT programmes",
          "Reports your insurers and auditors can trust",
        ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-glow" />
        <div className="home-hero-inner">
          {/* LEFT */}
          <motion.div
            className="home-hero-left"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="home-badge-row">
              <div className="home-badge-chip">
                Eco Voltex • NAPIT Approved • Fully Insured
              </div>
            </div>

            <h1 id="home-hero-title">
              Eco Voltex{" "}
              <span className="home-hero-highlight">
                Sustainable Electrical Solutions
              </span>
              .
            </h1>

            <p className="home-hero-sub">
              We design, install and maintain{" "}
              <strong>
                electrical systems,<strong>emergency protection</strong>, fire
                alarms, CCTV and PAT
              </strong>{" "}
              so your home or business stays safe, compliant and efficient.
            </p>

            {/* Audience toggle */}
            <div
              className="home-toggle"
              role="tablist"
              aria-label="Choose services for home or business"
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

            {/* CTAs */}
            <div className="home-hero-ctas">
              <button
                className="home-btn home-btn--primary"
                onClick={() => navigateTo("/book now")}
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
              BS 7671 • BS 5839 • BS 5266 • IET Code of Practice — every job
              tested, labelled and documented.
            </div>
          </motion.div>

          {/* RIGHT VISUAL PILLAR */}
          <motion.div
            className="home-hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="home-hero-panel">
              <div className="home-hero-panel-header">
                <span className="home-status-dot" aria-hidden="true" />
                <span className="home-status-text">Eco Voltex service hub</span>
                <span className="home-status-pill">Slots this week</span>
              </div>

              <div className="home-hero-panel-body">
                <div className="home-hero-panel-main">
                  <h3>Electrical & Fire Compliance Bundle</h3>
                  <p>
                    Bring{" "}
                    <strong>
                      EICR, PAT, fire alarms and emergency lighting
                    </strong>{" "}
                    into one planned visit, with less disruption and clear
                    reports at the end.
                  </p>
                  <div className="home-hero-panel-tags">
                    <span>Homes & businesses</span>
                    <span>Single & multi-site</span>
                    <span>Digital reports & WhatsApp updates</span>
                  </div>
                  <button
                    className="home-link-btn"
                    onClick={() => navigateTo("/book-now")}
                  >
                    Build my bundle →
                  </button>
                </div>

                <div className="home-hero-panel-grid">
                  <div className="home-mini-card">
                    <p className="home-mini-label">Fire & Life Safety</p>
                    <p className="home-mini-text">
                      BS 5839 fire alarm design, installation and maintenance
                      with zone charts, asset lists and logbooks.
                    </p>
                    <button
                      className="home-mini-link"
                      onClick={() => navigateTo("/services/Fire-alarms")}
                    >
                      Open fire alarm page →
                    </button>
                  </div>

                  <div className="home-mini-card">
                    <p className="home-mini-label">Testing & PAT</p>
                    <p className="home-mini-text">
                      EICR and PAT programmes aligned with EAWR 1989 and IET
                      Code of Practice, with tidy certificates and CSVs.
                    </p>
                    <button
                      className="home-mini-link"
                      onClick={() => navigateTo("/services/PAT-testing")}
                    >
                      Open PAT testing page →
                    </button>
                  </div>

                  <div className="home-mini-card">
                    <p className="home-mini-label">Emergency Call-Out</p>
                    <p className="home-mini-text">
                      Make-safe first, then repairs — clear notes for your
                      records and insurers after every call-out.
                    </p>
                    <button
                      className="home-mini-link"
                      onClick={() =>
                        navigateTo("/services/emergency-electrical")
                      }
                    >
                      Open emergency page →
                    </button>
                  </div>

                  <div className="home-mini-card">
                    <p className="home-mini-label">Coverage</p>
                    <p className="home-mini-text">
                      Greater London and nearby towns. Check if Eco Voltex
                      covers your postcode in seconds.
                    </p>
                    <button
                      className="home-mini-link"
                      onClick={() => navigateTo("/locations")}
                    >
                      View areas we cover →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE TILES (all main pages) */}
      <section className="home-section" aria-labelledby="home-services-title">
        <div className="home-section-header">
          <h2 id="home-services-title">
            Everything You Need In One Contractor
          </h2>
          <p>
            Instead of juggling different electricians, PAT testers and fire
            alarm firms, Eco Voltex delivers a joined-up service with neat
            installs and audit-ready paperwork.
          </p>
        </div>

        <div className="home-tile-grid">
          {serviceTiles.map((svc) => (
            <motion.article
              key={svc.key}
              className="home-tile"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              role="button"
              tabIndex={0}
              onClick={() => navigateTo(svc.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigateTo(svc.path);
                }
              }}
            >
              <h3 className="home-tile-title">{svc.title}</h3>

              {svc.image && (
                <div className="home-tile-image-wrap">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    className="home-tile-image"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="home-tile-text">{svc.text}</p>

              <span className="home-link-btn">{svc.linkLabel} →</span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* STRIP CTA */}
      <section className="home-strip">
        <div className="home-strip-content">
          <h2>Your Safety. Our Expertise. One Clear Plan.</h2>
          <p>
            Tell us your goals — Eco Voltex designs safe, efficient and
            sustainable systems that minimise downtime and maximise long-term
            reliability.
          </p>
        </div>
        <div className="home-strip-ctas">
          <button
            className="home-btn home-btn--primary"
            style={{ marginBottom: "10px" }}
            onClick={() => navigateTo("/book now")}
          >
            Start Booking Wizard
          </button>
          <button
            className="home-btn home-btn--ghost home-btn--ghost-light"
            style={{ marginBottom: "10px" }}
            onClick={() => navigateTo("/contact")}
          >
            Email us your requirements
          </button>
          <button
            className="home-btn home-btn--ghost home-btn--ghost-light"
            onClick={() => navigateTo("/areas-we-cover")}
          >
            Check service coverage
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="home-testimonials"
        aria-labelledby="home-testimonials-title"
      >
        <h2 id="home-testimonials-title">What Clients Say About Eco Voltex</h2>
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
