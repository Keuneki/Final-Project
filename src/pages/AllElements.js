import React from 'react';
import { Link } from 'react-router-dom';
import elementsData from '../API/elements.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/Main.css';

const AllElements = () => {
  const primeElements = elementsData.elements.filter(
    (element) => element.type === 'prime'
  );
  const coreElements = elementsData.elements.filter(
    (element) => element.type === 'core'
  );

  return (
    <div className="all-elements-container">
      <div className="header-container">
        <Header />
      </div>
      <div>
        <h2>Prime Elements</h2>
        <div className="class-grid">
          {primeElements.map((element) => (
            <Link key={element.id} to={`/element/${element.id}`} className="class-card">
              <img src={Images[element.image]} alt={element.name} />
              <p>{element.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
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

export default AllElements;
