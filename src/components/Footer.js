import React from 'react';
import '../CSS/Footer.css';
const Footer = () => {
  return (
    <footer className="footer-container"> {/* Add a class name to the footer container */}
      <p>&copy; {new Date().getFullYear()} All rights reserved Sun-Noir 2023.</p>
    </footer>
  );
};

export default Footer;
