import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slick carousel settings for mobile only
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  };

  // Grid items data
  const gridItems = [
    {
      title: "Certified Professionals",
      content: "Our team consists of fully certified, highly experienced electricians who specialize in both residential and commercial projects."
    },
    {
      title: "Sustainability Focused",
      content: "At Eco Voltex, we strive to minimize environmental impact by offering energy-efficient solutions that save you money and reduce your carbon footprint."
    },
    {
      title: "Timely & Reliable Service",
      content: "We understand the importance of deadlines. Our team ensures your project is completed on time without compromising on quality or safety."
    },
    {
      title: "Tailored Solutions",
      content: "Every project is unique, and we offer customized solutions that cater to your specific needs and budget."
    }
  ];
  return (
    <>
      <Header />
      <main className="about-container">
        <h1 className="main-heading">About Us</h1>
        <p className="intro-text">
          Welcome to Eco Voltex, your trusted partner for professional electrical services in the UK. With a strong commitment to excellence, safety, and sustainability, we offer cutting-edge solutions for residential, commercial, and industrial clients. Our goal is to help you create energy-efficient, secure, and future-ready environments.
        </p>

        <section className="section-about">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-text">
            From home electrical repairs to large-scale commercial projects, Eco Voltex is equipped to handle any electrical service with precision. Our services include:
          </p>
          <ul className="service-list">
            <li>Energy Management & Sustainability Solutions</li>
            <li>Smart Home Automation & Integration</li>
            <li>Lighting Design & Installation</li>
            <li>Fire Alarm Systems & Emergency Lighting</li>
            <li>EV Charger Installations</li>
            <li>Advanced Security Systems (CCTV, Intruder Alarms)</li>
            <li>Commercial & Industrial Electrical Installations</li>
          </ul>
        </section>

        <section className="section-about">
          <h2 className="section-heading">Why Choose Eco Voltex?</h2>
          
          {isMobile ? (
            <Slider {...carouselSettings}>
              {gridItems.map((item, index) => (
                <div key={index} className="grid-item">
                  <h3 className="sub-heading-about">{item.title}</h3>
                  <p className="grid-text">{item.content}</p>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid-container">
              {gridItems.map((item, index) => (
                <div key={index} className="grid-item">
                  <h3 className="sub-heading-about">{item.title}</h3>
                  <p className="grid-text">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="section-about">
          <h2 className="section-heading">Our Journey</h2>
          <p className="section-text">
            Eco Voltex was founded in 2024, and since then, we have been delivering high-quality electrical solutions across the UK. With thousands of satisfied clients, our reputation for reliability, safety, and sustainability continues to grow. We are committed to providing innovative and energy-efficient solutions that meet the ever-evolving needs of our clients.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
