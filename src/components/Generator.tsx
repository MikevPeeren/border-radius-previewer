// React
import React from 'react';

// CSS
import './Generator.scss';

const Generator = () => {
  return (
    <div className="borderRadiusPreviewer">
      <div className="borderRadiusPreviewer__shape"></div>
      <span className="borderRadiusPreviewer__handle" id="top"></span>
      <span className="borderRadiusPreviewer__handle" id="left"></span>
      <span className="borderRadiusPreviewer__handle" id="right"></span>
      <span className="borderRadiusPreviewer__handle" id="bottom"></span>
    </div>
  );
};

export default Generator;
