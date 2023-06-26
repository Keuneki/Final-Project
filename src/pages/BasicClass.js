import React from 'react';
import { Link } from 'react-router-dom';
import classesData from './classes.json';
import Images from './src/images/index.js';

const BasicClass = () => {
  const basicClasses = classesData.filter((cls) => cls.type === 'basic');

  return (
    <div>
      <h1>Basic Classes</h1>
      {basicClasses.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={Images[cls.image]} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BasicClass;
