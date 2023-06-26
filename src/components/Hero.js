import React from 'react';
import Search from './Search';
import '../src/CSS/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <Search />
      </div>
      <div className="hero__right">
        <img
          className="hero__image"
          src="images/hero-image.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default Hero;
