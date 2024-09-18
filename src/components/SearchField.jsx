import PropTypes from "prop-types";
import { useState } from "react";
import "../assets/css/SearchBar.css";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Rechercher..."
        className="search-input"
      />
      <button
        onClick={() => handleSearch(searchTerm)}
        className="search-button"
      >
        GO
      </button>
    </div>
  );
};

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};

SearchField.defaultProps = {
  buttonStyle: {},
  inputStyle: {},
};

export default SearchField;
