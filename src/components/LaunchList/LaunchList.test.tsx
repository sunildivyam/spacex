import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LaunchList } from './LaunchList';
import { ILaunch } from '../../models';

describe('<LaunchList />', () => {
  test('it should mount', () => {
    const testLaunches = [] as Array<ILaunch>;
    render(<LaunchList launches={testLaunches} />);

    const launchList = screen.getByTestId('LaunchList');

    expect(launchList).toBeInTheDocument();
  });
});