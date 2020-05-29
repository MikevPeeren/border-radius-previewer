// React
import React, { useState, useEffect } from 'react';

// CSS
import './Generator.scss';

// Components
import Slider from './Slider';

// Constants
import { TOP, LEFT, RIGHT, BOTTOM } from '../constants/general';

interface GeneratorProps {
  handleBorderRadiusChange: Function;
}

const Generator: React.FC<GeneratorProps> = ({ handleBorderRadiusChange }) => {
  const [topSliderValue, setTopSliderValue] = useState(70);
  const [leftSliderValue, setLeftSliderValue] = useState(50);
  const [rightSliderValue, setRightSliderValue] = useState(60);
  const [bottomSliderValue, setBottomSliderValue] = useState(20);

  /**
   * Switch Case to handle the different sliders.
   */
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

  // Our Border Radius Shape
  const shape = document.getElementById('shape');
  const borderRadius = shape?.style.borderRadius;

  /**
   * Updating the Border Radius string, so users can Copy it.
   */
  useEffect(() => {
    handleBorderRadiusChange(borderRadius);
  }, [handleBorderRadiusChange, borderRadius]);

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
        <Slider
          id={TOP}
          value={topSliderValue}
          handleSliderChange={handleSliderChange}
        />
      )}
      {leftSliderValue && (
        <Slider
          id={LEFT}
          value={leftSliderValue}
          handleSliderChange={handleSliderChange}
        />
      )}
      {rightSliderValue && (
        <Slider
          id={RIGHT}
          value={rightSliderValue}
          handleSliderChange={handleSliderChange}
        />
      )}
      {bottomSliderValue && (
        <Slider
          id={BOTTOM}
          value={bottomSliderValue}
          handleSliderChange={handleSliderChange}
        />
      )}
    </div>
  );
};

export default Generator;
