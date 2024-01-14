import './Search.scss';
import PropTypes from 'prop-types';

const Search = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search for a mount"
        className="search-input"
        value={searchTerm}
        onChange={event => handleSearchChange(event)}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
