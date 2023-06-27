import React from 'react';
import { useParams } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import '../CSS/Main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SingleClass = () => {
  const { id } = useParams();
  const selectedClass = classesData.classes.find((cls) => cls.id === parseInt(id, 10));

  if (!selectedClass) {
    return <div>Class not found</div>;
  }

  const {
    image,
    name,
    description,
    type,
    weapon,
    combatStyle,
    damageType,
    role
  } = selectedClass;

  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <img src={Images[image]} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Type: {type}</p>
      <p>Weapon: {weapon}</p>
      <p>Fighting Style: {combatStyle}</p>
      <p>Damage Type: {damageType}</p>
      <p>Role: {role}</p>
      <Footer />
    </div>
  );
};

export default SingleClass;
