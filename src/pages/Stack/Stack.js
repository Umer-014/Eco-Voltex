import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import AboutUsPage from "../About/AboutUsPage";
import PAT from "../Services/PAT/PAT";
import FireAlarms from "../Services/Fire Alarms/FireAlarms";
import CCTV from "../Services/CCTV/CCTV";
import ContactUsPage from "../Contact Us/ContactUsPage";
import FAQPage from "../FAQ/FAQPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "../../components/Top/ScrollToTop";
import LiveChat from '../../components/Chat Icon/LiveChat';
import ElectricalServices from "../Services/Electrical Installation & Maintenance/ElectricalServices";
import EmergencyElectrical from "../Services/Electrical Installation & Maintenance/EmergencyElectrical";
import BookNow from "../Pricing Layout/BookNow";
import Feedback from "../Feedback/Feedback";


import Location from "../Locations/Location";

const Stack = () => {
  return (
    <Router>
      <ScrollToTop />
      <LiveChat />
      <Routes>
        {/* Route Definitions */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        
        <Route path="/services/PAT-testing" element={<PAT />} />
        <Route path="/services/Fire-alarms" element={<FireAlarms />} />
        <Route path="/services/CCTV" element={<CCTV />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/services/Electrical-Installation-Maintenance" element={<ElectricalServices />} />
        <Route path="/services/Emergency-Electrical" element={<EmergencyElectrical />} />
        <Route path="/services/emergency-electrical" element={<Navigate to="/services/Emergency-Electrical" replace />} />
        <Route path="/areas-we-cover" element={<Location />} />
        <Route path="/locations" element={<Navigate to="/areas-we-cover" replace />} />
        <Route path="/location" element={<Navigate to="/areas-we-cover" replace />} />
        <Route path="/Book Now" element={<BookNow />} />
        <Route path="/book-now" element={<Navigate to="/Book Now" replace />} />
        <Route path="/book now" element={<Navigate to="/Book Now" replace />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default Stack;
