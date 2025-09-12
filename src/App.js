import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './UserLogin';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // API call to verify credentials
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <p>
            You are logged in as {username}!
          </p>
        ) : (
          <UserLogin
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        )}
      </header>
    </div>
  );
}

export default App;