const availableColors = ['black', 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'cyan'];

const getRandomColor = () => {
  return availableColors[Math.floor(Math.random() * availableColors.length)];
};

const getRandomColors = () => {
  let wordOne, wordTwo, inkColor;

  // random select of words & they should not be same & should have different colors
  wordOne = getRandomColor();
  do {
    wordTwo = getRandomColor();
  } while (wordTwo === wordOne);

  // different colors for both words
  do {
    inkColor = getRandomColor();
  } while (inkColor === wordOne || inkColor === wordTwo);

  const isTopWord = Math.random() >= 0.5;

  return {
    wordOne,
    wordTwo,
    inkColor,
    isTopWord,
    wordInkMatch: isTopWord ? wordOne === inkColor : wordTwo === inkColor,
  };
};

export { getRandomColors };
