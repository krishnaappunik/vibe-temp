import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function BasicUserForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>FullName:</label>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <br />
      <label>Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User List:', users);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Fetch User List</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Username: {user.username}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Email: {user.email}</p>
            <p>Description: {user.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verification, setVerification] = useState('');

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "verification") {
      setVerification(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verification === password) {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Verification:', verification);
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <label>Verification:</label>
      <input
        type="password"
        name="verification"
        value={verification}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

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
        {/* Add toggle button for dark and light mode */}
        <input
          className="checkbox"
          type="checkbox"
          id="toggle-checkbox"
          checked={darkMode}
          onChange={handleToggleDarkMode}
        />
        <label className="toggle-label" htmlFor="toggle-checkbox">Theme</label>
        {darkMode ? (
          <span className="toggle-switch-on">On</span>
        ) : (
          <span className="toggle-switch-off">Off</span>
        )}
      </header>
      <BasicUserForm />
      <UserTable />
      <LoginForm />
      <div className="footer">
        <form onSubmit={(event) => event.preventDefault()}>
          <button className="count-button" onClick={handleIncrementCount}>
            Increment Count
          </button>
          <p>Count: {count}</p>
        </form>
      </div>
    </div>
  );
}

export default App;