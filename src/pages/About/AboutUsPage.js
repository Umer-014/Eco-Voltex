import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../components/touchPolyfill"; // keep your polyfill

const AboutUsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => setIsMobile(e.matches);

    // set initial
    setIsMobile(mq.matches);
    // listen to changes
    mq.addEventListener
      ? mq.addEventListener("change", onChange)
      : mq.addListener(onChange);

    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", onChange)
        : mq.removeListener(onChange);
    };
  }, []);

  const NextArrow = ({ onClick }) => (
    <button
      className="slick-arrow slick-next"
      onClick={onClick}
      aria-label="Next"
    >
      <FaChevronRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="slick-arrow slick-prev"
      onClick={onClick}
      aria-label="Previous"
    >
      <FaChevronLeft />
    </button>
  );


  const gridItems = [
    {
      title: "Certified Professionals",
      content:
        "Our team consists of fully certified, highly experienced electricians who specialize in both residential and commercial projects.",
    },
    {
      title: "Sustainability Focused",
      content:
        "At Eco Voltex, we strive to minimize environmental impact by offering energy-efficient solutions that save you money and reduce your carbon footprint.",
    },
    {
      title: "Timely & Reliable Service",
      content:
        "We understand the importance of deadlines. Our team ensures your project is completed on time without compromising on quality or safety.",
    },
    {
      title: "Tailored Solutions",
      content:
        "Every project is unique, and we offer customized solutions that cater to your specific needs and budget.",
    },
  ];

  return (
    <>
      <Header />
      <main className="about max-wrap">
        <h1 className="about__title">About Us</h1>

        <p className="about__intro">
          Welcome to{" "}
          <a href="/about" className="about__link">
            <strong> Eco Voltex</strong>
          </a>
          , your trusted partner for professional electrical services in the UK.
          With a strong commitment to excellence, safety, and sustainability, we
          offer cutting-edge solutions for residential, commercial, and
          industrial clients{" "}
          <a href="/contact" className="about__link">
            <strong>24/7</strong>
          </a>
          . Our goal is to help you create energy-efficient, secure, and
          future-ready environments.
        </p>

        <section className="section">
          <h2 className="section__title">Our Services</h2>

          {/* renamed to avoid clashing with the outer container */}
          <div className="about-flex">
            <div className="about-flex__text">
              <p className="section__text">
                At{" "}
                <a href="/about" className="about__link">
                  <strong> Eco Voltex</strong>
                </a>
                , we power homes, businesses, and industries with safe,
                reliable, and future-ready electrical solutions. Every project
                is carried out in line with{" "}
                <strong>BS 7671 (IET Wiring Regulations)</strong> and UK
                building standards, ensuring the highest levels of safety and
                quality.
              </p>
              <div className="about-flex-mine">
                <ul className="service-list">
                  <p className="service-list__title_1">
                    <a href="/contact" className="about__link">
                      <strong>Homes</strong>
                    </a>
                  </p>
                  <li className="list">Full and partial rewiring</li>
                  <li className="list">
                    Bespoke lighting design and installation
                  </li>
                  <li className="list">
                    Smart home automation and system integration
                  </li>
                  <li className="list">
                    Safety inspections and Electrical Installation Condition
                    Reports (EICRs)
                  </li>
                  <li className="list">
                    PAT Testing (Portable Appliance Testing)
                  </li>
                  <li className="list">
                    24/7 emergency call-out response for urgent issues
                  </li>
                  <p className="service-list__title_2">
                    <a href="/contact" className="about__link">
                      <strong>Businesses</strong>
                    </a>
                  </p>
                  <li className="list">
                    EV charge point installations for homes
                  </li>
                  <li className="list">
                    Tailored electrical fit-outs and installations
                  </li>
                  <li className="list">
                    Planned and reactive maintenance programmes
                  </li>
                  <li className="list">
                    Energy management and sustainable power solutions
                  </li>
                  <li className="list">
                    Fire alarm systems, emergency lighting, and advanced
                    security (CCTV, intruder alarms)
                  </li>
                  <li className="list">
                    Safety inspections and Electrical Installation Condition
                    Reports (EICRs)
                  </li>

                  <li className="list">
                    PAT Testing (Portable Appliance Testing)
                  </li>
                  <li className="list">
                    24/7 emergency call-out response for urgent issues
                  </li>

                  <p className="service-list__title_3">
                    <a href="/contact" className="about__link">
                      <strong>Industry</strong>
                    </a>
                  </p>
                  <li className="list">
                    Large-scale rewiring and industrial installations
                  </li>
                  <li className="list">
                    Custom electrical fit-outs for warehouses and factories
                  </li>
                  <li className="list">
                    Planned and reactive maintenance programmes
                  </li>
                  <li className="list">
                    Energy management and sustainable power systems
                  </li>
                  <li className="list">
                    Fire alarm systems, emergency lighting, and advanced
                    security (CCTV, intruder alarms)
                  </li>
                  <li className="list">
                    PAT Testing (Portable Appliance Testing)
                  </li>
                  <li className="list">24/7 emergency call-out response</li>
                </ul>

                <div className="about-flex__image">
                  <img
                    src="https://res.cloudinary.com/dug1siluu/image/upload/v1757342482/ChatGPT_Image_Sep_8_2025_07_33_54_PM_pkgwsr.png"
                    alt="Eco Voltex Services"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title text-3xl font-bold mb-6">
            Why Choose Eco Voltex?
          </h2>
          <p>
            At Eco Voltex, our roots are built on <strong>trust, expertise, and innovation</strong>. Every branch of our work is dedicated to powering your
            home or business the right way.
          </p>
          <div className="about-why-choose-container">
            <div className="about-why-choose-item">
              <div className="grid">
                {gridItems.map((item, idx) => (
                  <div className="card_about">
                    <br />

                    <h3 className="service-list__title_3">
                      {item.title}
                    </h3>
                    <p className="card__text_about">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-flex__image">
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1757354106/ChatGPT_Image_Sep_8_2025_10_52_27_PM_krwpik.png"
                alt="Eco Voltex Feature"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Our Journey</h2>
          <p className="section__text">
            Eco Voltex was founded in 2024, and since then, we have been
            delivering high-quality electrical solutions across the UK. With
            thousands of satisfied clients, our reputation for reliability,
            safety, and sustainability continues to grow. We are committed to
            providing innovative and energy-efficient solutions that meet the
            ever-evolving needs of our clients.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="home-testimonials">
          <h2 className="section__title">What Our Clients Say</h2>
          <Slider
            className="home-testimonials-row"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            arrows={false}
            autoplay={true}
            autoplaySpeed={2000}
            pauseOnHover={true}
            adaptiveHeight={true}
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
              "Eco Voltex provided outstanding electrical services for our
              office in London. The team was professional, efficient, and
              friendly. Highly recommended!"
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
              "Prompt, polite, and very knowledgeable. The best electrical
              company in London!"
              <div className="home-client-info">
                <div>
                  <h4>Emily W.</h4>
                  <p>Homeowner, London</p>
                </div>
              </div>
            </div>
            <div className="home-testimonial">
              "From booking to completion, everything was smooth and
              stress-free. Will use again."
              <div className="home-client-info">
                <div>
                  <h4>David L.</h4>
                  <p>Landlord, London</p>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
