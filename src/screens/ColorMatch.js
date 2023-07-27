import React from 'react';
import '../Game.css';
import { getRandomColors } from '../helpers/RandomColors';
import Question from '../components/Question';
import Game from '../components/Game';

class ColorMatch extends React.Component {
  state = {
    gameStatus: 'playing',
    score: 0,
  };

  colors = getRandomColors();

  handleClick = (isMatch) => {
    this.setState((prevState) => {
      if (prevState.gameStatus !== 'playing') {
        return null;
      }
      const correctClick = (this.colors.wordInkMatch ^ isMatch) === 0;
      return {
        gameStatus: correctClick ? 'correct' : 'wrong',
        score: correctClick ? prevState.score + 1 : prevState.score - 1,
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
    const { wordOne, wordTwo, inkColor } = this.colors;
    const { gameStatus, score } = this.state;

    return (
      <div className="game">
        <Question wordOne={wordOne} wordTwo={wordTwo} />
        <Game
          gameStatus={gameStatus}
          score={score}
          inkColor={inkColor}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ColorMatch;
