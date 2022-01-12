/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { BooksNav, BooksNavList } from './PopupList.styles';

function PopupList() {
  const books = useSelector((store) => store.books);

  return (
    <BooksNav>
      <BooksNavList>
        {books.map((book, i) => (
          <Item key={`${book.authorweb}${i}`} book={book} />
        ))}
      </BooksNavList>
    </BooksNav>
  );
}

export default PopupList;
