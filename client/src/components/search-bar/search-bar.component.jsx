// Import
import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Import - Actions
import {
  showImagesList,
  setImagesList,
  setImagesListStatus,
} from 'redux/images/images.actions';

// Import - Styles
import { SearchBarContainer } from './search-bar.styles';

// ----------------------------------------------------------------------------------------- //

const SearchBar = ({ showImagesList, setImagesList, setImagesListStatus }) => {
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = e => setSearchInput(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();

    setImagesList([]);
    setImagesListStatus(false);
    showImagesList();

    try {
      const response = await axios.post('/api', {
        searchInput,
      });

      setImagesList(response.data.results);
      setImagesListStatus(true);
    } catch {
      // eslint-disable-next-line no-console
      console.log('Error when fetching data !');
    }

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

const mapDispatchToProps = dispatch => ({
  showImagesList: () => dispatch(showImagesList()),
  setImagesList: images => dispatch(setImagesList(images)),
  setImagesListStatus: status => dispatch(setImagesListStatus(status)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
