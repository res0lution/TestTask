import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composedEnhancer);

export const persistor = persistStore(store);

export default { store, persistStore };
