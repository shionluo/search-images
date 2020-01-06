// Import
import { combineReducers } from 'redux';

// Import - Reducer
import imagesReducer from './images/images.reducer';
import searchReducer from './search/search.reducer';

// Reducers

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  images: imagesReducer,
  search: searchReducer,
});

export default rootReducer;
