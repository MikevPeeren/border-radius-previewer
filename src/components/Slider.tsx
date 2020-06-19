// React
import React from 'react';

// CSS
import './Slider.scss';

interface SliderProps {
  id: string;
  value: number;
  handleSliderChange: Function;
}
const Slider: React.FC<SliderProps> = ({ id, value, handleSliderChange }) => {
  return (
    <input
      className="slider"
      id={id}
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(event) => {
        handleSliderChange(event, id);
      }}
    />
  );
};

export default Slider;
