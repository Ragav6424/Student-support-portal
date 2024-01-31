// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import '..//assets/css/navbar.css'; // Ensure to adjust the path based on your project structure
import logo from'..//assets/images/logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/profile">PROFILE</Link>
      </div>
    </nav>
  );
}

export default Navbar;
