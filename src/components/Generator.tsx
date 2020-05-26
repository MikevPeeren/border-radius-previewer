// React
import React, { useState, useEffect } from 'react';

// CSS
import './Generator.scss';

const Generator = () => {
  const [topSliderValue, setTopSliderValue] = useState(50);
  const [leftSliderValue, setLeftSliderValue] = useState(50);
  const [rightSliderValue, setRightSliderValue] = useState(50);
  const [bottomSliderValue, setBottomSliderValue] = useState(50);

  const handleTopSliderChange = (event: any) => {
    console.log(event.target.value);
    //@ts-ignore
    setTopSliderValue(event.target.value);
  };

  const handleLeftSliderChange = (event: any) => {
    console.log(event.target.value);
    //@ts-ignore
    setLeftSliderValue(event.target.value);
  };

  const handleRightSliderChange = (event: any) => {
    console.log(event.target.value);
    //@ts-ignore
    setRightSliderValue(event.target.value);
  };

  const handleBottomSliderChange = (event: any) => {
    console.log(event.target.value);
    //@ts-ignore
    setBottomSliderValue(event.target.value);
  };

  return (
    <div className="borderRadiusPreviewer">
      <div className="borderRadiusPreviewer__shape"></div>
      {topSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id="top"
          type="range"
          min="0"
          max="100"
          value={topSliderValue}
          onChange={handleTopSliderChange}
        />
      )}
      {leftSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id="left"
          type="range"
          min="0"
          max="100"
          value={leftSliderValue}
          onChange={handleLeftSliderChange}
        />
      )}
      {rightSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id="right"
          type="range"
          min="0"
          max="100"
          value={rightSliderValue}
          onChange={handleRightSliderChange}
        />
      )}
      {bottomSliderValue && (
        <input
          className="borderRadiusPreviewer__handle"
          id="bottom"
          type="range"
          min="0"
          max="100"
          value={bottomSliderValue}
          onChange={handleBottomSliderChange}
        />
      )}

      {/* <span className="borderRadiusPreviewer__handle" id="top"></span>
      <span className="borderRadiusPreviewer__handle" id="left"></span>
      <span className="borderRadiusPreviewer__handle" id="right"></span>
      <span className="borderRadiusPreviewer__handle" id="bottom"></span> */}
    </div>
  );
};

export default Generator;
