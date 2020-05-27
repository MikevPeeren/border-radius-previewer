// React
import React, { useState } from 'react';

// CSS
import './Generator.scss';

import { TOP, LEFT, RIGHT, BOTTOM } from '../constants/general';

const Generator = () => {
  const [topSliderValue, setTopSliderValue] = useState(50);
  const [leftSliderValue, setLeftSliderValue] = useState(50);
  const [rightSliderValue, setRightSliderValue] = useState(50);
  const [bottomSliderValue, setBottomSliderValue] = useState(50);

  const handleSliderChange = (event: any, location: string) => {
    switch (location) {
      case TOP:
        setTopSliderValue(event.target.value);
        break;
      case LEFT:
        setLeftSliderValue(event.target.value);
        break;
      case RIGHT:
        setRightSliderValue(event.target.value);
        break;
      case BOTTOM:
        setBottomSliderValue(event.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="borderRadiusPreviewer">
      <div className="borderRadiusPreviewer__shape"></div>
      {topSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id={TOP}
          type="range"
          min="0"
          max="100"
          value={topSliderValue}
          onChange={(event) => {
            handleSliderChange(event, TOP);
          }}
        />
      )}
      {leftSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id={LEFT}
          type="range"
          min="0"
          max="100"
          value={leftSliderValue}
          onChange={(event) => {
            handleSliderChange(event, LEFT);
          }}
        />
      )}
      {rightSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id={RIGHT}
          type="range"
          min="0"
          max="100"
          value={rightSliderValue}
          onChange={(event) => {
            handleSliderChange(event, RIGHT);
          }}
        />
      )}
      {bottomSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id={BOTTOM}
          type="range"
          min="0"
          max="100"
          value={bottomSliderValue}
          onChange={(event) => {
            handleSliderChange(event, BOTTOM);
          }}
        />
      )}
    </div>
  );
};

export default Generator;
