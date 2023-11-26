import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>TRAVELBUD</span>
      </div>
      
        <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/ride-now">Ride Now</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
