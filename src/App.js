import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </header>
    </div>
  );
}

export default App;