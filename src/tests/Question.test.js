import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Question from '../components/Question';

test('renders without error', () => {
  render(<Question />);
});


