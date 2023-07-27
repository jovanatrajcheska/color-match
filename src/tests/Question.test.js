import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Question from '../components/Question';


jest.mock('../helpers/RandomColors', () => ({
  getRandomColors: () => ({
    wordOne: 'green',
    wordTwo: 'blue',
    inkColor: 'green',
  }),
}));


test('renders without crashing', () => {
    render(<Question />);
});

test('first word and color matching', () => {
  render(<Question />);

  expect(screen.getByText('green')).toBeInTheDocument();
  expect(screen.getByText('blue')).toBeInTheDocument();

  const colorElem = screen.getByTestId('ink-color');
  expect(screen.getByText('green').textContent.trim()).toBe(colorElem.textContent.trim());
});

