import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styling

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation - replace with proper validation logic
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate authentication - replace with API call
    try {
      const response = await fakeLogin(username, password); // Call the async fakeLogin function
      if (response.success) {
        // Successful login - store token, redirect, etc.
        localStorage.setItem('authToken', 'fakeToken'); // Store fake token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Login failed. Please try