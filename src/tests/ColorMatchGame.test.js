import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorMatchGame from '../screens/ColorMatchGame';


test('renders without error', () => {
    render(<ColorMatchGame />);
});

test('should render the correct question', () => {
    render(<ColorMatchGame />);
    const questionElement = screen.getByText(/Does the meaning of the (top|bottom) word match the ink color of the (bottom|top) word?/);
    expect(questionElement).toBeInTheDocument();
});

