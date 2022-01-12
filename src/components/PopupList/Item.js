/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect } from 'react';
import fetchImageAxios from '../../services/fetchImageAxios';
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

  const [link, setLink] = useState('');

  useEffect(() => {
    fetchImageAxios(amazonLink).then((data) => setLink(data));
  }, []);

  return (
    <>
      {link && (
      <AmazonLink
        href={amazonLink}
        target="_blank"
      >
        <BooksNavListItem>
          <BooksNavItemContainer>
            <BooksNavItemImg
              src={link}
              alt={`${book.titleweb} book`}
              className="recipes-nav__item-img"
            />
            <BooksNavItemInfo>
              <BooksNavInfoHeader>{book.titleweb}</BooksNavInfoHeader>
            </BooksNavItemInfo>
          </BooksNavItemContainer>
        </BooksNavListItem>
      </AmazonLink>
      ) }
    </>

  );
}

export default Item;
