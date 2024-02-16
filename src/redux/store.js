import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { carsReducer } from './carsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const carsConfig = {
  key: 'cars',
  storage,
  whitelist: ['favouritCarIds'],
};

const rootReducer = combineReducers({
  cars: persistReducer(carsConfig, carsReducer),
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
