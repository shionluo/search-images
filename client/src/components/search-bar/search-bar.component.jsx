// Import
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Import - Actions
import { fetchImages } from 'redux/images/images.actions';

// Import - Styles
import { SearchBarContainer } from './search-bar.styles';

// ----------------------------------------------------------------------------------------- //

const SearchBar = ({ fetchImages }) => {
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = e => setSearchInput(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();
    fetchImages(searchInput);
    setSearchInput('');
  };

  return (
    <SearchBarContainer>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">
          Images Search
          <input
            type="text"
            id="search"
            placeholder="..."
            value={searchInput}
            onChange={onInputChange}
          />
        </label>
      </form>
    </SearchBarContainer>
  );
};

export default connect(null, { fetchImages })(SearchBar);
