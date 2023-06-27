import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../CSS/Main.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="content-container">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
