import React from 'react';
import NavMenu from './NavMeniu';
import logoImage from '../images/logo.png';
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="navigation-menu">
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;



