import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { YearFilter } from './YearFilter';

describe('<YearFilter />', () => {
  test('it should mount', () => {
    render(<YearFilter />);

    const yearFilter = screen.getByTestId('YearFilter');

    expect(yearFilter).toBeInTheDocument();
  });
});