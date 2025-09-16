// New file

import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onChange }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggle = () => {
    setIsActive((prevActive) => !prevActive);
    onChange();
  };

  const backgroundColor = isActive ? 'blue' : 'white';

  return (
    <div
      className="toggle-button"
      onClick={handleToggle}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="toggle-button-circle"></div>
    </div>
  );
};

export default ToggleButton;