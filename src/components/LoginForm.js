// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Add login logic here (fetch API, etc.)
      // For demonstration purposes, just redirect to dashboard
      history.push('/dashboard');
    } else {
      setError('Please fill in both username and password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;