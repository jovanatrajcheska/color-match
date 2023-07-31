import React from 'react';

const ColorMatchButtons = ({ handleClick }) => {
  return (
    <div className="buttons">
      <button onClick={() => handleClick(true)}>
        YES
      </button>
      <button onClick={() => handleClick(false)}>
        NO
      </button>
    </div>
  );
};

export default ColorMatchButtons;
