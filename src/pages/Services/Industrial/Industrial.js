import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./Industrial.css";

const servicesData = {
  Industrial: {
    items: [
      { 
        name: "Power Distribution System Installation", 
        price: 1000, 
        description: "We provide reliable installation of power distribution systems, ensuring optimal power supply across your industrial facility. Our services include designing and installing robust distribution networks that efficiently manage and direct power to every section of your plant, reducing the risk of electrical overloads and system failures." 
      },
      { 
        name: "PLC and Automation System Setup", 
        price: 1500, 
        description: "Our team specializes in setting up Programmable Logic Controllers (PLC) and automation systems to streamline your industrial processes and improve efficiency. We work with you to create custom solutions that integrate seamlessly with your equipment, enhancing productivity, reducing errors, and improving control over your operations." 
      },
      { 
        name: "Motor and Equipment Repairs", 
        price: 800, 
        description: "We offer fast and efficient repairs for motors and industrial equipment, minimizing downtime and keeping your operations running smoothly. Our experienced technicians diagnose and resolve issues promptly, ensuring your machinery is back in operation as quickly as possible, while maintaining high safety standards." 
      },
      { 
        name: "Electrical Testing and Inspections", 
        price: 600, 
        description: "Our thorough electrical testing and inspection services ensure that your systems meet safety standards, identifying potential issues before they become problems. We perform detailed inspections to detect faults such as short circuits, grounding issues, or outdated wiring, preventing costly downtime and enhancing system longevity." 
      },
      { 
        name: "Electrical Safety Upgrades for Industrial Systems", 
        price: 750, 
        description: "We help improve the safety of your industrial electrical systems with up-to-date safety upgrades and solutions to prevent accidents. Our experts assess your current setup and implement the latest safety protocols, including surge protection, circuit breakers, and grounding solutions, to safeguard your equipment and personnel." 
      },
      { 
        name: "Industrial Panel Board and Distribution Systems", 
        price: 1200, 
        description: "We design and install custom panel boards and distribution systems to meet the specific needs of your industrial facility. Our solutions ensure that power is efficiently distributed across all areas of your plant, with features such as load balancing, redundancy, and real-time monitoring for improved control and reliability." 
      },
      { 
        name: "Generator Systems Installation and Maintenance", 
        price: 900, 
        description: "We install and maintain generator systems to provide uninterrupted power supply during outages, ensuring your operations continue without disruption. From installation to regular maintenance, we ensure your generators are always ready to perform, reducing the risk of downtime and increasing operational resilience." 
      },
      { 
        name: "Renewable Energy System Integration", 
        price: 2000, 
        description: "We offer integration of renewable energy solutions, such as solar power, to reduce energy costs and promote sustainability in your industrial facility. Our team designs and installs custom solar and other renewable energy systems that complement your existing infrastructure, helping you reduce carbon emissions and energy consumption while cutting long-term costs." 
      },
      { 
        name: "Industrial Wiring and Cabling", 
        price: 850, 
        description: "Our industrial wiring and cabling services ensure safe, durable, and efficient electrical connections throughout your facility. We use high-quality materials and adhere to all safety standards, ensuring that your electrical infrastructure is both reliable and compliant with industry regulations." 
      },
    ],
  },
};

const Industrial = () => {
  return (
    <>
      <Header />
      <div className="i-services-page">
        <h1 className="i-services-heading">Industrial Services</h1>
        <p className="i-services-description">
          <strong>Eco Voltex</strong> provides state-of-the-art Industrial
          Electrical Services tailored to meet the unique needs of large-scale
          industrial operations. Our expert team specializes in the
          installation, maintenance, and repair of complex electrical systems,
          ensuring maximum efficiency and safety for your facility. We focus on
          delivering reliable power solutions, fault detection, and circuit
          protection to minimize downtime and prevent costly disruptions. From
          heavy machinery wiring to automation systems, we are committed to
          offering innovative solutions that boost productivity and ensure the
          continuous operation of your industrial processes. Trust Eco Voltex to
          handle all your industrial electrical needs with precision and
          expertise.
        </p>
        <ul className="i-services-list">
          {Object.keys(servicesData).map((category) => (
            <div key={category} className="i-service-category">
              {servicesData[category].items.map((service, index) => (
                <li key={index} className="i-service-item">
                  <div className="i-service-details">
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

export default Industrial;
