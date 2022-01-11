/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
import Search from './SearchBar';
import PopupList from '../PopupList/PopupList';
import fetchImg from '../../helpers/fetchImg';
import fetchImgAxios from '../../helpers/fetchImageAxios';

function Header() {
  const books = useSelector((store) => store.books);

  return (
    <Search />
  );
}

export default Header;
