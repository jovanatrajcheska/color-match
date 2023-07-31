const availableColors = ['black', 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'cyan'];

export const getRandomColors = () => {
  const wordOne = availableColors[Math.floor(Math.random() * availableColors.length)];
  const wordTwo = availableColors[Math.floor(Math.random() * availableColors.length)];
  const inkColor = Math.random() < 0.4 ? wordOne : availableColors[Math.floor(Math.random() * availableColors.length)];

  return {
    wordOne,
    wordTwo,
    inkColor,
    wordInkMatch: wordOne === inkColor,
  };
};
