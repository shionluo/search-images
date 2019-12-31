// Import
import React, { useState } from 'react';
import { connect } from 'react-redux';

// Import - Actions
import { setSearchInput } from 'redux/search/search.actions';
import {
  showImagesList,
  setImagesList,
  setImagesListStatus,
} from 'redux/images/images.actions';

// Import - Styles
import { SearchBarContainer } from './search-bar.styles';

// ----------------------------------------------------------------------------------------- //

const SearchBar = ({
  setSearchInput,
  showImagesList,
  setImagesList,
  setImagesListStatus,
}) => {
  const [input, setInput] = useState('');

  const onInputChange = e => setInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    setImagesList([]);
    setImagesListStatus(false);
    setSearchInput(input);
    showImagesList();
    setInput('');
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
            value={input}
            onChange={onInputChange}
          />
        </label>
      </form>
    </SearchBarContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  setSearchInput: item => dispatch(setSearchInput(item)),
  showImagesList: () => dispatch(showImagesList()),
  setImagesList: images => dispatch(setImagesList(images)),
  setImagesListStatus: status => dispatch(setImagesListStatus(status)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
