import React from 'react';
import MagicElement from '../components/Element';
import elementsData from '../API/elements.json';



const AllElements = () => {
    const coreElements = elementsData.elements.filter((element) => element.type === 'core');
    const primeElements = elementsData.elements.filter((element) => element.type === 'prime');
  
    return (
      <div>
        <div>
          <h2>Core Elements</h2>
          <div className="element-group">
            {coreElements.map((element) => (
              <MagicElement key={element.id} element={element} />
            ))}
          </div>
        </div>
        <div>
          <h2>Prime Elements</h2>
          <div className="element-group">
            {primeElements.map((element) => (
              <MagicElement key={element.id} element={element} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AllElements;
  