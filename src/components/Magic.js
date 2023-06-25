import React from 'react';

const Element = ({ image, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
};

export default Element;
