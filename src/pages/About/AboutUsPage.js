import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main className="about-container">
        <h1 className="main-heading">About Us</h1>
        <p className="intro-text">
          Welcome to Eco Voltex, your trusted partner for professional electrical services in the UK. With a strong commitment to excellence, safety, and sustainability, we offer cutting-edge solutions for residential, commercial, and industrial clients. Our goal is to help you create energy-efficient, secure, and future-ready environments.
        </p>

        <section className="section">
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

        <section className="section">
          <h2 className="section-heading">Why Choose Eco Voltex?</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h3 className="sub-heading">Certified Professionals</h3>
              <p className="grid-text">
                Our team consists of fully certified, highly experienced electricians who specialize in both residential and commercial projects.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="sub-heading">Sustainability Focused</h3>
              <p className="grid-text">
                At Eco Voltex, we strive to minimize environmental impact by offering energy-efficient solutions that save you money and reduce your carbon footprint.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="sub-heading">Timely & Reliable Service</h3>
              <p className="grid-text">
                We understand the importance of deadlines. Our team ensures your project is completed on time without compromising on quality or safety.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="sub-heading">Tailored Solutions</h3>
              <p className="grid-text">
                Every project is unique, and we offer customized solutions that cater to your specific needs and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
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
