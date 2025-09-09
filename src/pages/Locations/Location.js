import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Location.css";

const Location = () => {
  return (
    <>
      <Header />
      <div className="location-container">
        <section className="location-header">
          <h1 className="location-header-title">Our Locations</h1>
          <p className="location-header-description">
            Your Local Electrical Experts Across London & Nearby Regions.
          </p>
        </section>

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
      </div>
      <Footer />
    </>
  );
};
export default Location;
