// Import
import SearchTypes from './search.types';

// ----------------------------------------------------------------------------------------- //

const { ON_SEARCH_CHANGE } = SearchTypes;

const INITIAL_STATE = {
  input: '',
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  const reducer = {
    [ON_SEARCH_CHANGE]: {
      ...state,
      input: payload,
    },
  };

  return reducer[type] || state;
};

export default searchReducer;
