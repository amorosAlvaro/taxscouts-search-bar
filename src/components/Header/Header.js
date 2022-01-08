/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getBooks from '../../redux/actions/action.creators';
import Search from './SearchBar';

function Header() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  const [input, setInput] = useState('');

  /*   useEffect(() => {
    dispatch(getBooks('to'));
  }, []);
 */
  return (
    <>
      <h1>Header</h1>
      <Search />
    </>
  );
}

export default Header;
