import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Flame,
  MapPin,
  Plug,
  ShieldCheck,
  Siren,
  Zap,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

const services = [
  {
    key: "electrical",
    icon: Plug,
    title: "Electrical Installations",
    tag: "Homes & business",
    text: "Rewires, consumer units, lighting, circuits and planned maintenance.",
    path: "/services/Electrical-Installation-Maintenance",
    image:
      "https://res.cloudinary.com/dug1siluu/image/upload/v1764613806/20251201_2323_Eco_Energy_Illustration_remix_01kbdjc4q0f2vayyppswy3sa31_dlrchb.png",
  },
  {
    key: "emergency",
    icon: Siren,
    title: "Emergency Electrician",
    tag: "24/7 response",
    text: "Fast make-safe visits for tripping circuits, power loss and urgent faults.",
    path: "/services/Emergency-Electrical",
    image:
      "https://res.cloudinary.com/dug1siluu/image/upload/v1764613919/20251201_2325_Futuristic_Electrical_Emergency_Scene_remix_01kbdjen2vf9w98300a6fphk62_1_aeuopm.png",
  },
  {
    key: "fire",
    icon: Flame,
    title: "Fire Alarm Systems",
    tag: "BS 5839",
    text: "Design, installation, commissioning and maintenance for compliant sites.",
    path: "/services/Fire-alarms",
    image:
      "https://res.cloudinary.com/dug1siluu/image/upload/v1759097756/ChatGPT_Image_Sep_29_2025_03_14_50_AM_xruenn.png",
  },
  {
    key: "cctv",
    icon: Camera,
    title: "CCTV & Security",
    tag: "Smart protection",
    text: "Clean camera installs, secure storage and reliable coverage planning.",
    path: "/services/CCTV",
    image:
      "https://res.cloudinary.com/dug1siluu/image/upload/v1757790538/ChatGPT_Image_Sep_14_2025_12_08_45_AM_lmyc78.png",
  },
  {
    key: "pat",
    icon: ClipboardCheck,
    title: "PAT Testing",
    tag: "Audit ready",
    text: "Asset registers, CSV exports and clear risk-based test reports.",
    path: "/services/PAT-testing",
    image:
      "https://res.cloudinary.com/dug1siluu/image/upload/v1757788696/ChatGPT_Image_Sep_13_2025_11_37_58_PM_blssbd.png",
  },
];

const credentials = [
  { icon: Award, label: "NAPIT approved" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Clock3, label: "24/7 support" },
  { icon: MapPin, label: "London & M25" },
];

const steps = [
  [
    "01",
    "Tell us what you need",
    "Share the site type, urgency and compliance goal.",
  ],
  ["02", "Engineer attends", "We test, install or repair with tidy workmanship."],
  ["03", "Clear report", "You receive photos, notes, certificates and next steps."],
];



const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3200,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 720, settings: { slidesToShow: 1 } },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const navigate = useNavigate();
  const goTo = (path) => navigate(path);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // API Gateway Base URL configuration
  const API_BASE = process.env.REACT_APP_API_GATEWAY_URL ;
  const CLEAN_BASE = API_BASE.endsWith('/') ? API_BASE : `${API_BASE}/`;

  useEffect(() => {
    const fetchLiveFeedbacks = async () => {
      try {
        const response = await fetch(`${CLEAN_BASE}get-response`);
        const data = await response.json();
        if (response.ok) {
          const results = Array.isArray(data) ? data : data.feedbacks || [];
          setTestimonials(results);
        }
      } catch (error) {
        console.error("Failed to fetch live feedbacks for Hero section", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveFeedbacks();
  }, [CLEAN_BASE]);

  return (
    <main className="ev-home">
      <section className="ev-hero" aria-labelledby="ev-hero-title">
        <div className="ev-hero__shade" />
        <div className="ev-shell ev-hero__grid">
          <motion.div
            className="ev-hero__copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="ev-kicker">
              <Zap size={16} aria-hidden="true" />
              Electrical, fire and security specialists
            </span>
            <h1 id="ev-hero-title">
              Safer, smarter electrical work for London properties.
            </h1>
            <p>
              Eco Voltex delivers electrical installations, emergency repairs,
              fire alarms, CCTV and PAT testing for homes, landlords and
              businesses that need work done properly.
            </p>

            <div className="ev-hero__actions">
              <button
                className="ev-button ev-button--primary"
                onClick={() => goTo("/Book Now")}
              >
                Get a quote
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <button
                className="ev-button ev-button--ghost"
                onClick={() => goTo("/contact")}
              >
                Speak to an engineer
              </button>
            </div>

            <div
              className="ev-hero__credentials"
              aria-label="Eco Voltex credentials"
            >
              {credentials.map(({ icon: Icon, label }) => (
                <span key={label}>
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="ev-hero__visual"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://res.cloudinary.com/dug1siluu/image/upload/v1764085502/20251125_2042_Modern_Electrical_Workspace_Banner_simple_compose_01kaxtree2fykv11a2qkc4ar7z_rvc6l6.png"
              alt="Eco Voltex electrical engineer workspace"
            />
            <div className="ev-hero__card ev-hero__card--top">
              <strong>24/7</strong>
              <span>Emergency response available</span>
            </div>
            <div className="ev-hero__card ev-hero__card--bottom">
              <strong>1,000+</strong>
              <span>Projects, tests and call-outs completed</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ev-services" aria-labelledby="ev-services-title">
        <div className="ev-shell">
          <div className="ev-section-head">
            <span className="ev-kicker">Our services</span>
            <h2 id="ev-services-title">One trusted contractor for the whole site.</h2>
            <p>
              Clear routes into every core service, with strong visuals and
              quick actions for visitors who already know what they need.
            </p>
          </div>

          <div className="ev-services__grid">
            {services.map(({ icon: Icon, ...service }) => (
              <motion.article
                className={`ev-service-card ev-service-card--${service.key}`}
                key={service.key}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => goTo(service.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goTo(service.path);
                  }
                }}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="ev-service-card__overlay" />
                <div className="ev-service-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="ev-service-card__content">
                  <span>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="ev-service-card__link">
                    View service
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-process">
        <div className="ev-shell ev-process__grid">
          <div className="ev-process__copy">
            <span className="ev-kicker">How it works</span>
            <h2>From first call to final certificate.</h2>
            <p>
              No confusing handover, no messy paperwork. Just a professional
              visit, clear communication and documentation you can keep.
            </p>
            <button
              className="ev-button ev-button--dark"
              onClick={() => goTo("/areas-we-cover")}
            >
              Check areas we cover
            </button>
          </div>

          <div className="ev-process__cards">
            {steps.map(([number, title, text]) => (
              <article key={number} className="ev-step-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-cta">
        <div className="ev-shell ev-cta__inner">
          <div>
            <span className="ev-kicker">Ready when you are</span>
            <h2>Book a visit or send your requirements today.</h2>
          </div>
          <div className="ev-cta__actions">
            <button
              className="ev-button ev-button--primary"
              onClick={() => goTo("/Book Now")}
            >
              Start booking
              <CheckCircle2 size={18} aria-hidden="true" />
            </button>
            <button
              className="ev-button ev-button--ghost"
              onClick={() => goTo("/contact")}
            >
              Contact Eco Voltex
            </button>
          </div>
        </div>
      </section>

      <section className="ev-testimonials" aria-labelledby="ev-testimonials-title">
        <div className="ev-shell">
          <div className="ev-section-head">
            <span className="ev-kicker">Client feedback</span>
            <h2 id="ev-testimonials-title">
              Trusted by homeowners, landlords and businesses.
            </h2>
          </div>

          {isLoading ? (
            <div className="text-center py-4">Loading real feedback...</div>
          ) : testimonials.length === 0 ? (
            <p className="text-center text-muted">No client reviews available yet.</p>
          ) : (
            <Slider className="ev-testimonials__slider" {...sliderSettings}>
              {testimonials.map((item, index) => (
                <article className="ev-testimonial" key={index}>
                  <div className="mb-2 text-warning">
                    {"⭐".repeat(Math.min(Number(item.rating) || 5, 5))}
                  </div>
                  <p>"{item.comment || item.feedback}"</p>
                  <div>
                    <strong>{item.name || item.clientName || "Valued Client"}</strong>
                    <span>Verified Customer</span>
                  </div>
                </article>
              ))}
            </Slider>
          )}
        </div>
      </section>

    </main>
  );
};

export default HeroSection;
