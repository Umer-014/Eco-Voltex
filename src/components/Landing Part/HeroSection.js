import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Animation variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <h1>Empowering Your Future with Sustainable Solutions</h1>
            <p>
              Your trusted partner for residential, commercial, and industrial
              services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services">
        <h2>What we Offer</h2>
        <Slider {...sliderSettings} className="home-service-cards">
          {/* Electrical Installation & Maintenance Services */}
          <motion.div
            className="home-service-card home-electrical-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3>Electrical Installation and Maintenance Services</h3>
            <div
              className="home-service-image"
              style={{
                backgroundImage: `url(${require("../../assets/images/electrical-background.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
                borderRadius: "8px",
                margin: "10px 0",
              }}
            />
            <p>
              Professional electrical installations and maintenance for homes
              and businesses.
            </p>
            <button
              onClick={() => navigateTo("/services/Installation-Maintenance")}
            >
              Read More
            </button>
          </motion.div>

          {/* Fire Alarm */}
          <motion.div
            className="home-service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <i className="fas fa-fire"></i>
            <h3>Fire Alarm</h3>
            <div
              className="home-service-image"
              style={{
                backgroundImage: `url(${require("../../assets/images/fire-background.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
                borderRadius: "8px",
                margin: "10px 0",
              }}
            />
            <p>
              Custom fire alarm solutions to protect your life and property.
            </p>
            <button onClick={() => navigateTo("/services/Fire-alarms")}>
              Read More
            </button>
          </motion.div>

          {/* CCTV */}
          <motion.div
            className="home-service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <i className="fas fa-video"></i>
            <h3>CCTV</h3>
            <div
              className="home-service-image"
              style={{
                backgroundImage: `url(${require("../../assets/images/cctv-background.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
                borderRadius: "8px",
                margin: "10px 0",
              }}
            />
            <p>Advanced CCTV and security systems for enhanced safety.</p>
            <button onClick={() => navigateTo("/services/CCTV")}>
              Read More
            </button>
          </motion.div>

          {/* Portable Appliance Testing (PAT) */}
          <motion.div
            className="home-service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <i className="fas fa-video"></i>
            <h3>Portable Appliance Testing (PAT)</h3>
            <div
              className="home-service-image"
              style={{
                backgroundImage: `url(${require("../../assets/images/pat-background.jpg")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
                borderRadius: "8px",
                margin: "10px 0",
              }}
            />
            <p>
              Ensure safety and compliance with our certified PAT testing
              services.
            </p>
            <button onClick={() => navigateTo("/services/PAT-testing")}>
              Read More
            </button>
          </motion.div>
        </Slider>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-why-us">
        <h2>Why  Why Eco Voltex?</h2>
        <div className="home-features">
          <div className="home-feature">
            <i className="fas fa-cogs"></i>
            <p>Expert Technicians</p>
          </div>
          <div className="home-feature">
            <i className="fas fa-leaf"></i>
            <p>Sustainable Solutions</p>
          </div>
          <div className="home-feature">
            <i className="fas fa-trophy"></i>
            <p>Proven Excellence</p>
          </div>
          <div className="home-feature">
            <i className="fas fa-dollar-sign"></i>
            <p>Affordable Pricing</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section">
        <h2>Let’s Power Up Your Projects</h2>
        <p>Contact us today for a free consultation and personalized quote.</p>
        <button className="home-cta-btn" onClick={() => navigateTo("/contact")}>
          Request a Free Quote
        </button>
      </section>
    </div>
  );
};

export default HeroSection;