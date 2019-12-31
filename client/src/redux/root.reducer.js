// Import
import { combineReducers } from 'redux';

// Import - Reducer
import searchReducer from './search/search.reducer';
import imagesReducer from './images/images.reducer';

// Reducers

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  search: searchReducer,
  images: imagesReducer,
});

export default rootReducer;
