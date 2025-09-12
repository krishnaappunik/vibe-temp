// src/utils/auth.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const loginValidation = (username, password) => {
    // Simple password validation
    if (username.length < 3) {
        return 'Username must be at least 3 characters long';
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return null;
};

const authenticate = (username, password) => {
    // Mock authentication for demonstration
    const isValid = loginValidation(username, password) === null;
    if (isValid) {
        // Store username and password securely in local storage for demonstration
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        return true;
    }
    return false;
};

const handleLogin = (onSubmit) => {
    const history = useHistory();
    const onLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const errorMessage = loginValidation(username, password);
        if (errorMessage === null) {
            const isValid = authenticate(username, password);
            if (isValid) {
                history.push('/protected');
                onSubmit();
            } else {
                console.log('Invalid login credentials');
            }
        } else {
            console.log(errorMessage);
        }
    };
    return onLogin;
};

const LoginPage = () => {
    const onLogin = handleLogin(() => {
        console.log('Login successful');
    });

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onLogin}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export { authenticate, handleLogin, LoginPage };