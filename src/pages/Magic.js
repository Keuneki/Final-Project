import React, { useEffect, useState } from 'react';

const Magic = () => {
  const [magicData, setMagicData] = useState([]);

  useEffect(() => {
    fetch('/api/magic.json')
      .then(response => response.json())
      .then(data => setMagicData(data.magic))
      .catch(error => console.error('Error fetching magic data:', error));
  }, []);

  const groupedMagics = magicData.reduce((groups, magic) => {
    const { type } = magic;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(magic);
    return groups;
  }, {});

  return (
    <div>
      <h1>Pure Magics</h1>
      {groupedMagics.pure && (
        <div>
          {groupedMagics.pure.map(magic => (
            <div key={magic.id}>
              <h3>{magic.name}</h3>
              <img src={magic.image} alt={magic.name} />
              <p>{magic.description}</p>
              <p>Source: {magic.Source}</p>
            </div>
          ))}
        </div>
      )}

      <h1>Mixed Magics</h1>
      {groupedMagics.mixed && (
        <div>
          {groupedMagics.mixed.map(magic => (
            <div key={magic.id}>
              <h3>{magic.name}</h3>
              <img src={magic.image} alt={magic.name} />
              <p>{magic.description}</p>
              <p>Source: {magic.Source}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Magic;
