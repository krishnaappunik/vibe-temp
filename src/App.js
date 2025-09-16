import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [toggleBackground, setToggleBackground] = useState(false);

  const handletoogleBackground = () => {
    setToggleBackground(!toggleBackground);
  };

  return (
    <div className={`App ${toggleBackground ? 'gray-background' : ''}`}>
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
        <button onClick={handletoogleBackground}>
          Toggle Background Color
        </button>
      </header>
    </div>
  );
}

export default App;