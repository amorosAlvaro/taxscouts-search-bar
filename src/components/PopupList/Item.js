/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-debugger */
import React from 'react';
// import fetchImageAxios from '../../helpers/fetchImageAxios';
import {
  AmazonLink, BooksNavListItem, BooksNavItemContainer, BooksNavItemInfo, BooksNavInfoHeader,
  BooksNavItemImg
} from './PopupList.styles';

function Item({ book }) {
  let bookIsbn;
  if (Array.isArray(book.titles.isbn)) {
    bookIsbn = book.titles.isbn[0].$;
  } else {
    bookIsbn = book.titles.isbn.$;
  }

  const amazonLink = `https://www.amazon.com/s?i=stripbooks&rh=p_66%3A${bookIsbn}&s=relevanceexprank&Adv-Srch-Books-Submit.x=21&Adv-Srch-Books-Submit.y=7&unfiltered=1&ref=sr_adv_b`;

  return (
    <AmazonLink
      href={amazonLink}
      target="_blank"
    >
      <BooksNavListItem>
        <BooksNavItemContainer>
          <BooksNavItemImg
            src="https://m.media-amazon.com/images/I/81rypU+zd6L._AC_UY327_FMwebp_QL65_.jpg"
            alt={`${book.titleweb} book`}
            className="recipes-nav__item-img"
          />
          <BooksNavItemInfo>
            <BooksNavInfoHeader className="recipes-nav__info-header">{book.titleweb}</BooksNavInfoHeader>
          </BooksNavItemInfo>
        </BooksNavItemContainer>
      </BooksNavListItem>
    </AmazonLink>
  );
}

export default Item;
