// New file

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// file to be modified, src/containers/App/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img srcset="/logo192.png 192w, /logo192.png 192w" sizes="192x192" src="/logo192.png" alt="Vibe Logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// modify the file to add background color prop and use it
import React from 'react';

function App(props) {
  return (
    <div className={`App ${props.backgroundColor ? props.backgroundColor : ''}`}>
      <header className="App-header">
        <img srcset="/logo192.png 192w, /logo192.png 192w" sizes="192x192" src="/logo192.png" alt="Vibe Logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// src/containers/App/App.css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers Reduced Motion, (max-width: 768px)) {
  .App-logo {
    animation: none;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

// change the background color prop to white
// pass the background color to the App component from the App.js
// of src/containers where the class is rendered
// import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img srcset="/logo192.png 192w, /logo192.png 192w" sizes="192x192" src="/logo192.png" alt="Vibe Logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  <div className="App" style={{ backgroundColor: "white" }}>
    <App backgroundColor="white" />
  </div>
}

class AppWithBackground extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: this.props.backgroundColor }}>
        <header className="App-header">
          <img srcset="/logo192.png 192w, /logo192.png 192w" sizes="192x192" src="/logo192.png" alt="Vibe Logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppWithBackground;

// add the background color prop to the state of the container where the app is rendered
// import React from 'react';
import './styles.css';

function Main() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <img srcset="/logo192.png 192w, /logo192.png 192w" sizes="192x192" src="/logo192.png" alt="Vibe Logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// use the AppWithBackground component instead of the App component
import React from 'react';
import AppWithBackground from './containers/App/App';

function Main() {
  const backgroundColor = 'white';

  return (
    <div className="App">
      <main className="App-main">
        <AppWithBackground backgroundColor={backgroundColor} />
      </main>
    </div>
  );
}

// the src/containers/App/App.css should be replaced with src/styles.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: ${props.backgroundColor ? props.backgroundColor : ''};
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

body {
  background-color: #282c34;
}

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers Reduced Motion, (max-width: 768px)) {
  .App-logo {
    animation: none;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

/* Modified CSS file */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
}

.App-header {
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}