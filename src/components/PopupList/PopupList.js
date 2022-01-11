import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { BooksNav, BooksNavList } from './PopupList.styles';

function PopupList() {
  const books = useSelector((store) => store.books);

  return (
    <BooksNav>
      <BooksNavList>
        {books.map((book) => (
          <Item key={book.authorweb} book={book} />
        ))}
      </BooksNavList>
    </BooksNav>
  );
}

export default PopupList;
