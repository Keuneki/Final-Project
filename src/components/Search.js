import React, { useState } from 'react';
import clasess from '../API/classes.json';
import elements from '../API/elements.json';
import magic from '../API/magic.json';
import Images from '../images/index';
import '../CSS/Search.css';
import '../CSS/Main.css'; // Add the import for Main.css

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const filteredData = [...clasess.classes, ...elements.elements, ...magic.magic].filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="all-classes-container"> {/* Add the desired class name */}
      <input
        type="text"
        placeholder="Search by name or type"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul className="class-grid"> {/* Add the desired class name */}
        {searchResults.map(item => (
          <li key={item.id} className="class-card"> {/* Add the desired class name */}
            {item.name}
            {item.description} - <img src={Images[item.image]} alt="Response image" />
          </li>
        ))}
      </ul>
    </div>
  );
}
