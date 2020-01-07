// Import
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import - Selectors
import { selectSearchInput } from 'redux/search/search.selectors';

// Import - Actions
import { fetchImages } from 'redux/images/images.actions';
import { onSearchChange } from 'redux/search/search.actions';

// Import - Styles
import { SearchBarContainer } from './search-bar.styles';

// ----------------------------------------------------------------------------------------- //

const SearchBar = ({ searchInput, onSearchChange, fetchImages }) => {
  const onSubmit = async e => {
    e.preventDefault();

    fetchImages(searchInput);
    onSearchChange('');
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
            autoComplete="off"
            onChange={e => onSearchChange(e.target.value)}
          />
        </label>
      </form>
    </SearchBarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  searchInput: selectSearchInput,
});

export default connect(mapStateToProps, { onSearchChange, fetchImages })(
  SearchBar,
);
