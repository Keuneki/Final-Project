import React from 'react';
import classesData from '../src/API/classes.json';
import Images from './src/images/index.js';

const SingleClass = ({ match }) => {
  const classId = match.params.id;
  const selectedClass = classesData.find((cls) => cls.id === classId);

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
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Type: {type}</p>
      <p>Weapon: {weapon}</p>
      <p>Fighting Style: {combatStyle}</p>
      <p>Damage Type: {damageType}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default SingleClass;
