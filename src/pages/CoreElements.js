import React from 'react';
import { Link } from 'react-router-dom';
import elementsData from '../API/elements.json';
import Images from '../images/index.js';
import '../CSS/Main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoreElements = () => {
  const coreElements = Array.from(elementsData.elements).filter(
    (element) => element.type === 'core'
  );

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="all-elements-container">
        <h2>Core Elements</h2>
        <div className="class-grid">
          {coreElements.map((element) => (
            <Link key={element.id} to={`/element/${element.id}`} className="class-card">
              <img src={Images[element.image]} alt={element.name} />
              <p>{element.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoreElements;
