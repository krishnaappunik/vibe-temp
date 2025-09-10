import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './services/AuthService'; // Import AuthService
import ReactDom from 'react-dom'; // Import ReactDom

// Simple Button Component
class SimpleButton extends React.Component {
  render() {
    return (
      <button className="simple-button" type="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

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
  const [error, setError] = useState(null);

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
      AuthService.login({ username, password })
        .then(() => {
          console.log('Login successful');
          window.location.href = '/home'; // Redirect to home page on login
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      setError('Passwords do not match');
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
      {error && <p style={{ color: 'red' }}>{error}</p>} // Display error message
      <button type="submit">Login</button>
    </form>
  );
}

// Import SimpleButton Component
import SimpleButton from './SimpleButton';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Add darkMode state as requested
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    ReactDom.render(<div />, document.getElementById('root')); // Reload on dark mode toggle
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleDecrementCount = () => {
    setCount(count - 1);
  };

  AuthService.onLoginCallback(user => { // Listen for login callback
    setIsLoggedIn(true);
  });

  AuthService.onLogoutCallback(() => { // Listen for logout callback
    setIsLoggedIn(false);
  });

  const handleIncrementCountButton = () => {
    setCount(count + 1);
  };

  const handleDecrementCountButton = () => {
    setCount(count - 1);
    if (count < 0) {
      setCount(0);
    }
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
        <SimpleButton onClick={handleToggleDarkMode}>Toggle Dark Mode</SimpleButton>
        <div className="dark-mode-toggle">
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
        </div>
        {isLoggedIn ? ( // Display login status
          <span style={{ color: 'green' }}>Logged In</span>
        ) : (
          <span style={{ color: 'red' }}>Logged Out</span>
        )}
        <SimpleButton onClick={() => AuthService.logout()}>Logout</SimpleButton>
        {isLoggedIn ? (
          <SimpleButton onClick={() => window.location.href = "/dashboard"}>
            Dashboard
          </SimpleButton>
        ) : (
          <div className="footer">
            <p>Count: {count}</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <SimpleButton onClick={handleIncrementCountButton}>
                Increment Count
              </SimpleButton>
              <SimpleButton onClick={handleDecrementCountButton}>
                Decrement Count
              </SimpleButton>
            </form>
            <SimpleButton onClick={() => window.location.href = "/login"}>
              Login
            </SimpleButton> {/* Add login route */}
            <SimpleButton onClick={() => window.location.href = "/register"}>
              Register
            </SimpleButton> {/* Add register route */}
          </div>
        )}
      </header>
      <BasicUserForm />
      <UserTable />
      <LoginForm />
    </div>
  );
}

export default App;