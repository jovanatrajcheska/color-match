export const handleColorMatchClick = (isMatch, gameStatus, colors, setGameStatus, setScore, resetGameAfterDelay) => {
    if (gameStatus !== 'playing') {
      return;
    }
  
    const correctClick = (colors.wordInkMatch ^ isMatch) === 0;
    setGameStatus(correctClick ? 'correct' : 'wrong');
    setScore(prevScore => correctClick ? prevScore + 1 : prevScore - 1);
  
    resetGameAfterDelay();
  };
  