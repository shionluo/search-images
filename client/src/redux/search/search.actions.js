// Import
import SearchTypes from './search.types';

// ----------------------------------------------------------------------------------------- //

const { SET_SEARCH_INPUT } = SearchTypes;

export const setSearchInput = item => ({
  type: SET_SEARCH_INPUT,
  payload: item,
});
