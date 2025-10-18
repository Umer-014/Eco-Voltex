import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import ElectricalServicesl from "../Services/Electrical Installation & Maintenance/ElectricalServices";
import EmergencyElectrical from "../Services/Electrical Installation & Maintenance/EmergencyElectrical";

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
        <Route path="/services/Installation-Maintenance" element={<ElectricalServicesl />} />
        <Route path="/services/Emergency-Electrical" element={<EmergencyElectrical />} />
        <Route path="/areas-we-cover" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default Stack;
