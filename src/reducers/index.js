import { combineReducers } from 'redux';
import bookList from './reducer-bookList';
import bookSelected from './reducer-bookSelected';

const reducers = combineReducers({
  books: bookList,
  activeBook: bookSelected
});

export default reducers;