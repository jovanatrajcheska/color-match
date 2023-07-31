import React from 'react';
import ColorDisplay from '../components/ColorDisplay';
import ColorMatchButtons from '../components/ColorMatchButtons';
import Question from '../components/Question';
import ColorMatchScore from '../components/ColorMatchScore';
import { resetGameAfterDelay } from '../helpers/Reset';
import { handleColorMatchClick } from '../helpers/ClickHelper';
import '../Game.css'


const ColorMatchGame = () => {
    const [gameStatus, setGameStatus] = React.useState('playing');
    const [score, setScore] = React.useState(0);
    const [colors, setColors] = React.useState(getRandomColors);

    const handleButtonClick = (isMatch) => {
        handleColorMatchClick(isMatch, gameStatus, colors, setGameStatus, setScore, () => resetGameAfterDelay(setColors, setGameStatus));
    };

    const question = Math.random() >= 0.5
        ? 'Does the meaning of the top word match the ink color of the bottom word?'
        : 'Does the meaning of the bottom word match the ink color of the top word?';

    const {
        wordOne,
        wordTwo,
        inkColor,
    } = colors;

    return (
        <div className="game">
            <Question question={question} />
            <ColorMatchScore score={score} />
            <ColorDisplay
                wordOne={wordOne}
                wordTwo={wordTwo}
                inkColor={inkColor}
                gameStatus={gameStatus}
            />
            <ColorMatchButtons handleClick={handleButtonClick} />

        </div>
    );
};
export default ColorMatchGame;
