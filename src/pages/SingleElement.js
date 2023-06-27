import React from 'react';
import { useParams } from 'react-router-dom';
import elementsData from '../API/elements.json';
import Images from '../images/index.js';
import '../CSS/Main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SingleElement = () => {
  const { id } = useParams();

  const element = elementsData.elements.find(
    (element) => element.id === parseInt(id)
  );

  if (!element) {
    return <p>Element not found.</p>;
  }

  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <img src={Images[element.image]} alt={element.name} />
      <h2>{element.name}</h2>
      <p>{element.description}</p>
      <h3>Strong Against</h3>
      {element.strongAgainst.map((id) => {
        const strongElement = elementsData.elements.find(
          (element) => element.id === id
        );
        return (
          <div key={strongElement.id}>
            <img src={Images[strongElement.image]} alt={strongElement.name} />
          </div>
        );
      })}
      <h3>Weak Against</h3>
      {element.weakAgainst.map((id) => {
        const weakElement = elementsData.elements.find(
          (element) => element.id === id
        );
        return (
          <div key={weakElement.id}>
            <img src={Images[weakElement.image]} alt={weakElement.name} />
          </div>
        );
      })}
      <h3>Can Boost</h3>
      {element.canBoost.map((id) => {
        const boostElement = elementsData.elements.find(
          (element) => element.id === id
        );
        return (
          <div key={boostElement.id}>
            <img src={Images[boostElement.image]} alt={boostElement.name} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default SingleElement;
