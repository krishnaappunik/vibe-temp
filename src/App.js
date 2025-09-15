import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const backgroundColor = theme === 'light' ? 'lightgray' : 'black';
  const textColor = theme === 'light' ? 'black' : 'lightgray';

  return (
    <div className={`App ${theme}`} style={{ backgroundColor: backgroundColor }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ color: textColor }} />
        <p style={{ color: textColor }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: textColor }}
        >
          Learn React...
        </a>
        <button className="theme-toggle-button" onClick={handleThemeChange}>
          Toggle Theme
        </button>
      </header>
    </div>
  );
}

export default App;
