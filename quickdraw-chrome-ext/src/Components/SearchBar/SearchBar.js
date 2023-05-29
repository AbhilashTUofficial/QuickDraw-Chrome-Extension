import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for the custom styles

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search operation or handle search query
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Ask me anything..."
        className="search-input"
      />
    </form>
  );
};

export default SearchBar;
