import React from 'react';
import './App.css';
import UserList from './components/UserList'; // Added import for UserList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />  {/* Added UserList component to the application layout */}
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