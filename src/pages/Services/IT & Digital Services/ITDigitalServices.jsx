import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Code2,
  Cpu,
  Bot,
  Palette,
  Megaphone,
  Cloud,
  CheckCircle2,
  Zap,
  Award,
  Tag,
  Headphones,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle,
  Layers,
} from "lucide-react";
import "./ITDigitalServices.css";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2000,
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(easeOutProgress * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const categories = [
  { id: "all", label: "All Services" },
  { id: "dev", label: "Web & Apps" },
  { id: "systems", label: "Software & Systems" },
  { id: "ai-cloud", label: "AI & Cloud" },
  { id: "marketing", label: "Branding & Ads" },
];

const serviceData = [
  {
    id: "websites",
    category: "dev",
    title: "WEBSITES",
    icon: Globe,
    badge: null,
    items: [
      "Business Websites",
      "E-Commerce Stores",
      "Portfolio & Personal Websites",
      "Website Redesign",
      "Maintenance & Support",
    ],
  },
  {
    id: "mobile-apps",
    category: "dev",
    title: "MOBILE APPLICATIONS",
    icon: Smartphone,
    badge: null,
    items: [
      "Android Apps",
      "iPhone (iOS) Apps",
      "Cross-Platform Apps",
      "Custom Mobile Solutions",
    ],
  },
  {
    id: "software-dev",
    category: "systems",
    title: "SOFTWARE DEVELOPMENT",
    icon: Code2,
    badge: "ENTERPRISE",
    items: [
      "Custom Business Software",
      "CRM & ERP Solutions",
      "Inventory & Stock Management",
      "HR & Payroll Systems",
      "Customer Portals / Client Portals",
      "API Integrations",
    ],
  },
  {
    id: "business-systems",
    category: "systems",
    title: "BUSINESS SYSTEMS",
    icon: Cpu,
    badge: null,
    items: [
      "School & College Management",
      "Restaurant & Café Systems",
      "Clinic & Healthcare Software",
      "Booking & Appointment Systems",
      "POS (Point of Sale) Systems",
      "Accounting & Billing Software",
    ],
  },
  {
    id: "ai-automation",
    category: "ai-cloud",
    title: "AI & BUSINESS AUTOMATION",
    icon: Bot,
    badge: "POPULAR",
    items: [
      "AI Chatbots",
      "Customer Support Automation",
      "AI Voice Agents",
      "Workflow Automation",
      "Smart Business Solutions",
    ],
  },
  {
    id: "branding-design",
    category: "marketing",
    title: "BRANDING & DESIGN",
    icon: Palette,
    badge: null,
    items: [
      "Logo Design & Brand Identity",
      "Business Cards, Flyers, Brochures & Banners",
      "Social Media Designs",
      "Company Profiles",
    ],
  },
  {
    id: "digital-marketing",
    category: "marketing",
    title: "DIGITAL MARKETING",
    icon: Megaphone,
    badge: "GROWTH",
    items: [
      "Social Media Management",
      "Facebook & Instagram Ads",
      "Google Ads (PPC)",
      "SEO & Google Business Profile",
      "Content Creation",
    ],
  },
  {
    id: "cloud-it",
    category: "ai-cloud",
    title: "CLOUD & IT SERVICES",
    icon: Cloud,
    badge: null,
    items: [
      "Domain Registration",
      "Web Hosting",
      "Professional Business Emails",
      "Microsoft 365 & Google Workspace",
      "Cloud Backup & Disaster Recovery",
      "Cybersecurity Solutions",
      "IT Support & Maintenance",
    ],
  },
];

const guarantees = [
  { icon: Zap, title: "FAST DELIVERY" },
  { icon: Award, title: "HIGH QUALITY WORK" },
  { icon: Tag, title: "AFFORDABLE PRICING" },
  { icon: Headphones, title: "DEDICATED SUPPORT" },
  { icon: ShieldCheck, title: "SECURE & TRUSTED" },
];

const statsData = [
  {
    target: 100,
    suffix: "+",
    decimals: 0,
    label: "Projects Delivered",
    icon: CheckCircle,
  },
  {
    target: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime & Reliability",
    icon: Layers,
  },
  {
    target: 24,
    suffix: "/7",
    decimals: 0,
    label: "Tech Support",
    icon: Headphones,
  },
  {
    target: 100,
    suffix: "%",
    decimals: 0,
    label: "Client Satisfaction",
    icon: Users,
  },
];

export default function ITDigitalServices() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? serviceData
      : serviceData.filter((item) => item.category === activeFilter);

  return (
    <>
      <Header />
      <div className="it-services-wrapper">
        <div className="it-bg-glow-top"></div>
        <div className="it-bg-glow-bottom"></div>
        <div className="it-tech-grid-overlay"></div>

        <div className="it-main-content">
          <section className="it-hero">
            <div className="it-container">
              <div className="it-subbadge-pill">
                <Sparkles size={14} className="it-pill-icon" />
                <span>YOUR DIGITAL PARTNER FOR GROWTH</span>
              </div>

              <h1 className="it-hero-title">
                COMPLETE <span className="it-text-gradient">IT & DIGITAL</span>{" "}
                SOLUTIONS
              </h1>

              <p className="it-hero-subtitle">
                One Company. Complete Digital Solutions to Grow Your Business.
              </p>

              <div className="it-filter-wrapper">
                <div className="it-filter-bar">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`it-filter-btn ${
                        activeFilter === cat.id ? "active" : ""
                      }`}
                      onClick={() => setActiveFilter(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="it-grid-section">
            <div className="it-container">
              <div className="it-grid">
                {filteredServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.id}
                      className={`it-card ${service.badge ? "has-badge" : ""}`}
                    >
                      {service.badge && (
                        <span className="it-card-tag">{service.badge}</span>
                      )}

                      <div className="it-card-header">
                        <div className="it-icon-wrapper">
                          <IconComponent size={26} />
                        </div>
                        <h3>{service.title}</h3>
                      </div>

                      <ul className="it-card-list">
                        {service.items.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} className="it-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="it-stats-section">
            <div className="it-container">
              <div className="it-stats-grid">
                {statsData.map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={i} className="it-stat-card">
                      <StatIcon size={24} className="it-stat-icon" />
                      <div className="it-stat-val">
                        <AnimatedCounter
                          target={stat.target}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                          duration={2200}
                        />
                      </div>
                      <div className="it-stat-lbl">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="it-ribbon">
            <div className="it-container it-ribbon-flex">
              {guarantees.map((g, index) => {
                const GIcon = g.icon;
                return (
                  <div key={index} className="it-ribbon-item">
                    <GIcon size={20} className="it-ribbon-icon" />
                    <span>{g.title}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="it-cta-section">
            <div className="it-container">
              <div className="it-cta-card it-cta-centered">
                <div className="it-cta-glow-bg"></div>

                <h2>
                  LET'S BUILD SOMETHING <br />
                  <span className="it-text-gradient">GREAT TOGETHER!</span>
                </h2>

                <p>
                  Turn your ideas into powerful digital solutions that deliver
                  real results.
                </p>

                <Link to="/contact" className="it-cta-button">
                  <span>Get Free Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          <div className="it-bottom-slogan">
            <span>YOUR VISION. OUR TECHNOLOGY. ENDLESS POSSIBILITIES.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
