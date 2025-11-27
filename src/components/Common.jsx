import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/user-data');
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      setUserData({});
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <header className="bg-white py-4 md:py-6 lg:py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Logo</Link>
        <ul className="flex items-center space-x-4">
          <li>
            {loading ? (
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">{userData.name}</Link>
            )}
          </li>
          <li>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      {error && (
        <div className="container mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <span>{error}</span>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  // No props are expected
};

export default Header;