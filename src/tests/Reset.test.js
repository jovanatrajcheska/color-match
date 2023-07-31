import { act } from '@testing-library/react';
import { resetGameAfterDelay } from '../helpers/Reset';

jest.useFakeTimers();

test('testing Reset', () => {
  const setColors = jest.fn();
  const setGameStatus = jest.fn();

  resetGameAfterDelay(setColors, setGameStatus);

  expect(setColors).not.toHaveBeenCalled();
  expect(setGameStatus).not.toHaveBeenCalled();

  act(() => {
    jest.advanceTimersByTime(1000);
  });


  expect(setColors).toHaveBeenCalledTimes(1);
  expect(setGameStatus).toHaveBeenCalledTimes(1);
  expect(setGameStatus).toHaveBeenCalledWith('playing');
});
