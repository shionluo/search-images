// Import
import { combineReducers } from 'redux';

// Import - Reducer
import imagesReducer from './images/images.reducer';

// Reducers

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
