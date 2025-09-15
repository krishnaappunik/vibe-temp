import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const mode = darkMode ? 'dark' : 'light';

  return (
    <div className={`App ${darkMode ? 'App-dark' : ''}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
          Toggle Dark Mode
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React...
        </a>
      </header>
    </div>
  );
}

export default App;