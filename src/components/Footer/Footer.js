import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import napitLogo from "../../assets/Certification.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope as Mail,
  FaPhoneAlt,
} from "react-icons/fa";

const footerServices = [
  { to: "/services/Electrical-Installation-Maintenance", label: "Electrical Installation & Maintenance" },
  { to: "/services/Emergency-Electrical", label: "Emergency Electrical Services" },
  { to: "/services/PAT-testing", label: "PAT Testing Services" },
  { to: "/services/Fire-alarms", label: "Fire Alarm Services" },
  { to: "/services/CCTV", label: "CCTV & Security Systems" },
];

const Footer = () => {
  return (
    <footer className="ev-footer text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Eco Voltex</h5>
            <p>
              Professional electrical, fire alarm, CCTV and PAT services for
              homes, landlords and businesses across London.
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              5-7 Vine Street, Uxbridge London, UB81QE, United Kingdom
            </p>
            <p>
              <Mail className="me-2" />
              info@ecovoltex.co.uk
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              24/7 emergency electrical support
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              {footerServices.map((service) => (
                <li key={service.to}>
                  <Link to={service.to} className="text-light text-decoration-none">
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/areas-we-cover"
                  className="text-light text-decoration-none"
                >
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link
                  to="/Book Now"
                  className="text-light text-decoration-none"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-light text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-icons d-flex gap-3">
              <a
                href="https://www.facebook.com/EcoVoltex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/EcoVoltex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/EcoVoltex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <p className="mt-3 fw-bold">NAPIT approved. Fully insured. Audit-ready reports.</p>

            {/* NAPIT Certification */}
            <div className="napit-certification mt-4 text-center">
              <h5 className="fw-bold mb-3" style={{ textAlign: 'left' }}>NAPIT Certification</h5>

              <div className="napit-section d-flex align-items-left justify-content-left gap-3 flex-wrap" >
                <a
                  href="https://search.napit.org.uk/member/81305/eco-voltex-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={napitLogo}
                    alt="NAPIT Registered Installer"
                    className="napit-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2026 Eco Voltex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
