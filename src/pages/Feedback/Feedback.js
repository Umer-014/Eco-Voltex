import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./feedback.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });
  const [feedbacks, setFeedbacks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupClass, setPopupClass] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Ensure trailing slash handling for clean endpoint URL concatenation
  const API_BASE = process.env.REACT_APP_API_GATEWAY_URL;
  const CLEAN_BASE = API_BASE.endsWith('/') ? API_BASE : `${API_BASE}/`;

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${CLEAN_BASE}get-response`);
      const data = await response.json();
      if (response.ok) {
        setFeedbacks(data.feedbacks || data);
      }
    } catch (error) {
      console.error("Failed to load feedbacks", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPopup(false);

    try {
      const response = await fetch(`${CLEAN_BASE}post-response`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setPopupMessage("Thank you for your valuable feedback!");
        setPopupClass("alert-success");
        setFormData({ name: "", rating: 5, comment: "" });
        fetchFeedbacks(); // Refresh reviews list dynamically
      } else {
        setPopupMessage(result.message || "Failed to submit feedback. Try again.");
        setPopupClass("alert-danger");
      }
    } catch (error) {
      setPopupMessage("An error occurred. Check your network connection.");
      setPopupClass("alert-danger");
    } finally {
      setShowPopup(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="feedback-page bg-light py-5" style={{ minHeight: "80vh" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-lg p-4 border-0 rounded-4">
                <h2 className="fw-bold text-center text-success mb-2">Share Your Experience</h2>
                <p className="text-center text-muted mb-4">We value your feedback to help us improve our services.</p>
                
                {showPopup && (
                  <div className={`alert text-center ${popupClass}`} role="alert">
                    {popupMessage}
                  </div>
                )}

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
                    <label htmlFor="rating" className="form-label fw-semibold">Rating (1 to 5 Stars)</label>
                    <select
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      className="form-select p-3"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      <option value="3">⭐⭐⭐ (3/5)</option>
                      <option value="2">⭐⭐ (2/5)</option>
                      <option value="1">⭐ (1/5)</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label fw-semibold">Your Feedback</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows="4"
                      className="form-control p-3"
                      placeholder="Tell us what you think..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-2 fw-bold d-flex justify-content-center align-items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Feedback"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="fw-bold text-center mb-4">What Our Clients Say</h3>
              {isLoading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading reviews...</span>
                  </div>
                  <p className="text-muted mt-2">Loading reviews...</p>
                </div>
              ) : feedbacks.length === 0 ? (
                <p className="text-center text-muted">No feedback yet. Be the first to share your thoughts!</p>
              ) : (
                <div className="row">
                  {feedbacks.map((item, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <div className="card h-100 shadow-sm border-0 p-3 rounded-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="fw-bold mb-0 text-success">{item.name}</h5>
                          <span className="text-warning">{"⭐".repeat(Number(item.rating))}</span>
                        </div>
                        <p className="text-muted mb-0">{item.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;