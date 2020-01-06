// Import
import SearchTypes from './search.types';

// ----------------------------------------------------------------------------------------- //

const { ON_SEARCH_CHANGE } = SearchTypes;

export const onSearchChange = input => ({
  type: ON_SEARCH_CHANGE,
  payload: input,
});
