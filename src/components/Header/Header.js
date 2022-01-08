/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getBooks from '../../redux/actions/action.creators';

function Header() {
  const dispatch = useDispatch();

  const config = {
    method: 'get',
    url: 'https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=to',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    const books = getBooks(config);
    console.log(books);
  },);

  return (
    <h1>Header</h1>
  );
}

export default Header;
