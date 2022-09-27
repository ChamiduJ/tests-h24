import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';

test('renders the Products', () => {
  const { getByText } = render(<Products />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
