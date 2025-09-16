import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isWhite, setIsWhite] = useState(false);

  const handleBackgroundColorToggle = () => {
    setIsWhite(!isWhite);
  };

  return (
    <div
      className={`App ${isWhite ? 'white' : ''}`}
      style={{ backgroundColor: isWhite ? 'white' : 'black' }}
    >
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
        <button onClick={handleBackgroundColorToggle}>
          Toggle Background Color
        </button>
      </header>
    </div>
  );
}

export default App;