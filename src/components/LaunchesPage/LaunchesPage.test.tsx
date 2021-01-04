import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {LaunchesPage} from './LaunchesPage';

describe('<LaunchesPage />', () => {
  test('it should mount', () => {
    render(<LaunchesPage />);
    
    const launchesPage = screen.getByTestId('LaunchesPage');

    expect(launchesPage).toBeInTheDocument();
  });
});