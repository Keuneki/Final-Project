import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMeniu';
import logoImage from '../images/logo.png';
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div className="navigation-menu">
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;



