/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getBooks from '../../redux/actions/action.creators';

function Header() {
  const dispatch = useDispatch();
  /*   const books = useSelector((store) => store.books);
 */
  useEffect(() => {
    dispatch(getBooks('to'));
  }, []);

  return (
    <h1>Header</h1>
  );
}

export default Header;
