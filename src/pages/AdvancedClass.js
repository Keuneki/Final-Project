import React from 'react';
import { Link } from 'react-router-dom';
import classesData from './classes.json';
import Images from './src/images/index.js';

const AdvancedClass = () => {
  const advancedClasses = classesData.filter((cls) => cls.type === 'advanced');

  return (
    <div>
      <h1>Advanced Classes</h1>
      {advancedClasses.map((cls) => (
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

export default AdvancedClass;
