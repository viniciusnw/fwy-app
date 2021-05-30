import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS
import reducers from './reducers';

const rootReducer = (state, action) => {
  if (action.type == 'LOGOUT') {
    state.User = undefined
  };
  return combineReducers({ ...reducers })(state, action);
};

const reducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['LastUser'],
  },
  rootReducer,
);

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise)));
export const persistor = persistStore(store);
