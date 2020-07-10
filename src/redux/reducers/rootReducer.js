import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import searchReducer from './search';
import selectReducer from './select';
import favoriteListReducer from './favoriteList';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteList'],
};

const rootReducer = combineReducers({
  searchRequest: searchReducer,
  selectedCountry: selectReducer,
  favoriteList: favoriteListReducer,
});

export default persistReducer(persistConfig, rootReducer);
