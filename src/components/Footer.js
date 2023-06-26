import React from 'react';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} All rights reserved Sun-Noir 2023.</p>
    </footer>
  );
};

export default Footer;


