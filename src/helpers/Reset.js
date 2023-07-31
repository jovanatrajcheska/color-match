import { getRandomColors } from './ColorGenerator';

export const resetGameAfterDelay = (setColors, setGameStatus) => {
  setTimeout(() => {
    setColors(getRandomColors());
    setGameStatus('playing');
  }, 1000);
};
