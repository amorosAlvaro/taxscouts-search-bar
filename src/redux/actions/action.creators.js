import axios from 'axios';
import actionTypes from './action.types';

function getBooks(config) {
  return async (dispatch) => {
    try {
      const data = await axios(config);
      dispatch({ type: actionTypes.LOAD_BOOKS, data });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_TO_LOAD, error });
    }
  };
}

export default getBooks;
