import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';

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
