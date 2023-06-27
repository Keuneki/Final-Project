import React from 'react';
import { Link } from 'react-router-dom';
import magicData from '../API/magic.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/Main.css';

const PureMagic = () => {
  const pureMagic = magicData.magic.filter(magic => magic.type === 'pure');

  return (
    <div className="all-magic-container">
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Pure Magic</h2>
          <div className="magic-grid">
            {pureMagic.map(magic => (
              <Link to={`/magic/${magic.id}`} key={magic.id} className="magic-link">
                <div className="magic-item">
                  <img src={Images[magic.image]} alt={magic.name} />
                  <h3>{magic.name}</h3>
                  <p>{magic.description}</p>
                </div>
              </Link>
            ))}
            <Link to="/pure-magic" className="magic-link">
              <div className="magic-item">
                <h3>View All Pure Magic</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PureMagic;
