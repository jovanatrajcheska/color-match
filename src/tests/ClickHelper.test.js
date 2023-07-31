import { handleColorMatchClick } from '../helpers/ClickHelper';

test('update score when buttons are clicked', () => {
    const gameStatus = 'playing';
    const colors = {
        wordOne: 'red',
        wordTwo: 'pink',
        inkColor: 'red',
        wordInkMatch: true,
    };
    const setGameStatus = jest.fn();
    const setScore = jest.fn();
    const resetGameAfterDelay = jest.fn();

    handleColorMatchClick(true, gameStatus, colors, setGameStatus, setScore, resetGameAfterDelay);
    expect(setGameStatus).toHaveBeenCalledWith('correct');
    expect(setScore).toHaveBeenCalledWith(expect.any(Function));

    handleColorMatchClick(false, gameStatus, colors, setGameStatus, setScore, resetGameAfterDelay);
    expect(setGameStatus).toHaveBeenCalledWith('wrong');
    expect(setScore).toHaveBeenCalledWith(expect.any(Function));
});
