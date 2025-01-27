import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./FireAlarms.css";

const servicesData = {
  "Fire Alarms": {
    items: [
      {
        name: "Fire Alarm Installation",
        price: 300,
        description: "Our expert team installs state-of-the-art fire alarm systems that are highly sensitive and reliable, ensuring your property is equipped with the latest technology for early fire detection and rapid response. Installation is tailored to meet the specific needs of your building's layout, ensuring maximum coverage and safety."
      },
      {
        name: "Fire Alarm Maintenance and Servicing",
        price: 250,
        description: "We provide comprehensive fire alarm maintenance and servicing, including regular inspections and updates to keep your system functioning optimally. Our service ensures your alarms are responsive and ready to detect any fire hazards, minimizing risks and ensuring compliance with safety standards."
      },
      {
        name: "Smoke Detector Installation and Certification",
        price: 200,
        description: "Our smoke detector installation service ensures that your property is equipped with high-quality, certified smoke detectors strategically placed for maximum coverage. These detectors are critical for early fire detection, offering you the best chance of preventing damage or injury in the event of a fire."
      },
      {
        name: "Fire Alarm Testing and Certification",
        price: 150,
        description: "Our fire alarm testing service ensures your system is working as it should. We run extensive tests on every component and issue a certification confirming that your system meets all necessary safety standards, helping you stay compliant with local fire regulations and enhancing the safety of your property."
      },
      {
        name: "Emergency Lighting Installation",
        price: 400,
        description: "Our emergency lighting installation service provides lighting that activates automatically during power failures, guiding occupants safely out of your building. These lights are installed in accordance with building regulations to ensure your premises are fully equipped for emergencies, particularly in high-traffic areas and escape routes."
      },
      {
        name: "Emergency Lighting Testing and Maintenance",
        price: 350,
        description: "We offer professional testing and maintenance of your emergency lighting system to ensure it functions correctly when needed most. Our service includes battery checks, lamp replacements, and ensuring that all lights are placed in accordance with safety guidelines, so your property is always prepared for an emergency."
      },
      {
        name: "Battery Backup Replacement for Emergency Lighting",
        price: 300,
        description: "Our battery backup replacement service ensures that your emergency lighting systems are always ready for use, even during power outages. We replace old or depleted batteries with high-performance alternatives to maintain the functionality of your emergency lighting and keep your building safe."
      },
      {
        name: "Electrical Safety Upgrades for Fire Systems",
        price: 450,
        description: "We provide electrical safety upgrades to ensure that your fire alarm and emergency lighting systems are integrated with the latest electrical safety technologies. This includes upgrading wiring, adding surge protection, and improving the system's overall resilience to electrical faults, minimizing the risk of fire due to electrical issues."
      },
    ],
  },
};


const FireAlarms = () => {
  return (
    <>
      <Header />
      <div className="f-services-page">
        <h1 className="f-services-heading">Fire Alarm Services</h1>
        <p className="f-services-description">
          <strong>Eco Voltex </strong>offers cutting-edge Fire Alarm systems designed to protect
          your property from the dangers of fire. Our advanced fire detection
          and alarm solutions are engineered to meet the highest safety
          standards, ensuring early detection and rapid response in case of an
          emergency. From installation to ongoing maintenance, our skilled team
          provides comprehensive services to ensure your property is safeguarded
          24/7. With customizable solutions, we offer peace of mind by ensuring
          your premises are always prepared for any fire-related threat. Explore
          our Fire Alarm services to find the perfect fit for your safety needs.
        </p>
        <ul className="f-services-list">
          {Object.keys(servicesData).map((category) => (
            <div key={category} className="f-service-category">
              {servicesData[category].items.map((service, index) => (
                <li key={index} className="f-service-item">
                  <div className="f-service-details">
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

export default FireAlarms;
