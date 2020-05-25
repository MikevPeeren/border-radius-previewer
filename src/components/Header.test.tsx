// React
import React from 'react';
import { render } from '@testing-library/react';

// Components
import Header from './Header';

// Constants
import { HEADER } from '../constants/general';

test('Renders the Header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(HEADER);
  expect(linkElement).toBeInTheDocument();
});
