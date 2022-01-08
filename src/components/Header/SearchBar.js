/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/magnifying-glass.svg';
import getBooks from '../../redux/actions/action.creators';

function Search() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e, input) => {
    if (input.length) {
      e.preventDefault();
      dispatch(getBooks(input));
    }
  };

  return (
    <section className="search-container">
      <form
        onChange={(e) => handleChange(e, input)}
        className="search-container-form"
      >
        <label
          className="search-container-form__label"
          htmlFor="search-container-form__input"
        >
          Search
        </label>
        <input
          value={input}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          className="search-container-form__input"
          id="search-container-form__input"
        />
        {input.length > 0 && (
          <button
            onClick={() => setInput('')}
            type="button"
            className="search-container-form__delete"
          >
            X
          </button>
        )}
        <button className="search-container-form__submit">
          <img
            src={searchIcon}
            className="search-container-form__icon"
            alt="Magnifying glass icon"
          />
        </button>
      </form>
    </section>
  );
}

export default Search;
