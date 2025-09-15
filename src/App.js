import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  const filteredItems = [
    'Learn React...',
    'Edit src/App.js and save to reload.',
    'The Vibe App',
  ].filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {search !== '' && (
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;