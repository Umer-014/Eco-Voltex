import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import AboutUsPage from "../About/AboutUsPage";
import InstallationMaintenance from "../Services/Electrical Installation & Maintenance/InstallationMaintenance";
import PAT from "../Services/PAT/PAT";
import FireAlarms from "../Services/Fire Alarms/FireAlarms";
import CCTV from "../Services/CCTV/CCTV";
import ContactUsPage from "../Contact Us/ContactUsPage";
import FAQPage from "../FAQ/FAQPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "../../components/Top/ScrollToTop";
import LiveChat from '../../components/Chat Icon/LiveChat';

const Stack = () => {
  return (
    <Router>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services/Installation-Maintenance" element={<InstallationMaintenance />} />
        <Route path="/services/PAT-testing" element={<PAT />} />
        <Route path="/services/Fire-alarms" element={<FireAlarms />} />
        <Route path="/services/CCTV" element={<CCTV />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default Stack;
