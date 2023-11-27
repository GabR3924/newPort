import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import './Foooter.css';

function Footer() {
  return (
    <div className="footerContainer" id='footer'>
      <footer className="footerWrapper">
        <h1 className="logoo">Gabriela Rodriguez</h1>
        <nav className="nav">
          <a href="#about" className="navLink">About</a>
          <a href="#skills" className="navLink">Skills</a>
          <a href="#projects" className="navLink">Projects</a>
        </nav>
        <div className="socialMediaIcons">
          <a  target="display" className="socialMediaIcon"><FaFacebookSquare /></a>
          <a  target="display" className="socialMediaIcon"><FaTwitterSquare /></a>
          <a  target="display" className="socialMediaIcon"><FaLinkedin /></a>
        </div>
        <p className="copyright">
          &copy; 2023 Gabriela Rodriguez . 
        </p>
      </footer>
    </div>
  );
}

export default Footer;
