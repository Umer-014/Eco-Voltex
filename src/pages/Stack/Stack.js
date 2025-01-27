import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import AboutUsPage from "../About/AboutUsPage";
import Residential from "../Services/Residential/Residential";
import Commercial from "../Services/Commercial/Commercial";
import Industrial from "../Services/Industrial/Industrial";
import FireAlarms from "../Services/Fire Alarms/FireAlarms";
import CCTV from "../Services/CCTV/CCTV";
import ContactUsPage from "../Contact Us/ContactUsPage";
import FAQPage from "../FAQ/FAQPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "../../components/ScrollToTop";
import LiveChat from '../../components/LiveChat';

const Stack = () => {
  return (
    <Router>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services/Residential" element={<Residential />} />
        <Route path="/services/Commercial" element={<Commercial />} />
        <Route path="/services/Industrial" element={<Industrial />} />
        <Route path="/services/Fire-alarms" element={<FireAlarms />} />
        <Route path="/services/CCTV" element={<CCTV />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default Stack;
