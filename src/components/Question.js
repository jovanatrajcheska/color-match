import React from 'react';
import { getRandomColors } from '../helpers/RandomColors';

const Question = () => {

  const isTopWord = Math.random() >= 0.5;
  const colors = getRandomColors();
  const { wordOne, wordTwo, inkColor } = colors;
  const isMatch = wordOne === inkColor;

  
  return (
    <div className="question">
      Does the meaning of the{' '}
      <b>{isTopWord ? 'top' : 'bottom'}</b> word match the ink color of the{' '}
      <b>{isTopWord ? 'bottom' : 'top'}</b> word?
    </div>
  );
};

export default Question;
