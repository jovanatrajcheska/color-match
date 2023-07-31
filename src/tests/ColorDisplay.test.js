import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorDisplay from '../components/ColorDisplay';

const wordOne = 'red';
const wordTwo = 'black';
const inkColor = 'pink';

test('display the correct words - one with color, one to check', () => {
    render(<ColorDisplay wordOne={wordOne} wordTwo={wordTwo} inkColor={inkColor} gameStatus="playing" />);

    const displayedWithColor = screen.getByTestId('color-ink');
    const meaningWordCheck = screen.getByTestId('color-meaning');

    expect(displayedWithColor).toBeInTheDocument();
    expect(meaningWordCheck).toBeInTheDocument();
    expect(displayedWithColor.textContent).toMatch(new RegExp(`${wordOne}|${wordTwo}`));
    expect(displayedWithColor.textContent).toMatch(new RegExp(`${wordOne}|${wordTwo}`));

    // could be tested like this too:
    // expect(displayedWithColor.textContent).toMatch(/red|black/);
    // expect(meaningWordCheck.textContent).toBe('black');
});

test('display the correct ink color', () => {
    render(<ColorDisplay wordOne={wordOne} wordTwo={wordTwo} inkColor={inkColor} gameStatus="playing" />);

    const inkElement = screen.getByTestId('color-ink');

    expect(inkElement).toBeInTheDocument();
    expect(inkElement.style.color).toBe(inkColor);
});

