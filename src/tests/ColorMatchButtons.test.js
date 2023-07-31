import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorMatchButtons from '../components/ColorMatchButtons';


test('correct labels of the buttons', () => {
    render(<ColorMatchButtons handleClick={() => { }} />);

    const yesButton = screen.getByText('YES');
    const noButton = screen.getByText('NO');

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
});

test('click YES = handleClick true', () => {
    const handleClick = jest.fn();
    render(<ColorMatchButtons handleClick={handleClick} />);

    const yesButton = screen.getByText('YES');
    fireEvent.click(yesButton);

    expect(handleClick).toHaveBeenCalledWith(true);
});

test('click NO = handleClick false', () => {
    const handleClick = jest.fn();
    render(<ColorMatchButtons handleClick={handleClick} />);

    const noButton = screen.getByText('NO');
    fireEvent.click(noButton);

    expect(handleClick).toHaveBeenCalledWith(false);
});
