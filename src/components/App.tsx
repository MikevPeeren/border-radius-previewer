// React
import React from 'react';

// CSS
import './App.css';

// Components
import Generator from './Generator';

const App = () => {
  return (
    <div className="container">
      <header className="header">Border Radius Previewer</header>
      <Generator></Generator>
    </div>
  );
};

export default App;
