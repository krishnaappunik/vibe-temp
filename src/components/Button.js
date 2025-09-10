// src/components/Button.js

import React from 'react';

/**
 * A simple button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The button text or children.
 * @param {string} props.variant - The button variant (e.g., 'primary', 'secondary', etc.).
 * @param {function} props.onClick - The button click event handler.
 * @returns {React.ReactNode} The button component.
 */
const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button
      className={`btn ${variant}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;