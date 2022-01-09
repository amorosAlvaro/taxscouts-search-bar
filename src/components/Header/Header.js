import { useSelector } from 'react-redux';
import Search from './SearchBar';
import PopupList from '../PopupList/PopupList';

function Header() {
  const books = useSelector((store) => store.books);

  return (
    <>
      <h1>Header</h1>
      <Search />
      <div>
        {books.length ? <PopupList /> : ''}
      </div>
    </>
  );
}

export default Header;
