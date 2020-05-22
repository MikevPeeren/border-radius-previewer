// React
import React from 'react';
import { render } from '@testing-library/react';

// Components
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Border Radius Previewer/i);
  expect(linkElement).toBeInTheDocument();
});
