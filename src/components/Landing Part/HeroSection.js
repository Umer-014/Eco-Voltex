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
      <section
        className="home-hero"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dug1siluu/image/upload/v1757266929/ChatGPT_Image_Sep_7_2025_10_39_51_PM_z7oyd7.png")`,
          backgroundSize: "cover",
          backgroundPosition: "all center",
        }}
      >
        <div className="home-hero-overlay">
          <div className="home-hero-content">
            <h1>Eco Voltex Sustainable Electrical Solutions</h1>
            <p>
              Your trusted partner for residential, commercial, and industrial
              services.
            </p>
            <button
              className="home-cta-btn"
              onClick={() => navigateTo("/contact")}
            >
              Request a Free Quote
            </button>
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
                backgroundImage: `url('https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto,w_1200/v1754988697/Electric_nlvv5l.png')`,
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
                backgroundImage: `url('https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto,w_1200/v1754988695/Fire_Alarm_gfmbqk.jpg')`,
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
                backgroundImage: `url('https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto,w_1200/v1754988695/CCTV_eknsb9.jpg')`,
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
                backgroundImage: `url('https://res.cloudinary.com/dug1siluu/image/upload/f_auto,q_auto,w_1200/v1754988695/PAT_vmgkj5.jpg')`,
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

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <h2>What Our Clients Say</h2>
        <Slider
          className="home-testimonials-row"
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          arrows={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
        >
          <div className="home-testimonial">
            "Eco Voltex provided outstanding electrical services for our office
            in London. The team was professional, efficient, and friendly.
            Highly recommended!"
            <div className="home-client-info">
              <div>
                <h4>Sarah J.</h4>
                <p>Business Owner, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "Quick response and excellent workmanship. I feel much safer with
            the new fire alarm system installed by Eco Voltex."
            <div className="home-client-info">
              <div>
                <h4>Michael B.</h4>
                <p>Homeowner, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "Professional, reliable, and affordable. The PAT testing was quick
            and thorough. Will use Eco Voltex again!"
            <div className="home-client-info">
              <div>
                <h4>Linda K.</h4>
                <p>Landlord, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "The Eco Voltex team explained everything clearly and finished the
            job on time. Great service!"
            <div className="home-client-info">
              <div>
                <h4>James T.</h4>
                <p>Restaurant Owner, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "Very friendly staff and excellent aftercare. Highly recommend for
            any electrical work."
            <div className="home-client-info">
              <div>
                <h4>Priya S.</h4>
                <p>Shop Manager, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "They upgraded our lighting system and helped us save on energy
            bills. Thank you, Eco Voltex!"
            <div className="home-client-info">
              <div>
                <h4>Omar R.</h4>
                <p>Office Manager, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "Prompt, polite, and very knowledgeable. The best electrical company
            in London!"
            <div className="home-client-info">
              <div>
                <h4>Emily W.</h4>
                <p>Homeowner, London</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial">
            "From booking to completion, everything was smooth and stress-free.
            Will use again."
            <div className="home-client-info">
              <div>
                <h4>David L.</h4>
                <p>Landlord, London</p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default HeroSection;
