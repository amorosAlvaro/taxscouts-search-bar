import actionTypes from '../actions/action.types';

const initialBooks = [];

function booksReducer(books = initialBooks, action) {
  let nextBooks = { ...books };

  switch (action.type) {
    case actionTypes.LOAD_BOOKS:

      nextBooks = action.books;
      return nextBooks;
    default:
      return nextBooks;
  }
}

export default booksReducer;
