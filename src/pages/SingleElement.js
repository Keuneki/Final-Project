import React from 'react';
import { useParams } from 'react-router-dom';
import elementsData from '../API/elements.json';

const SingleElement = () => {
    const { id } = useParams();
    const element = elementsData.elements.find((element) => element.id === parseInt(id));
  
    return (
      <div>
        <img src={element.image} alt={element.name} />
        <h1>{element.name}</h1>
        <p>{element.description}</p>
        <h2>Strong Against:</h2>
        <div className="element-group">
          {element.strongAgainst.map((strongElementId) => {
            const strongElement = elementsData.elements.find(
              (element) => element.id === strongElementId
            );
            return (
              <img
                key={strongElement.id}
                src={strongElement.image}
                alt={strongElement.name}
              />
            );
          })}
        </div>
        <h2>Weak Against:</h2>
        <div className="element-group">
          {element.weakAgainst.map((weakElementId) => {
            const weakElement = elementsData.elements.find(
              (element) => element.id === weakElementId
            );
            return (
              <img key={weakElement.id} src={weakElement.image} alt={weakElement.name} />
            );
          })}
        </div>
        <h2>Can Boost:</h2>
        <div className="element-group">
          {element.canBoost.map((boostElementId) => {
            const boostElement = elementsData.elements.find(
              (element) => element.id === boostElementId
            );
            return (
              <img
                key={boostElement.id}
                src={boostElement.image}
                alt={boostElement.name}
              />
            );
          })}
        </div>
      </div>
    );
  };
  
  export default SingleElement;
  