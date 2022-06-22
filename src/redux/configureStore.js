import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { StatisticsReducer } from './stats';

const rootReducer = combineReducers({
  StatisticsReducer,
});

// const store = configureStore(rootReducer, applyMiddleware(logger, thunk));
const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(logger, thunk));

export default store;
