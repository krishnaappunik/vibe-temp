import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const useDarkMode = () => {
  const [theme, setTheme] = useState('light'); // default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};

const [theme, toggleTheme] = useDarkMode();

root.render(
  <React.StrictMode>
    <App toggleTheme={toggleTheme} theme={theme} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();