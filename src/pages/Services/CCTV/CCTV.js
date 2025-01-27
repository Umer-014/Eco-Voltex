import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./CCTV.css";

const servicesData = {
  CCTV: {
    items: [
      {
        name: "CCTV Installation",
        price: 450,
        description: "Create a comprehensive surveillance system with professional CCTV installation designed to meet your security needs, ensuring all corners are covered for complete protection."
      },
      {
        name: "CCTV Maintenance and Repairs",
        price: 300,
        description: "Keep your CCTV system in top condition with our regular maintenance services and quick repairs, ensuring the highest reliability and performance for your security setup."
      },
      {
        name: "CCTV System Upgrades",
        price: 400,
        description: "Elevate your existing security infrastructure with the latest CCTV technology, adding new features such as HD recording, smart detection, and cloud storage capabilities for easier access."
      },
      {
        name: "Remote Monitoring Setup for CCTV Systems",
        price: 250,
        description: "Stay connected and in control of your security system with easy-to-install remote monitoring, enabling you to track footage and respond to incidents from any location, anytime."
      },
      {
        name: "Electrical Installation for CCTV Systems",
        price: 350,
        description: "Ensure the safe and efficient operation of your CCTV systems with professional electrical installations, offering a secure power source that meets your system’s requirements."
      },
      {
        name: "Power Distribution Systems for CCTV Equipment",
        price: 500,
        description: "Design and implement reliable power distribution systems to support the constant energy demands of your CCTV systems, ensuring a consistent and safe power supply."
      },
      {
        name: "UPS and Battery Backup Systems for CCTV Installations",
        price: 450,
        description: "Keep your CCTV surveillance running even during power interruptions with UPS and battery backup systems that guarantee continuous monitoring of your property."
      },
      {
        name: "Electrical Testing and Inspections for CCTV Systems",
        price: 300,
        description: "Stay ahead of potential electrical issues with comprehensive testing and inspections that ensure your CCTV system is operating at optimal levels with no hidden faults."
      },
      {
        name: "Access Control Systems Integration with CCTV",
        price: 550,
        description: "Integrate access control systems with your CCTV setup for a robust security solution, allowing seamless management of personnel access while keeping an eye on security footage in real time."
      },
    ],
  },
};


const CCTV = () => {
  return (
    <>
      <Header />
      <div className="cc-services-page">
        <h1 className="cc-services-heading">CCTV Services</h1>
        <p className="cc-services-description">
          <strong>Eco Voltex</strong> provides state-of-the-art CCTV services tailored to enhance
          security and peace of mind for your property. Our advanced
          surveillance solutions meet the highest standards, offering
          crystal-clear monitoring, remote access capabilities, and robust
          system integrations. From installation to maintenance, our expert team
          ensures your premises are monitored around the clock, safeguarding
          your assets and ensuring a secure environment. Explore our CCTV
          services to discover the ideal solution for your needs.
        </p>
        <ul className="cc-services-list">
          {Object.keys(servicesData).map((category) => (
            <div key={category} className="cc-service-category">
              {servicesData[category].items.map((service, index) => (
                <li key={index} className="cc-service-item">
                  <div className="cc-service-details">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default CCTV;
