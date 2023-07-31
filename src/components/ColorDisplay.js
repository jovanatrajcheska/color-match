import React from 'react';

const ColorDisplay = ({ wordOne, wordTwo, inkColor, gameStatus }) => {
  const toggleColorPosition = Math.random() >= 0.5;
  const displayWordOne = toggleColorPosition ? wordOne : wordTwo;
  const displayWordTwo = toggleColorPosition ? wordTwo : wordOne;

  return (
    <div className="body">
      <div className="words-container">
        <div className="ink" style={{ color: inkColor }}>
          {displayWordOne}
        </div>
        <div className="meaning">
          {displayWordTwo}
        </div>
      </div>
      {gameStatus !== 'playing' && (
        <div className={`game-status status-${gameStatus}`}>
          {gameStatus === 'correct' ? '✓' : '✗'}
        </div>
      )}
    </div>
  );
};

export default ColorDisplay;
