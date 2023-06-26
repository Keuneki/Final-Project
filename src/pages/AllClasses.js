import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import '../CSS/Main.css';
import Footer from '../components/Footer';

const AlClasses = () => {
  const classesByType = {
    basic: [],
    advanced: [],
    master: []
  };

  classesData.classes.forEach((cls) => {
    classesByType[cls.type].push(cls);
  });

  return (
    <div className="all-classes-container">
      <Header />
      <h1>All Classes</h1>
      <h2>Basic</h2>
      <div className="class-grid">
        {classesByType.basic.map((cls) => (
          <Link to={`/class/${cls.id}`} key={cls.id}>
            <div className="class-card">
              <img src={Images[cls.image]} alt={cls.name} />
              <p>{cls.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2>Advanced</h2>
      <div className="class-grid">
        {classesByType.advanced.map((cls) => (
          <Link to={`/class/${cls.id}`} key={cls.id}>
            <div className="class-card">
              <img src={Images[cls.image]} alt={cls.name} />
              <p>{cls.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2>Master</h2>
      <div className="class-grid">
        {classesByType.master.map((cls) => (
          <Link to={`/class/${cls.id}`} key={cls.id}>
            <div className="class-card">
              <img src={Images[cls.image]} alt={cls.name} />
              <p>{cls.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AlClasses;
