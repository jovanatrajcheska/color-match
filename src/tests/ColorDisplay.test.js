import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorDisplay from '../components/ColorDisplay';

test('Words and color', () => {
    const wordOne = 'Pink';
    const wordTwo = 'Red';
    const inkColor = 'pink';
    const gameStatus = 'playing';

    render(<ColorDisplay wordOne={wordOne} wordTwo={wordTwo} inkColor={inkColor} gameStatus={gameStatus} />);

    const inkElement = screen.getByText(wordOne);
    const meaningElement = screen.getByText(wordTwo);

    expect(inkElement).toBeInTheDocument();
    expect(meaningElement).toBeInTheDocument();

    const inkElementStyle = window.getComputedStyle(inkElement);
    expect(inkElementStyle.color).toBe(inkColor);
});