import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LaunchCard } from './LaunchCard';
import { ILaunch } from '../../models';

describe('<LaunchCard />', () => {
  test('it should mount', () => {
    const testLaunch = {} as ILaunch;
    render(<LaunchCard launch={testLaunch} />);

    const launchCard = screen.getByTestId('LaunchCard');

    expect(launchCard).toBeInTheDocument();
  });
});