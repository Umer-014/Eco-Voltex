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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile, // arrows on desktop, dots on mobile
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 12,
    touchMove: true,
    cssEase: "linear",
    // Slick/iOS stability:
    useCSS: true,
    useTransform: true,
  };

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
          Welcome to Eco Voltex, your trusted partner for professional
          electrical services in the UK. With a strong commitment to excellence,
          safety, and sustainability, we offer cutting-edge solutions for
          residential, commercial, and industrial clients 24/7. Our goal is to
          help you create energy-efficient, secure, and future-ready
          environments.
        </p>

        <section className="section">
          <h2 className="section__title">Our Services</h2>

          {/* renamed to avoid clashing with the outer container */}
          <div className="about-flex">
            <div className="about-flex__text">
              <p className="section__text">
                From domestic electrical works to large-scale commercial and
                industrial projects, Eco Voltex is equipped to deliver a
                complete range of services with precision, reliability, and
                professionalism. All works are carried out in compliance with BS
                7671 (IET Wiring Regulations) and relevant UK building
                standards, ensuring the highest levels of safety and quality.
              </p>

              <ul className="service-list">
                <li>Full and partial rewiring</li>
                <li>Bespoke lighting design and installation</li>
                <li>Smart home automation and system integration</li>
                <li>
                  Safety inspections and Electrical Installation Condition
                  Reports (EICRs)
                </li>
                <li>Tailored electrical fit-outs and installations</li>
                <li>Planned and reactive maintenance programmes</li>
                <li>Energy management and sustainable power solutions</li>
                <li>
                  Fire alarm systems, emergency lighting, and advanced security
                  (CCTV, intruder alarms)
                </li>
                <li>24/7 emergency call-out response for urgent issues</li>
                <li>EV charge point installations for homes and businesses</li>
              </ul>
            </div>

            <div className="about-flex__image">
              <img
                src="https://res.cloudinary.com/dug1siluu/image/upload/v1757342482/ChatGPT_Image_Sep_8_2025_07_33_54_PM_pkgwsr.png"                alt="Eco Voltex Services"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Why Choose Eco Voltex?</h2>

          {isMobile ? (
            <div className="mobile-carousel">
              <Slider {...carouselSettings}>
                {gridItems.map((item, idx) => (
                  <div key={idx} className="card card--mobile">
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__text">{item.content}</p>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="grid">
              {gridItems.map((item, idx) => (
                <div className="card">
                  <h3 className="card__title">{item.title}</h3>
                  <p className="card__text">{item.content}</p>
                </div>
              ))}
            </div>
          )}
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
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;