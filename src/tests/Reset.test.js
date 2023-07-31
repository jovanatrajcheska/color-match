import { act } from '@testing-library/react';
import { resetGameAfterDelay } from '../helpers/Reset';

jest.useFakeTimers();

const setColors = jest.fn();
const setGameStatus = jest.fn();

test('testing Reset', () => {

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
