import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope as Mail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Eco Voltex</h5>
            <p>
              Your trusted partner in electrical services. We provide
              high-quality solutions for all your electrical needs.
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              5-7 Vine Street, Uxbridge London, UB81QE, United Kingdom
            </p>
            <p>
             
                <Mail className="me-2" />
                info@ecovoltex.co.uk
             
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
              <li>
                <Link
                  to="/services/Electrical-Installation-Maintenance"
                  className="text-light text-decoration-none"
                >
                  Electrical Installation & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Emergency-Electrical"
                  className="text-light text-decoration-none"
                >
                  Emergency Electrical Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/PAT-testing"
                  className="text-light text-decoration-none"
                >
                  PAT Testing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Fire-alarms"
                  className="text-light text-decoration-none"
                >
                  Fire Alarms Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/CCTV"
                  className="text-light text-decoration-none"
                >
                  CCTV Services
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-light text-decoration-none">
                  Location
                </Link>

              </li>
              <li>
                <Link to="/Book Now" className="text-light text-decoration-none">
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
                href="https://twitter.com/EcoVoltex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaTwitter size={30} />
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
              <p className="mt-3 fw-bold">24 Hour Service</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 Eco Voltex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
