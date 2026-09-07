import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.jpg";
import "./header.css";

const services = [
  {
    to: "/services/Electrical-Installation-Maintenance",
    label: "Electrical Installation & Maintenance",
  },
  { to: "/services/Emergency-Electrical", label: "Emergency Electrical Services" },
  { to: "/services/Fire-alarms", label: "Fire Alarm Systems" },
  { to: "/services/CCTV", label: "CCTV & Security Systems" },
  { to: "/services/PAT-testing", label: "PAT Testing" },
  { to: "/services/IT-Digital-Services", label: "IT & Digital Services" },
];

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/areas-we-cover", label: "Areas We Cover" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/feedback", label: "Feedback" }
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown state
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer
  const [drawerDropdownOpen, setDrawerDropdownOpen] = useState(false); // Mobile dropdown state

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle desktop dropdown visibility
  };

  const toggleDrawerDropdown = () => {
    setDrawerDropdownOpen(!drawerDropdownOpen); // Toggle mobile dropdown visibility
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open); // Toggle drawer visibility
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Eco Voltex Logo" className="logo-image" />
          <div className="text-container">
            <h1 className="company-name">Eco Voltex</h1>
            <p className="tagline">Sustainable Electrical Solutions</p>
          </div>
        </Link>
        </div>

      {/* Mobile Menu Button using Material-UI IconButton */}
      <IconButton className="menu-toggle" onClick={() => toggleDrawer(true)} aria-label="Open navigation menu">
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      {/* Material-UI Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List className="drawer">
          {navItems.slice(0, 2).map((item) => (
            <ListItem
              key={item.to}
              style={{ width: "300px" }}
              onClick={() => toggleDrawer(false)}
            >
              <NavLink to={item.to} end={item.end} className="nav-link">
                {item.label}
              </NavLink>
            </ListItem>
          ))}

          {/* Services Dropdown in Drawer */}
          <ListItem onClick={toggleDrawerDropdown} className="drawer-dropdown-item">
            <button className="nav-link dropdown-toggle" type="button">Services</button>
            <div
              className={`dropdown-menu ${drawerDropdownOpen ? "show" : ""}`}
            >
              {services.map((service) => (
                <NavLink
                  key={service.to}
                  to={service.to}
                  className="dropdown-item"
                  onClick={() => toggleDrawer(false)}
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </ListItem>

          {navItems.slice(2).map((item) => (
            <ListItem key={item.to} onClick={() => toggleDrawer(false)}>
              <NavLink to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            </ListItem>
          ))}
          <ListItem onClick={() => toggleDrawer(false)}>
            <NavLink to="/Book Now" className="nav-link drawer-cta">
              Book Now
            </NavLink>
          </ListItem>
        </List>
      </Drawer>

      {/* Desktop Menu */}
      <nav className="nav">
        <ul className="nav-links">
          {navItems.slice(0, 2).map((item) => (
            <li className="nav-item" key={item.to}>
              <NavLink to={item.to} end={item.end} className="nav-link">
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-item dropdown">
            <button
              onClick={toggleDropdown}
              className="nav-link dropdown-toggle"
              type="button"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {services.map((service) => (
                  <NavLink key={service.to} to={service.to} className="dropdown-item">
                    {service.label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          {navItems.slice(2).map((item) => (
            <li className="nav-item" key={item.to}>
              <NavLink to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-item">
            <NavLink to="/Book Now" className="nav-link nav-link--cta">
              Book Now
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
