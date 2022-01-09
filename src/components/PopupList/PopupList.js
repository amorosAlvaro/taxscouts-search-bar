import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

function PopupList() {
  const books = useSelector((store) => store.books);

  return (
    <nav className="books-nav">
      <ul className="books-nav__list">
        {books.map((book) => (
          <Item key={book.authorweb} book={book} />
        ))}
      </ul>
    </nav>
  );
}

export default PopupList;
