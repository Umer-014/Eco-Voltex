import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import LiveChat from "../Chat Icon/LiveChat"; // Import LiveChat componen

const HeroSection = () => {
  const liveChatRef = useRef(null);
  const [isElectricalExpanded, setElectricalExpanded] = useState(false);



  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // No replace, so the path will be added to the history stack
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Empowering Your Future with Sustainable Solutions</h1>
            <p>
              Your trusted partner for residential, commercial, and industrial
              services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What we Offer</h2>
        <div className="service-cards">
          {/* Electrical Installation & Maintenance Services */}
          <div className="service-card electrical-card">
            <h3>Electrical Installation and Maintenance Services</h3>
            <div
              className="service-image"
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
              onClick={() => setElectricalExpanded(!isElectricalExpanded)}
            >
              Read More
            </button>
            {isElectricalExpanded && (
              <div
                className="sub-services"
                style={{ display: "flex", gap: "6px", marginTop: "10px" }}
              >
                <button onClick={() => navigate("/services/Residential")}>
                  Residential Read More
                </button>
                <button onClick={() => navigate("/services/Commercial")}>
                  Commercial
                </button>
                <button onClick={() => navigate("/services/Industrial")}>
                  Industrial
                </button>
              </div>
            )}
          </div>

          <div className="service-card">
            <i className="fas fa-fire"></i>
            <h3>Fire Alarm</h3>
            <div
              className="service-image"
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
          </div>
          <div className="service-card">
            <i className="fas fa-video"></i>
            <h3>CCTV</h3>
            <div
              className="service-image"
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
          </div>
          <div className="service-card">
            <i className="fas fa-video"></i>
            <h3>Portable Appliance Testing (PAT)</h3>
            <div
              className="service-image"
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
      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Let’s Power Up Your Projects</h2>
        <p>Contact us today for a free consultation and personalized quote.</p>
        <button className="cta-btn" onClick={() => navigateTo("/contact")}>
          Request a Free Quote
        </button>
      </section>
      {/* LiveChat Component */}
      <LiveChat ref={liveChatRef} />
    </div>
  );
};

export default HeroSection;
