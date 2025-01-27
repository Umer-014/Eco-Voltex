import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./Residential.css";

const servicesData = {
  Residential: {
    items: [
      {
        name: "Electrical Installation",
        description: "Our expert team offers professional electrical installations, ensuring that your home is equipped with a robust electrical system that meets local codes and safety regulations. We handle everything from new installations to upgrades, providing peace of mind with quality workmanship and attention to detail."
      },
      {
        name: "Electrical Maintenance and Repairs",
        description: "Eco Voltex specializes in both routine electrical maintenance and emergency repairs. We diagnose and resolve electrical issues swiftly, preventing downtime and reducing risks like electrical fires. Whether it's faulty wiring, tripped breakers, or malfunctioning outlets, we ensure your electrical system remains in top condition."
      },
      {
        name: "Wiring and Cabling",
        description: "Our wiring and cabling services cover a broad range of needs, from new home constructions to rewiring existing structures. We ensure that every cable is properly installed and meets industry standards for safety and performance, minimizing the risk of electrical hazards and maximizing efficiency."
      },
      {
        name: "Lighting Installation and Maintenance",
        description: "We provide a variety of lighting installation services, from ambient lighting to security lighting solutions, all designed to enhance the safety, functionality, and aesthetic appeal of your home. Our maintenance services ensure that your lights remain in optimal condition, reducing the need for frequent replacements."
      },
      {
        name: "UPS and Battery Backup Installation",
        description: "Eco Voltex installs high-quality UPS (uninterruptible power supply) systems and battery backups to ensure that your critical devices and appliances continue to function even during power outages. These systems help prevent data loss, equipment damage, and interruptions in daily activities."
      },
      {
        name: "Generator Installation and Maintenance",
        description: "We specialize in installing reliable generators that keep your home running during power outages. Our maintenance services ensure your generator is always ready when needed, with regular checkups and servicing to extend its lifespan and ensure smooth operation."
      },
      {
        name: "Motor and Equipment Repairs",
        description: "Our team is skilled in repairing household motors and equipment, including HVAC units, water pumps, and other motorized appliances. We quickly diagnose issues and provide effective repairs to ensure your equipment operates efficiently and without interruptions."
      },
      {
        name: "Electrical Safety Upgrades",
        description: "We provide electrical safety upgrades to bring your home’s electrical system in line with modern standards. Our services include the installation of circuit breakers, surge protectors, grounding systems, and more, ensuring that your home is protected against electrical hazards."
      },
      {
        name: "Electrical Design and Consultancy",
        description: "Our electrical design and consultancy services offer expert advice for homeowners looking to optimize their electrical systems. Whether you’re planning a renovation, a new home build, or an upgrade, we help you design a system that meets your needs, is energy-efficient, and adheres to safety regulations."
      },
      {
        name: "Emergency Lighting Installation",
        description: "We install emergency lighting systems that provide crucial illumination during power outages or emergencies. Whether for hallways, staircases, or outdoor areas, our solutions ensure that you and your family can safely navigate your home even when the power goes out."
      },
      {
        name: "Battery Backup Replacement for Emergency Lights",
        description: "To keep your emergency lighting systems reliable, we replace old or expired battery backups. We ensure that your emergency lights stay operational, providing consistent lighting when needed, without the risk of a failure during critical moments."
      },
    ],
  },
};

const Residential = () => {
  return (
    <>
      <Header />
      <div className="i-services-page">
        <h1 className="i-services-heading">Residential Services</h1>
        <p className="i-services-description">
          <strong>Eco Voltex</strong> offers comprehensive Residential
          Electrical Services designed to enhance the safety, comfort, and
          efficiency of your home. Our skilled electricians provide expert
          installation, maintenance, and repair of electrical systems, ensuring
          that your home is powered safely and reliably. Whether it's lighting,
          wiring, circuit upgrades, or smart home integrations, we focus on
          delivering customized solutions that meet your specific needs. Our
          team also specializes in troubleshooting electrical issues, providing
          timely repairs to prevent hazards and improve energy efficiency. At
          Eco Voltex, we are dedicated to ensuring that your home's electrical
          system operates smoothly and securely, offering peace of mind and
          lasting quality.
        </p>
        <ul className="r-services-list">
          {Object.keys(servicesData).map((category) => (
            <div key={category} className="r-service-category">
              {servicesData[category].items.map((service, index) => (
                <li key={index} className="r-service-item">
                  <div className="r-service-details">
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

export default Residential;
