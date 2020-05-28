// React
import React, { useState } from 'react';

// CSS
import './App.scss';

// Components
import Header from './Header';
import Generator from './Generator';
import BorderRadiusDisplay from './BorderRadiusDisplay';

// Constants
import { DEFAULT_BORDER_RADIUS } from '../constants/general';

const App = () => {
  const [borderRadiusValue, setBorderRadiusValue] = useState(
    DEFAULT_BORDER_RADIUS,
  );

  /**
   * Update the BorderRadiusDisplay
   * @param borderRadius string
   */
  const handleBorderRadiusChange = (borderRadius: string) => {
    setBorderRadiusValue(borderRadius);
  };

  return (
    <div className="container">
      <Header></Header>
      <Generator
        handleBorderRadiusChange={handleBorderRadiusChange}
      ></Generator>
      {borderRadiusValue && (
        <BorderRadiusDisplay
          borderRadiusValue={borderRadiusValue}
        ></BorderRadiusDisplay>
      )}
    </div>
  );
};

export default App;
