import React from 'react';
import { Link } from 'react-router-dom';
import classesData from './classes.json';
import Images from './src/images/index.js';

const AlClasses = () => {
  const classesByType = {
    basic: [],
    advanced: [],
    master: []
  };

  classesData.forEach((cls) => {
    classesByType[cls.type].push(cls);
  });

  return (
    <div>
      <h1>All Classes</h1>
      <h2>Basic</h2>
      {classesByType.basic.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={cls.image} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}

      <h2>Advanced</h2>
      {classesByType.advanced.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={cls.image} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}

      <h2>Master</h2>
      {classesByType.master.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={cls.image} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlClasses;
