import {
  createStore, compose, applyMiddleware, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import booksReducer from '../reducers/book.reducer';

export default function configureStore(preloadState) {
  const rootReducer = combineReducers({
    books: booksReducer,
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
