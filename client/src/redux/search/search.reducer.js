// Import
import SearchTypes from './search.types';

// ----------------------------------------------------------------------------------------- //

const { SET_SEARCH_INPUT } = SearchTypes;

const initialState = {
  input: '',
};

const searchReducer = (state = initialState, { type, payload }) => {
  const reducer = {
    [SET_SEARCH_INPUT]: {
      ...state,
      input: payload,
    },
  };

  return reducer[type] || state;
};

export default searchReducer;
