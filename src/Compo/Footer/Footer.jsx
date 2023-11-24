import React from 'react';
import './Foooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <a >About</a>
          <a >Skills</a>
          <a >Projects</a>
        </nav>
        <p>&copy; 2023 Mi Sitio Web</p>
      </div>
    </footer>
  );
};

export default Footer;
