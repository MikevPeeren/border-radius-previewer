// React
import React from 'react';

// CSS
import './App.scss';

// Components
import Generator from './Generator';
import BorderRadiusDisplay from './BorderRadiusDisplay';

const App = () => {
  return (
    <div className="container">
      <header className="header">Border Radius Previewer</header>
      <Generator></Generator>
      <BorderRadiusDisplay></BorderRadiusDisplay>
    </div>
  );
};

export default App;
