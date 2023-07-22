import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
