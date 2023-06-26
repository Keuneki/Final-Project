import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';
import '../CSS/Main.css';
import Footer from '../components/Footer';

const BasicClass = () => {
  const basicClasses = classesData.classes.filter((cls) => cls.type === 'basic');

  return (
    <div>
      <Header />
      <h1>Basic Classes</h1>
      {basicClasses.map((cls) => (
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

export default BasicClass;
