/* eslint-disable no-unused-vars */
// import { Router } from 'react-router-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { ApiContextProvider } from 'contexts/ApiContext';
import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
// import App from 'App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import { getBooks } from '../../redux/actions/action.creators';

describe('Given the component SearchBar', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  describe('when a term is searched', () => {
    test('then component should register user input', () => {
      store = mockStore(initialState);
      render(
        <Provider store={store}>
          <SearchBar />
        </Provider>
      );
      const input = screen.getByRole('textbox');
      userEvent.type(input, 'madrid');
      expect(input.value).toBe('madrid');
    });
  });
});
