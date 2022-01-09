import React from 'react';

function Item({ book }) {
  return (
    <div className="item-container">
      <img className="item-container__image" alt="Book cover" />
      <div className="item-container__info">
        <p className="item-container__info-title">{book.titleweb}</p>
        <p className="item-container__info-author">{book.authorweb}</p>
        <p className="item-container__info-isbn">{book.titles.isbn.$}</p>
      </div>

    </div>
  );
}

export default Item;
