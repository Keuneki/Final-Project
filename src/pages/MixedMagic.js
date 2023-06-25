import React from 'react';
import magicData from '../API/magic.json';

const MixedMagic = () => {
  const mixedMagic = magicData.magic.filter(magic => magic.type === 'mixed');

  return (
    <div className="container">
      <h2>Mixed Magic</h2>
      {mixedMagic.map(magic => (
        <div key={magic.id} className="magic-item">
          <img src={magic.image} alt={magic.name} />
          <h3>{magic.name}</h3>
          <p>{magic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MixedMagic;
