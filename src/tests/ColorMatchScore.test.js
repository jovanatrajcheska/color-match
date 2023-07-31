import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorMatchScore from '../components/ColorMatchScore';

test('renders without error', () => {
    render(<ColorMatchScore score={0} />);
});

test('display score', () => {
    const score = 5;
    render(<ColorMatchScore score={score} />);

    const scoreElement = screen.getByText(`Score: ${score}`);

    expect(scoreElement).toBeInTheDocument();
});


