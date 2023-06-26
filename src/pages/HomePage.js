import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import './src/CSS/Main.css';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
