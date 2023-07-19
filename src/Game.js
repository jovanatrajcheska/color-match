import React from 'react';
import './Game.css';


const availableColors = ['black', 'blue', 'red', 'green', 'yellow', 'pink', 'purple', 'cyan'];

const getRandomColors = () => {
  const wordOne = availableColors[Math.floor(Math.random() * availableColors.length)];
  const wordTwo = availableColors[Math.floor(Math.random() * availableColors.length)];
  const inkColor = Math.random() < 0.3 ? wordOne : availableColors[Math.floor(Math.random() * availableColors.length)];


  return {
    wordOne,
    wordTwo,
    inkColor,
    wordInkMatch: wordOne === inkColor,
  };
};

class Game extends React.Component {
  state = {
    gameStatus: 'playing',
    score: 0
  };

  colors = getRandomColors();

  handleClick = (isMatch) => {
    this.setState((prevState) => {
      if (prevState.gameStatus !== 'playing') {
        return null;
      }
      const correctClick =
        (this.colors.wordInkMatch ^ isMatch) === 0;
      return {
        gameStatus: correctClick ? 'correct' : 'wrong',
        score: correctClick ? prevState.score + 1 : prevState.score - 1
      };
    }, this.resetGameAfterDelay);
  };

  resetGameAfterDelay = () => {
    setTimeout(() => {
      this.colors = getRandomColors();
      this.setState({ gameStatus: 'playing' });
    }, 1000);
  };

  render() {
    const {
      wordOne,
      wordTwo,
      inkColor,
    } = this.colors;
    const { gameStatus, score } = this.state;
    const grade = Math.random();

    return (
      (grade >= 0.5) ?
        <>
          <div className="game">
            <div className="question">Does the meaning of the <b>top</b> word match the ink color of the <b>bottom </b>word?</div>
            <div className="body">
              <div className={`game-status status-${gameStatus}`} />
              <div className="score">Score: {score}</div>
              <div className="meaning">
                {wordOne}
              </div>
              <div className="ink" style={{ color: inkColor }}>
                {wordTwo}
              </div>
              <div className="buttons">
                <button onClick={() => this.handleClick(true)}>
                  YES
                </button>
                <button onClick={() => this.handleClick(false)}>
                  NO
                </button>
              </div>
            </div>
          </div>
        </>
        :
        <>
          <div className="game">
            <div className="question">Does the meaning of the <b>bottom </b> word match the ink color of the <b>top</b> word?</div>
            <div className="body">
              <div className={`game-status status-${gameStatus}`} />
              <div className="score">Score: {score}</div>
              <div className="ink" style={{ color: inkColor }}>
                {wordTwo}
              </div>
              <div className="meaning">
                {wordOne}
              </div>
              <div className="buttons">
                <button onClick={() => this.handleClick(true)}>
                  YES
                </button>
                <button onClick={() => this.handleClick(false)}>
                  NO
                </button>
              </div>
            </div>
          </div>
        </>
    );
  }
}

export default Game;
