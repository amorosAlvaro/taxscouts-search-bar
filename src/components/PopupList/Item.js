/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-debugger */
import React from 'react';
// import fetchImageAxios from '../../helpers/fetchImageAxios';

function Item({ book }) {
  const bookIsbn = book.titles.isbn.$;
  const amazonLink = `https://www.amazon.com/s?i=stripbooks&rh=p_66%3A${bookIsbn}&s=relevanceexprank&Adv-Srch-Books-Submit.x=21&Adv-Srch-Books-Submit.y=7&unfiltered=1&ref=sr_adv_b`;

  // const testLink = getWeb(amazonLink).then(() => {
  //   console.log(assignValue);
  //   return assignValue;
  // });

  return (
    <a
      className="amazon-link"
      href={amazonLink}
      target="_blank"
      aria-label="amazon"
      rel="noreferrer"
    >
      <div className="item-container">
        <img
          className="item-container__image"
          alt="Book cover"
          src="getWeb(amazonLink).then(() => assignValue)"
        />
        <div className="item-container__info">
          <p className="item-container__info-title">{book.titleweb}</p>
          <p className="item-container__info-author">{book.authorweb}</p>
          <p className="item-container__info-isbn">{book.titles.isbn.$}</p>
        </div>

      </div>
    </a>
  );
}

export default Item;
