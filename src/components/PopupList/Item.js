/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-debugger */
import React from 'react';
// import fetchImageAxios from '../../helpers/fetchImageAxios';

function Item({ book }) {
  const bookIsbn = book.titles.isbn.$;

  const amazonLink = `https://www.amazon.com/s?i=stripbooks&rh=p_66%3A${bookIsbn}&s=relevanceexprank&Adv-Srch-Books-Submit.x=21&Adv-Srch-Books-Submit.y=7&unfiltered=1&ref=sr_adv_b`;

  // const amazonLink2 = `https://www.amazon.com/s?k=${bookIsbn}&i=stripbooks-intl-ship&crid=3LIIXXF9V26CK&sprefix=${bookIsbn}%2Cstripbooks-intl-ship%2C272&ref=nb_sb_noss`;
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
      <li className="recipes-nav__list-item">
        <div className="recipes-nav__link-container">
          <img
            src="https://m.media-amazon.com/images/I/81rypU+zd6L._AC_UY327_FMwebp_QL65_.jpg"
            alt={`${book.titleweb} book`}
            className="recipes-nav__item-img"
          />
          <div className="recipes-nav__item-info">
            <p className="recipes-nav__info-header">{book.titleweb}</p>
          </div>
        </div>
      </li>
    </a>
  );
}

export default Item;

// <li className="recipes-nav__list-item">
// <div className="recipes-nav__link-container">
//     <img
//       src="getWeb(amazonLink).then(() => assignValue)"
//       alt={`${item.name} book`}
//       className="recipes-nav__item-img"
//     <div className="recipes-nav__item-info">
//       <h3 className="recipes-nav__info-header">{book.titleweb}</h3>
//       <p className="recipes-nav__info-text">{book.authorweb}</p>
//     </div>
//   </Link>
// </div>
// </li>
