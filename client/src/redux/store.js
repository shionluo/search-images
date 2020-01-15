// Import
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';

// Import - Reducers
import rootReducer from './root.reducer';

// Import - Saga
import rootSaga from './root.saga';

// ----------------------------------------------------------------------------------------- //

// Add Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// List of middlewares
const middlewares = [sagaMiddleware];

// Import middlewares if in development environment
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push();
// }

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// Run Redux Saga
sagaMiddleware.run(rootSaga);

export default store;
