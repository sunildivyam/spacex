import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppFooter } from './AppFooter';

describe('<AppFooter />', () => {
  test('it should mount', () => {
    render(<AppFooter />);

    const appFooter = screen.getByTestId('AppFooter');

    expect(appFooter).toBeInTheDocument();
  });
});