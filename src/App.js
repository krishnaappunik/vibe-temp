import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React...
        </a>
        <button className="toggle-button" onClick={handleToggleDarkMode}>
          Toggle Dark Mode
        </button>
      </header>
      <div className="footer">
        <div className="center-footer">
          <button className="count-button" onClick={handleIncrementCount}>
            Increment Count
          </button>
          <p>Count: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default App;