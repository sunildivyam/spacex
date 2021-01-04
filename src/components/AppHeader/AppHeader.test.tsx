import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppHeader } from './AppHeader';

describe('<AppHeader />', () => {
  test('it should mount', () => {
    render(<AppHeader />);

    const appHeader = screen.getByTestId('AppHeader');

    expect(appHeader).toBeInTheDocument();
  });
});