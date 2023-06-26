import React from 'react';
import Search from './Search';
import NavMenu from './NavMenu';
import '.src/CSS/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">Logo</div>
      <NavMenu />
      <Search />
    </header>
  );
};

export default Header;


