import React from 'react';
import { useParams } from 'react-router-dom';
import magicData from '../API/magic.json';

const SingleMagic = () => {
  const { id } = useParams();
  const magic = magicData.magic.find(magic => magic.id === parseInt(id));

  if (!magic) {
    return <div>Magic not found!</div>;
  }

  return (
    <div>
      <img src={magic.image} alt={magic.name} />
      <h2>{magic.name}</h2>
      <p>{magic.description}</p>
      <p>Type: {magic.type}</p>
    </div>
  );
};

export default SingleMagic;
