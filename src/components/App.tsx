// React
import React from 'react';

// CSS
import './App.scss';

// Components
import Header from './Header';
import Generator from './Generator';
import BorderRadiusDisplay from './BorderRadiusDisplay';

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Generator></Generator>
      <BorderRadiusDisplay></BorderRadiusDisplay>
    </div>
  );
};

export default App;
