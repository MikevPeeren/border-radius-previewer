// React
import React from 'react';
import { render } from '@testing-library/react';

// Components
import BorderRadiusDisplay from './BorderRadiusDisplay';

// Constants
import {
  BORDER_RADIUS_LABEL,
  DEFAULT_BORDER_RADIUS,
} from '../constants/general';

test('Renders the Border Radius Label', () => {
  const { getByText } = render(
    <BorderRadiusDisplay borderRadiusValue={DEFAULT_BORDER_RADIUS} />,
  );
  const linkElement = getByText(BORDER_RADIUS_LABEL);
  expect(linkElement).toBeInTheDocument();
});
