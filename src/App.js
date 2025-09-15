import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = () => {
    // This is a simple login form validation, replace with actual API call
    if (username === 'john' && password === 'john123') {
      // You should redirect to the dashboard or profile page after successful login
      // For now, we'll just log a success message in the console
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className="login-button">
            <Link to="/login" className="App-link">
              Login
            </Link>
          </button>
          <button className="sign-up-button">
            <Link to="/sign-up" className="App-link">
              Sign Up
            </Link>
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React...
          </a>
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  error={error}
                  handleLogin={handleLogin}
                />
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;