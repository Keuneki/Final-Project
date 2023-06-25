import React, { useState } from 'react';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
       
        const classesResponse = await fetch('/API/classes.json');
        const elementsResponse = await fetch('/API/elements.json');
        const magicResponse = await fetch('/API/magic.json');
  
        const classesData = await classesResponse.json();
        const elementsData = await elementsResponse.json();
        const magicData = await magicResponse.json();
  
    
        const filteredData = [...classesData, ...elementsData, ...magicData].filter(item =>
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
      <div>
        <input
          type="text"
          placeholder="Search by name or type"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
  
        <ul>
          {searchResults.map(item => (
            <li key={item.id}>{item.name} - {item.type}</li>
          ))}
        </ul>
      </div>
    );
  }
  