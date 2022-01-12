import { render, screen } from '@testing-library/react';
import React from 'react';
import Item from './Item';

describe('Given the component Item', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      const book = {
        '@uri': 'https://reststop.randomhouse.com/resources/works//197',
        authorweb: 'ABE, KOBO',
        titles: { isbn: { '@formatcode': 'TR', $: '9780834802131' } },
        onsaledate: '2001-07-10T00:00:00-04:00',
        series: 'Vintage International',
        titleAuth: 'The Box Man : Kobo Abe',
        titleSubtitleAuth: 'The Box Man : A Novel : Kobo Abe',
        titleshort: 'BOX MAN, THE',
        titleweb: 'The Box Man',
        workid: '197'
      };

      render(
        <Item book={book} />
      );
      expect(screen.findByText(/The Box Man/i)).toBeInTheDocument();
    });
  });
});
