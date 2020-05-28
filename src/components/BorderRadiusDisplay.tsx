// React
import React from 'react';

// CSS
import './BorderRadiusDisplay.scss';

// Constants
import { BORDER_RADIUS_LABEL, COPY } from '../constants/general';

interface BorderRadiusDisplayProps {
  borderRadiusValue: string;
}

const BorderRadiusDisplay: React.FC<BorderRadiusDisplayProps> = ({
  borderRadiusValue,
}) => {
  return (
    <div className="BorderRadiusDisplay">
      <label className="BorderRadiusDisplay__label">
        {BORDER_RADIUS_LABEL}
      </label>
      <div className="BorderRadiusDisplay__output">
        {borderRadiusValue && (
          <input
            className="BorderRadiusDisplay__output--input"
            id="border-radius"
            name="border-radius"
            type="text"
            value={borderRadiusValue}
            disabled
          ></input>
        )}
        <button className="BorderRadiusDisplay__output--submit" type="submit">
          {COPY}
        </button>
      </div>
    </div>
  );
};

export default BorderRadiusDisplay;
