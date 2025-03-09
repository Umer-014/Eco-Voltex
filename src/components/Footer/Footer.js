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
  FaPhone,
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
              9A Oak Road Romford, RM30PH
            </p>
            <p>
              <FaPhone className="me-2" />
              <a
                href="tel:+447930558824"
                className="text-decoration-none text-white"
              >
                +44 7930 558824
              </a>
            </p>
            <p>
              <FaPhone className="me-2" />
              <a
                href="tel:+447947767758"
                className="text-decoration-none text-white"
              >
                +44 7947 767758
              </a>
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
                  to="/services/Residential"
                  className="text-light text-decoration-none"
                >
                  Residential Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Commercial"
                  className="text-light text-decoration-none"
                >
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Industrial"
                  className="text-light text-decoration-none"
                >
                  Industrial Services
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
            <p className="mt-3">Monday: 8:00 AM - 5:00 PM</p>
            <p className="mt-3">Tuesday: 8:00 AM - 5:00 PM</p>
            <p className="mt-3">Wednesday: 8:00 AM - 5:00 PM</p>
            <p className="mt-3">Thusday: 8:00 AM - 5:00 PM</p>
            <p className="mt-3">Friday: 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4">
          <hr className="text-light" />
          <p className="mb-0">&copy; 2025 Eco Voltex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
