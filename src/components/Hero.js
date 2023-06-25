import React from 'react';
import Search from './Search';
import './CSS/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <Search />
      </div>
      <div className="hero__right">
        <img
          className="hero__image"
          src="path/to/your/image.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default Hero;
