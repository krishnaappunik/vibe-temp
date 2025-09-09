// New file: src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('your-backend-endpoint.com/login', {
            username: username,
            password: password
        })
        .then((response) => {
            setSuccess('Login successful!');
            setError(null);
        })
        .catch((error) => {
            setError('Invalid username or password');
            setSuccess(null);
        });
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
}

export default LoginPage;