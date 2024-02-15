import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { carsReducer } from './carsSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
