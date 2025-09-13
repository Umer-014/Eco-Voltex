// /mnt/data/AboutUsPage.js
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/touchPolyfill";

const AboutUsPage = () => {
  const gridItems = [
    {
      title: "Certified Professionals",
      content:
        "Our team consists of fully certified, highly experienced electricians who specialise in both residential and commercial projects.",
    },
    {
      title: "Sustainability Focused",
      content:
        "At Eco Voltex, we strive to minimise environmental impact by offering energy-efficient solutions that save you money and reduce your carbon footprint.",
    },
    {
      title: "Timely & Reliable Service",
      content:
        "We understand the importance of deadlines. Our team ensures your project is completed on time without compromising on quality or safety.",
    },
    {
      title: "Tailored Solutions",
      content:
        "Every project is unique, and we offer customised solutions that cater to your specific needs and budget.",
    },
    {
      title: "24/7 Emergency Support",
      content:
        "Our engineers are available around the clock to respond quickly to urgent electrical issues, ensuring safety and minimal disruption.",
    },
    {
      title: "Full UK Compliance",
      content:
        "All our work complies with BS 7671 Wiring Regulations, IET Codes of Practice, and UK building standards, giving you total peace of mind.",
    },
  ];

  return (
    <>
      <Header />
      <main className="about max-wrap" role="main">
        <h1 className="about__title">About Us</h1>

        <p className="about__intro">
          Welcome to{" "}
          <a href="/about" className="about__link">
            <strong>Eco Voltex</strong>
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

        <section className="section" aria-labelledby="our-services">
          <h2 id="our-services" className="section__title">
            Our Services
          </h2>

          <div className="about-flex">
            <div className="about-flex__text">
              <p className="section__text">
                At{" "}
                <a href="/about" className="about__link">
                  <strong>Eco Voltex</strong>
                </a>
                , we power homes, businesses, and industries with safe,
                reliable, and future-ready electrical solutions. Every project
                is carried out in line with <strong>BS 7671 (IET Wiring Regulations)</strong> and UK
                building standards, ensuring the highest levels of safety and
                quality.
              </p>

              <div className="about-flex-mine">
                <section aria-labelledby="services-h3">
                  <h3 id="services-h3" className="visually-hidden">Services</h3>

                  <div className="services-group">
                    <h4 className="service-list__title_1">
                      <a href="/contact" className="about__link">
                        <strong>Homes</strong>
                      </a>
                    </h4>
                    <ul className="service-list">
                      <li className="list">Full and partial rewiring</li>
                      <li className="list">Bespoke lighting design and installation</li>
                      <li className="list">Smart home automation and system integration</li>
                      <li className="list">Safety inspections and Electrical Installation Condition Reports (EICRs)</li>
                      <li className="list">PAT Testing (Portable Appliance Testing)</li>
                      <li className="list">24/7 emergency call-out response for urgent issues</li>
                    </ul>
                  </div>

                  <div className="services-group">
                    <h4 className="service-list__title_2">
                      <a href="/contact" className="about__link">
                        <strong>Businesses</strong>
                      </a>
                    </h4>
                    <ul className="service-list">
                      <li className="list">EV charge point installations for homes</li>
                      <li className="list">Tailored electrical fit-outs and installations</li>
                      <li className="list">Planned and reactive maintenance programmes</li>
                      <li className="list">Energy management and sustainable power solutions</li>
                      <li className="list">Fire alarm systems, emergency lighting, and advanced security (CCTV, intruder alarms)</li>
                      <li className="list">Safety inspections and Electrical Installation Condition Reports (EICRs)</li>
                      <li className="list">PAT Testing (Portable Appliance Testing)</li>
                      <li className="list">24/7 emergency call-out response for urgent issues</li>
                    </ul>
                  </div>

                  <div className="services-group">
                    <h4 className="service-list__title_3">
                      <a href="/contact" className="about__link">
                        <strong>Industry</strong>
                      </a>
                    </h4>
                    <ul className="service-list">
                      <li className="list">Large-scale rewiring and industrial installations</li>
                      <li className="list">Custom electrical fit-outs for warehouses and factories</li>
                      <li className="list">Planned and reactive maintenance programmes</li>
                      <li className="list">Energy management and sustainable power systems</li>
                      <li className="list">Fire alarm systems, emergency lighting, and advanced security (CCTV, intruder alarms)</li>
                      <li className="list">PAT Testing (Portable Appliance Testing)</li>
                      <li className="list">24/7 emergency call-out response</li>
                    </ul>
                  </div>
                </section>

                <div className="about-flex__image">
                  <img
                    src="https://res.cloudinary.com/dug1siluu/image/upload/v1757342482/ChatGPT_Image_Sep_8_2025_07_33_54_PM_pkgwsr.png"
                    alt="Eco Voltex Services"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section why-ev" aria-labelledby="why-choose-ev">
          <h2 id="why-choose-ev" className="section__title">Why Choose Eco Voltex?</h2>

          <div className="why-ev__wrap">
            <div className="why-ev__copy">
              <p className="why-ev__intro">
                At Eco Voltex, our roots are built on <strong>trust, expertise, and innovation</strong>. Every branch of
                our work is dedicated to powering your home or business the right way.
              </p>

              <div className="why-ev__grid" role="list">
                {gridItems.map((item, idx) => (
                  <article className="why-ev__card" role="listitem" key={idx} tabIndex={0}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="why-ev__media">
              <div className="why-ev__media-inner">
                <img
                  src="https://res.cloudinary.com/dug1siluu/image/upload/v1757354106/ChatGPT_Image_Sep_8_2025_10_52_27_PM_krwpik.png"
                  alt="Engineer installing CCTV turret camera for Eco Voltex client"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="our-journey">
          <h2 id="our-journey" className="section__title">
            Our Journey
          </h2>
          <p className="section__text">
            <a href="/about" className="about__link">
              <strong>Eco Voltex</strong>
            </a>{" "}
            was founded in 2024 with a clear vision: to provide safe,
            reliable, and sustainable electrical solutions across the UK. From
            day one, we’ve focused on delivering quality services tailored to
            the needs of our clients. Over time, our reputation has grown
            stronger, built on trust, innovation, and energy-efficient
            practices. Today, we continue to expand our reach, supporting an
            ever-growing community of satisfied clients while shaping a smarter,
            more sustainable future.
          </p>
        </section>

        <section className="home-testimonials" aria-labelledby="what-clients-say">
          <h2 id="what-clients-say" className="section__title">
            What Our Clients Say
          </h2>

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
              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
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
