import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//State interfaces
import { StateI, ActionI } from './interfaces';
import SessionReducer from './session/reducer';
import UserReducer from './user/reducer';
// Create a store for my configuration and type it
const exampleInitialState = {};

// REDUCERS
export const reducer = (
  state: StateI = exampleInitialState,
  action: ActionI
) => {
  const { type } = action;
  const reducers = {
    ...SessionReducer,
    ...UserReducer,
  };
  console.log(type,state);
  return reducers[type] ? reducers[type](state, action) : state;
};
const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['user', 'session'], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState: StateI) {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState,
    enhancer: composeWithDevTools(applyMiddleware()),
  });
}

export const initializeStore = (preloadedState: StateI) =>
  makeStore({
    ...(preloadedState || { ...exampleInitialState }),
  });

export default function useStore(initialState: StateI) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
