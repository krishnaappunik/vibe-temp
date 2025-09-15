import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>Vibe Temp</h1>
      </header>
      <div className="App-body">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className="App-footer">
        <button
          className="dark-mode-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;