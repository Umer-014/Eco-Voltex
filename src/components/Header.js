import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.jpg";
import "./header.css";

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
      <div className="logo">
        <img src={logo} alt="Eco Voltex Logo" className="logo-image" />
        <span className="company-name">Eco Voltex</span>
      </div>

      {/* Mobile Menu Button using Material-UI IconButton */}
      <IconButton className="menu-toggle" onClick={() => toggleDrawer(true)}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      {/* Material-UI Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List className="drawer">
          <ListItem style={{width: "300px"}} button onClick={() => toggleDrawer(false)}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </ListItem>

          {/* Services Dropdown in Drawer */}
          <ListItem button onClick={toggleDrawerDropdown}>
            <button className="nav-link dropdown-toggle">Services</button>
            <div
              className={`dropdown-menu ${drawerDropdownOpen ? "show" : ""}`}
            >
              <Link to="/services/Residential" className="dropdown-item">
                Residential
              </Link>
              <Link to="/services/Commercial" className="dropdown-item">
                Commercial
              </Link>
              <Link to="/services/Industrial" className="dropdown-item">
                Industrial
              </Link>
              <Link to="/services/Fire-alarms" className="dropdown-item">
                Fire Alarms
              </Link>
              <Link to="/services/CCTV" className="dropdown-item">
                CCTV
              </Link>
            </div>
          </ListItem>

          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </ListItem>
          <ListItem button onClick={() => toggleDrawer(false)}>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/* Desktop Menu */}
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button
              onClick={toggleDropdown}
              className="nav-link dropdown-toggle"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/services/service" className="dropdown-item">
                Electrical Installation & Maintenance
                </Link>
                <Link to="/services/Fire-alarms" className="dropdown-item">
                Fire Alarm Systems
                </Link>
                <Link to="/services/CCTV" className="dropdown-item">
                CCTV & Security Systems
                </Link>
                <Link to="/services/PAT-testing" className="dropdown-item">
                PAT Testing
                </Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
