import { createStore } from 'redux';
import reducers from './reducers/index';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger)

const store = createStore(reducers, {}, middleware);

export default store;