// Import
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Import - Reducers
import rootReducer from './root.reducer';

// ----------------------------------------------------------------------------------------- //

const middlewares = [];

// Import middlewares if in development environment
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
