// React
import React from 'react';

// CSS
import './BorderRadiusDisplay.scss';

const BorderRadiusDisplay = () => {
  return (
    <div className="BorderRadiusDisplay">
      <label className="BorderRadiusDisplay__label">Border Radius:</label>
      <div className="BorderRadiusDisplay__output">
        <input
          className="BorderRadiusDisplay__output--input"
          id="border-radius"
          name="border-radius"
          type="text"
          value="0% 100% 0% 100% / 100% 0% 100% 0%"
          disabled
        ></input>
        <button className="BorderRadiusDisplay__output--submit" type="submit">
          COPY
        </button>
      </div>
    </div>
  );
};

export default BorderRadiusDisplay;
