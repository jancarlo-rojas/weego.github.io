import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Navbar-specific styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">GPT Assistant</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/About" className="navbar-link" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/stock" className="navbar-link" onClick={() => setIsOpen(false)}>
          Optimizations
        </Link>
        <Link to="/Contact" className="navbar-link" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
      <button className="navbar-menu-button" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
