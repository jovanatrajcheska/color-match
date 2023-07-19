import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Game from './Game';


describe('Game', () => {

  test('no errors found', () => {
    render(<Game />);
  });

  test('first score', () => {
    const { getByText } = render(<Game />);
    const score = getByText('Score: 0');
    expect(score).toBeInTheDocument();
  });

  test('correct answer', async () => {
    const { getByText } = render(<Game />);
    const score = getByText('Score: 0');
    const buttonYes = getByText('YES');
    fireEvent.click(buttonYes);
    await waitFor(() => {
      expect(score).toHaveTextContent('Score: 1');
    });
  });


  test('incorrect answer', async () => {
    const { getByText } = render(<Game />);
    const score = getByText('Score: 0');
    const buttonNo = getByText('NO');
    fireEvent.click(buttonNo);
    await waitFor(() => {
      expect(score).toHaveTextContent('Score: -1');
    });
  });
  
});
