import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./Commercial.css";

const servicesData = {
  Commercial: {
    items: [
      {
        name: "Panel Board and Distribution System Installation",
        price: 600,
        description:
          "Install and configure electrical panel boards and distribution systems to ensure safe and efficient power management across your property. Achieve optimal power flow and safety with our expertly designed and installed distribution systems, tailored for commercial efficiency.",
      },
      {
        name: "Power Distribution Systems",
        price: 550,
        description:
          "Design and implement power distribution solutions for residential, commercial, and industrial spaces, tailored to meet your specific energy needs. Our systems ensure consistent energy delivery, minimizing downtime and maximizing productivity across your facility.",
      },
      {
        name: "Commercial Lighting Installation and Maintenance",
        price: 400,
        description:
          "Install and maintain energy-efficient lighting systems for commercial properties, enhancing illumination while reducing energy costs. Brighten up your workspace with tailored lighting installations that blend cost-efficiency with high-quality illumination.",
      },
      {
        name: "UPS and Battery Backup Solutions",
        price: 350,
        description:
          "Set up uninterrupted power supply (UPS) systems and reliable battery backups to protect your devices and maintain operations during power outages. Protect critical systems from unexpected power failures with our advanced, long-lasting UPS and backup solutions.",
      },
      {
        name: "Generator Systems Installation and Servicing",
        price: 700,
        description:
          "Provide comprehensive installation and servicing of generator systems to ensure uninterrupted power supply during critical moments. Count on our reliable generator solutions to provide a steady power source during blackouts, ensuring business continuity.",
      },
      {
        name: "Electrical Testing and Inspection Services",
        price: 300,
        description:
          "Conduct thorough electrical testing and inspections to identify potential risks and maintain compliance with safety standards. Proactively safeguard your property with our electrical testing services that identify risks before they escalate.",
      },
      {
        name: "HVAC Electrical Support",
        price: 450,
        description:
          "Deliver expert electrical support for HVAC systems to optimize performance, efficiency, and reliability in climate control solutions. Ensure your HVAC systems deliver peak performance with our expert electrical maintenance and repair services.",
      },
      {
        name: "Access Control Systems Installation and Maintenance",
        price: 500,
        description:
          "Install and maintain advanced access control systems for enhanced security and seamless management of entry points. Secure your property with our customizable access control solutions, offering advanced features and ease of use.",
      },
      {
        name: "Intercom System Installation and Support",
        price: 400,
        description:
          "Set up and provide support for intercom systems to facilitate effective communication across residential or commercial spaces. Enhance connectivity and communication with our user-friendly intercom solutions, tailored to your needs.",
      },
    ],
  },
};

const Commercial = () => {
  return (
    <>
      <Header />
      <div className="c-services-page">
        <h1 className="c-services-heading">Commercial Services</h1>
        <p className="c-services-description">
        <strong>Eco Voltex</strong> offers a comprehensive suite of commercial electrical
          services designed to meet UK standards, ensuring your business
          operates efficiently, safely, and seamlessly. Our expert team handles
          everything from power distribution systems to advanced backup
          solutions, keeping your premises well-lit, secure, and fully
          operational. Now follow are our commercial services.
        </p>
        <ul className="c-services-list">
          {Object.keys(servicesData).map((category) => (
            <div key={category} className="c-service-category">
              {servicesData[category].items.map((service, index) => (
                <li key={index} className="c-service-item">
                  <div className="c-service-details">
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

export default Commercial;
