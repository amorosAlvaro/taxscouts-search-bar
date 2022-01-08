import axios from 'axios';
import actionTypes from './action.types';

const API = 'https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=';

function getBooks(query) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API}${query}`);
      const books = data.work;
      dispatch({ type: actionTypes.LOAD_BOOKS, books });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export default getBooks;
