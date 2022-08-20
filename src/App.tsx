import React, { useState } from 'react';
import Game from './screens/Game';
import Home from './screens/Home';

const App = () => {
  const [playMode, setPlayMode] = useState<boolean>(false);
  const switchMode = () => {
    setPlayMode(true);
  };

  return (
    <div className="app">
      {playMode ? <Game /> : <Home switchMode={switchMode} />}
    </div>
  );
};

export default App;
