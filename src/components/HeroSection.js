import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path, { replace: true }); // Replace the current history entry
  };
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Empowering Your Future with Sustainable Electrical Solutions
            </h1>
            <p>
              Your trusted partner for residential, commercial, and industrial
              electrical services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Expertise in Electrical Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="fas fa-home"></i>
            <h3>Residential</h3>
            <p>
              Seamless electrical solutions tailored to fit your home’s needs.
            </p>
            <button onClick={() => navigateTo("/services/Residential")}>
              Read More
            </button>
          </div>
          <div className="service-card">
            <i className="fas fa-building"></i>
            <h3>Commercial</h3>
            <p>Efficient, scalable solutions for businesses of all sizes.</p>
            <button onClick={() => navigateTo("/services/Commercial")}>
              Read More
            </button>
          </div>
          <div className="service-card">
            <i className="fas fa-industry"></i>
            <h3>Industrial</h3>
            <p>
              Advanced electrical systems designed for heavy-duty industrial
              setups.
            </p>
            <button onClick={() => navigateTo("/services/Industrial")}>
              Read More
            </button>
          </div>
          <div className="service-card">
            <i className="fas fa-fire"></i>
            <h3>Fire Alarm</h3>
            <p>
              Reliable fire alarm systems to ensure safety and early detection
              of hazards.
            </p>
            <button onClick={() => navigateTo("/services/FireAlarm")}>
              Read More
            </button>
          </div>
          <div className="service-card">
            <i className="fas fa-video"></i>
            <h3>CCTV</h3>
            <p>
              Advanced CCTV solutions for 24/7 surveillance and security
              monitoring.
            </p>
            <button onClick={() => navigateTo("/services/CCTV")}>
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Eco Voltex?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-cogs"></i>
            <p>Expert Technicians</p>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <p>Sustainable Solutions</p>
          </div>
          <div className="feature">
            <i className="fas fa-trophy"></i>
            <p>Proven Excellence</p>
          </div>
          <div className="feature">
            <i className="fas fa-dollar-sign"></i>
            <p>Affordable Pricing</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "Eco Voltex transformed our electrical systems with such
            professionalism and efficiency. Highly recommend!"
          </p>
          <div className="client-info">
            <img src="client1.jpg" alt="client 1" />
            <h4>Sarah Johnson</h4>
            <p>Homeowner</p>
          </div>
        </div>
        <div className="testimonial">
          <p>
            "Their team handled our office electrical upgrades seamlessly. They
            were fast, reliable, and affordable."
          </p>
          <div className="client-info">
            <img src="client2.jpg" alt="client 2" />
            <h4>Michael Lee</h4>
            <p>Business Owner</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Let’s Power Up Your Projects</h2>
        <p>Contact us today for a free consultation and personalized quote.</p>
        <button className="cta-btn">Request a Free Quote</button>
      </section>
    </div>
  );
};

export default HeroSection;
