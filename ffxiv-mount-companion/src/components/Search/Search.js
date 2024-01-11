import './Search.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search for a mount"
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
