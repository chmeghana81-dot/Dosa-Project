import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/logo.png" alt="Kadappa Cafe" style={{height: '130px', width: 'auto'}} />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <Link to="/menu" className="nav-link">MENU</Link>
        <Link to="/book" className="nav-link">BOOK TABLE</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
