// React
import React from 'react';
import { render } from '@testing-library/react';

// Components
import App from '../App';

test('Renders the App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Border Radius Previewer/i);
  expect(linkElement).toBeInTheDocument();
});
