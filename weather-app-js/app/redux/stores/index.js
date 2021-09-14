import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
// enable dev tools ectention
const store = createStore(
	rootReducer,
	compose( applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : f => f )
);
export default store;
