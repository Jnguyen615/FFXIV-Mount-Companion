import './Search.scss';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Search = ({ mounts, setFilteredMounts, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term)
  };

  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
  
    const filteredMounts = searchTerm
      ? mounts.filter(mount => mount.name.toLowerCase().includes(lowerCaseTerm))
      : mounts;
  
    setFilteredMounts(filteredMounts);
  }, [searchTerm, setFilteredMounts]);
  

  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search for a mount"
        className="search-input"
        value={searchTerm}
        onChange={(event) => handleSearchChange(event)}
      />
    </div>
  );
};

Search.propTypes = {
  mounts: PropTypes.array.isRequired,
  setFilteredMounts: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
