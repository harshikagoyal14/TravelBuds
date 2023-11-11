import React, { useState } from 'react';
import Select from 'react-select';
import "../App.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div >
      <input 
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className='search-bar'
      />

    </div>
  );
}

export default SearchBar;
