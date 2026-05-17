"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="logo-text">Gas<span className="logo-highlight">Point</span></span>
          </Link>
        </div>
        
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#features" onClick={closeMenu}>Features</Link></li>
          <li><Link href="#services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="#download" onClick={closeMenu}>App</Link></li>
          <li><Link href="#order" className="btn-primary btn-small" onClick={closeMenu}>Order Gas</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
