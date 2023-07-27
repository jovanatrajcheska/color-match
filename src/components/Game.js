import React from 'react';
import { getRandomColors } from '../helpers/RandomColors';

class Game extends React.Component {
  state = {
    gameStatus: 'playing',
    score: 0,
    colors: getRandomColors(), 
  };

  handleClick = (isMatch) => {
    this.setState((prevState) => {
      if (prevState.gameStatus !== 'playing') {
        return null;
      }
      const { wordOne, inkColor } = prevState.colors;
      const correctClick = (wordOne === inkColor) === isMatch;
      return {
        gameStatus: correctClick ? 'correct' : 'wrong',
        score: correctClick ? prevState.score + 1 : prevState.score - 1,
      };
    }, this.resetGameAfterDelay);
  };

  resetGameAfterDelay = () => {
    setTimeout(() => {
      this.setState({ colors: getRandomColors(), gameStatus: 'playing' });
    }, 1000);
  };

  render() {
    const { wordOne, wordTwo, inkColor } = this.state.colors;
    const { gameStatus, score } = this.state;

    return (
      <div className="body">
        <div className={`game-status status-${gameStatus}`} />
        <div className="score">Score: {score}</div>
        <div className="container">
          <div className="word" style={{ color: wordOne }}>
            {wordOne}
          </div>
          <div className="word" style={{ color: inkColor }}>
            {wordTwo}
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick(true)}>YES</button>
          <button onClick={() => this.handleClick(false)}>NO</button>
        </div>
      </div>
    );
  }
}

export default Game;
