// src/services/AuthService.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const UserService = () => {
  const history = useHistory();
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/login', user);
      setIsLoggedIn(true);
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleUsernameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  return {
    user,
    isLoggedIn,
    loginError,
    handleLogin,
    handleLogout,
    handleUsernameChange,
    handlePasswordChange,
  };
};

const LoginPage = () => {
  const { user, handleUsernameChange, handlePasswordChange, handleLogin, loginError } = UserService();
  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={user.username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={user.password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </form>
  );
};

export { UserService, LoginPage };