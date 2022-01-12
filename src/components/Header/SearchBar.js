import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/magnifying-glass.svg';
import { getBooks, resetBooks } from '../../redux/actions/action.creators';
import {
  SearchContainer, SearchContainerForm, SearchContainerFormInput,
  SearchContainerFormDelete, SearchContainerFormSubmit
} from './SearchBar.styles';

function SearchBar() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (input.length) {
        dispatch(getBooks(input));
      } else {
        dispatch(resetBooks());
      }
    }, 200);

    return () => clearTimeout(delaySearch);
  }, [input]);

  return (
    <SearchContainer>
      <SearchContainerForm>
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

export default SearchBar;
