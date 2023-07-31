import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorMatchButtons from '../components/ColorMatchButtons';

const handleClick = jest.fn();

test('checking the content of the buttons', () => {
    render(<ColorMatchButtons handleClick={handleClick} />);

    const yesButton = screen.getByText('YES');
    const noButton = screen.getByText('NO');

    expect(yesButton).toBeInTheDocument();
    expect(noButton).toBeInTheDocument();
});

test('handleClick is true when YES is clicked', () => {
    render(<ColorMatchButtons handleClick={handleClick} />);

    fireEvent.click(screen.getByText('YES'));

    expect(handleClick).toHaveBeenCalledWith(true);
});

test('handleClick is false when NO is clicked', () => {
    render(<ColorMatchButtons handleClick={handleClick} />);

    fireEvent.click(screen.getByText('NO'));

    expect(handleClick).toHaveBeenCalledWith(false);
});
