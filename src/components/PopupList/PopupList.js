import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import './popupList.css';

// function PopupList() {
//   const books = useSelector((store) => store.books);

//   return (
//     <nav className="recipes-nav">
//       <ul className="recipes-nav__list">
//         {books.map((book) => (
//           <Item key={book.authorweb} book={book} />
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default PopupList;

function PopupList() {
  const books = useSelector((store) => store.books);

  return (
    <nav className="recipes-nav">
      <ul className="recipes-nav__list">
        <Item key={books[0].authorweb} book={books[0]} />
        <Item key={books[1].authorweb} book={books[1]} />
        <Item key={books[2].authorweb} book={books[2]} />
      </ul>
    </nav>
  );
}

export default PopupList;
