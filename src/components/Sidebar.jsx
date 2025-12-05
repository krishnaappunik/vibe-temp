import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="sidebar-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="sidebar-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="sidebar-link" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="sidebar-link" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;