// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const selectSearch = state => state.search;

export const selectSearchInput = createSelector(
  [selectSearch],
  search => search.input,
);
