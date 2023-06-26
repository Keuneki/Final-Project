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
    <Header />
      <h1>Advanced Classes</h1>
      {advancedClasses.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={Images[cls.image]} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default AdvancedClass;
