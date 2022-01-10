/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/magnifying-glass.svg';
import getBooks from '../../redux/actions/action.creators';
import {
  SearchContainer, SearchContainerForm, SearchContainerFormInput,
  SearchContainerFormDelete, SearchContainerFormSubmit
} from './searchBar.styles';

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
    <SearchContainer>
      <SearchContainerForm
        onChange={(e) => handleChange(e, input)}
      >
        <SearchContainerFormInput
          value={input}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />
        {input.length > 0 && (
          <SearchContainerFormDelete
            onClick={() => setInput('')}
          >
            X
          </SearchContainerFormDelete>
        )}
        <SearchContainerFormSubmit>
          <img
            src={searchIcon}
            className="search-container-form__icon"
            alt="Magnifying glass icon"
          />
        </SearchContainerFormSubmit>
      </SearchContainerForm>
    </SearchContainer>
  );
}

export default Search;
