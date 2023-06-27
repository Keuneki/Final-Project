import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/Main.css';

const AdvancedClass = () => {
  const advancedClasses = classesData.classes.filter((cls) => cls.type === 'advanced');

  return (

<div>
      <div className="header">
        <Header />
        </div>
        <div className="all-classes-container">
           <h1 className="class-title">Advanced Classes</h1>
        <div className="class-grid">
        {advancedClasses.map((cls) => (
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
  </div>
  );
};

export default AdvancedClass;
