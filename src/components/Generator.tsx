// React
import React, { useState, useEffect } from 'react';

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

  // TODO: Cleanup the mess below

  // Handle Top Slider
  useEffect(() => {
    const shapeElement = document.getElementById('shape');

    if (shapeElement) {
      const topLeftRadius = shapeElement.style.borderTopLeftRadius;
      const topRightRadius = shapeElement.style.borderTopRightRadius;

      const secondPercentageTopLeftRadius =
        topLeftRadius.charAt(topLeftRadius.length - 4) === '%'
          ? topLeftRadius.substring(topLeftRadius.length - 5)
          : topLeftRadius.substring(topLeftRadius.length - 4);
      const secondPercentageTopRightRadius =
        topRightRadius.charAt(topRightRadius.length - 4) === '%'
          ? topRightRadius.substring(topRightRadius.length - 5)
          : topRightRadius.substring(topRightRadius.length - 4);

      shapeElement.style.borderTopLeftRadius = `${topSliderValue}% ${secondPercentageTopLeftRadius}`;
      shapeElement.style.borderTopRightRadius = `${
        100 - topSliderValue
      }% ${secondPercentageTopRightRadius}`;
    }
  }, [topSliderValue]);

  // Handle Bottom Slider
  useEffect(() => {
    const shapeElement = document.getElementById('shape');

    if (shapeElement) {
      const bottomLeftRadius = shapeElement.style.borderBottomLeftRadius;
      const bottomRightRadius = shapeElement.style.borderBottomRightRadius;

      const secondPercentageBottomLeftRadius =
        bottomLeftRadius.charAt(bottomLeftRadius.length - 4) === '%'
          ? bottomLeftRadius.substring(bottomLeftRadius.length - 5)
          : bottomLeftRadius.substring(bottomLeftRadius.length - 4);
      const secondPercentageBottomRightRadius =
        bottomRightRadius.charAt(bottomRightRadius.length - 4) === '%'
          ? bottomRightRadius.substring(bottomRightRadius.length - 2)
          : bottomRightRadius.substring(bottomRightRadius.length - 4);

      shapeElement.style.borderBottomLeftRadius = `${bottomSliderValue}% ${secondPercentageBottomLeftRadius}`;
      shapeElement.style.borderBottomRightRadius = `${
        100 - bottomSliderValue
      }% ${secondPercentageBottomRightRadius}`;
    }
  }, [bottomSliderValue]);

  // Handle Left Slider
  useEffect(() => {
    const shapeElement = document.getElementById('shape');

    if (shapeElement) {
      const topLeftRadius = shapeElement.style.borderTopLeftRadius;
      const bottomLeftRadius = shapeElement.style.borderBottomLeftRadius;

      const firstPercentageTopLeftRadius =
        topLeftRadius.charAt(0) === '0'
          ? topLeftRadius.substring(0, 3)
          : topLeftRadius.substring(0, 4);

      const firstPercentageBottomLeftRadius =
        bottomLeftRadius.charAt(0) === '0'
          ? bottomLeftRadius.substring(0, 3)
          : bottomLeftRadius.substring(0, 4);

      shapeElement.style.borderTopLeftRadius = `${firstPercentageTopLeftRadius} ${
        100 - leftSliderValue
      }%`;
      shapeElement.style.borderBottomLeftRadius = `${firstPercentageBottomLeftRadius}
      ${leftSliderValue}%`;
    }
  }, [leftSliderValue]);

  // Handle Right Slider
  useEffect(() => {
    const shapeElement = document.getElementById('shape');

    if (shapeElement) {
      const topRightRadius = shapeElement.style.borderTopRightRadius;
      const bottomRightRadius = shapeElement.style.borderBottomRightRadius;

      const firstPercentageTopRightRadius =
        topRightRadius.charAt(0) === '0'
          ? topRightRadius.substring(0, 3)
          : topRightRadius.substring(0, 4);
      const firstPercentageBottomRightRadius =
        bottomRightRadius.charAt(0) === '0'
          ? bottomRightRadius.substring(0, 3)
          : bottomRightRadius.substring(0, 4);

      shapeElement.style.borderTopRightRadius = `${firstPercentageTopRightRadius} ${
        100 - rightSliderValue
      }%`;
      shapeElement.style.borderBottomRightRadius = `${firstPercentageBottomRightRadius}
      ${rightSliderValue}%`;
    }
  }, [rightSliderValue]);

  return (
    <div className="borderRadiusPreviewer">
      <div id="shape" className="borderRadiusPreviewer__shape"></div>
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
