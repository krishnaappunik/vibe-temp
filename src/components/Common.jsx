import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.get('/api/header-data');
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <header className="bg-white py-4 md:py-6 lg:py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Logo
        </Link>
        <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <li>
            <Link to="/about" className="text-sm md:text-base lg:text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm md:text-base lg:text-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {loading && (
        <div className="container mx-auto text-center py-4">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-500" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="container mx-auto text-center py-4 text-red-500">
          {error}
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  // No props for this component
};

export default Header;