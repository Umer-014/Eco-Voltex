import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contactus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupClass, setPopupClass] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .sendForm("service_zu4vrhd", "template_1649nft", e.target, "zdAhM19MmtKrK5LWB") // Replace with your actual credentials
      .then(
        (result) => {
          console.log(result.text);
          setPopupMessage("Your request has been sent!");
          setPopupClass("alert-success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setPopupMessage("Failed to send your message. Please try again.");
          setPopupClass("alert-danger");
        }
      )
      .finally(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      });
  };

  return (
    <>
      <Header />
      <div className="contact-us-page bg-light d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
        <div className="container">
          {showPopup && (
            <div className={`alert text-center ${popupClass}`} role="alert">
              {popupMessage}
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-lg p-4 border-0 rounded-4">
                <h2 className="fw-bold text-center text-success mb-3">Contact Us</h2>
                <p className="text-center text-muted mb-4">We’d love to hear from you! Fill out the form below to get in touch.</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control p-3"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control p-3"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-semibold">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="form-control p-3"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100 py-2 fw-bold">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
