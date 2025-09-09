import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Location.css";

const Location = () => {
  const regions = {
    "Central London": [
      "Aldgate",
      "Bank",
      "Barbican",
      "Belgravia",
      "Charing Cross",
      "Covent Garden",
      "Euston",
      "Farringdon",
      "Holborn",
      "Kings Cross",
      "Soho",
      "Strand",
      "Westminster",
      "Mayfair",
      "Paddington",
      "Kensington",
      "Knightsbridge",
      "Notting Hill",
      "Bayswater",
      "Holland Park",
    ],
    "North London": [
      "Archway",
      "Arsenal",
      "Barnet",
      "Camden",
      "Colindale",
      "Edgware",
      "Enfield",
      "Finchley",
      "Golders Green",
      "Hampstead",
      "Harrow",
      "Hendon",
      "Holloway",
      "Highbury",
      "Highgate",
      "Islington",
      "Kentish Town",
      "Kilburn",
      "Muswell Hill",
      "Park Royal",
      "Seven Sisters",
      "Tottenham",
      "Wembley",
      "Wood Green",
    ],
    "East London": [
      "Barking",
      "Bow",
      "Bethnal Green",
      "Clapton",
      "Canary Wharf",
      "Dagenham",
      "Docklands",
      "East Ham",
      "Hackney",
      "Ilford",
      "Leyton",
      "Limehouse",
      "Manor Park",
      "Newham",
      "Old Street",
      "Shoreditch",
      "Stratford",
      "Tower Hamlets",
      "Tower Hill",
      "Walthamstow",
      "West Ham",
      "Whitechapel",
    ],
    "South West London": [
      "Balham",
      "Barnes",
      "Battersea",
      "Chelsea",
      "Clapham",
      "Earl’s Court",
      "Fulham",
      "Pimlico",
      "Putney",
      "Victoria",
      "Wandsworth",
      "Wimbledon",
      "Tooting",
    ],
    "South East London": [
      "Bermondsey",
      "Blackheath",
      "Bromley",
      "Camberwell",
      "Catford",
      "Charlton",
      "Crystal Palace",
      "Deptford",
      "Dulwich",
      "Elephant & Castle",
      "Greenwich",
      "Lewisham",
      "London Bridge",
      "New Cross",
      "Plumstead",
      "Southwark",
      "Sidcup",
      "Surrey Quays",
      "Waterloo",
      "Woolwich",
    ],
    "West London": [
      "Acton",
      "Chiswick",
      "Ealing",
      "Hammersmith",
      "Shepherd’s Bush",
      "Maida Vale",
      "Holland Park",
      "Bayswater",
    ],
    "Greater London & Surroundings": [
      "Croydon",
      "Hayes",
      "Heathrow",
      "Hounslow",
      "Isleworth",
      "Morden",
      "Richmond",
      "Ruislip",
      "Slough",
      "Twickenham",
      "Watford",
    ],
  };

  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <>
      <Header />
      <div className="location-container">
        {/* Location Header Section */}
        <section className="location-header">
          <h1 className="location-header-title">Our Locations</h1>
          <p className="location-header-description">
            Your Local Electrical Experts Across London & Nearby Regions.
          </p>
        </section>
        {/* Location Details Section */}
        <h2 className="section-heading">Our Location & Coverage</h2>
        <section className="location-details">
          
          <div className="text-paragraph">
            <p>
              At{" "}
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <strong>Eco Voltex</strong>
              </a>
              , we are proud to serve customers throughout London and its
              surrounding areas, delivering reliable, professional, and
              sustainable electrical solutions. Whether you’re based in the
              heart of the city or in nearby communities, our certified
              electricians are committed to providing safe, efficient, and
              high-quality services tailored to your needs. From residential
              homes to large-scale commercial projects, we ensure every client
              receives the same trusted expertise and attention to detail. With
              Eco Voltex, you can count on a local partner who understands your
              area and is always ready to power your projects with precision.
            </p>
          </div>
          <div className="location-map">
            <iframe
              title="Eco Voltex Uxbridge Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.324527178902!2d-0.4776345234086911!3d51.546298871819665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ba82a4d7a6b%3A0xb8d55e2fbc0d0b27!2s5-7%20Vine%20St%2C%20Uxbridge%20UB8%201QE%2C%20UK!5e0!3m2!1sen!2suk!4v1725987600000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        {/* Location name plus filter */}
        <h2 className="section-heading">Find Us in Your Area</h2>
        <section className="location-name">
          
          {/* Filter (desktop right, mobile top) */}
          <div className="location-filter">
            <label htmlFor="regionSelect" className="filter-label">
              Select Region
            </label>
            <select
              id="regionSelect"
              className="filter-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">-- Choose a region --</option>
              {Object.keys(regions).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Content area */}
          <div className="location-list">
            <p className="intro">
              At <strong>Eco Voltex</strong>, we cover London and its
              surrounding areas. Choose a region to see the specific areas we
              serve.
            </p>

            {/* Only show areas when region is selected */}
            {selectedRegion && (
              <>
                <h3 className="region-title">{selectedRegion}</h3>
                <ul className="areas">
                  {regions[selectedRegion].map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Location;
