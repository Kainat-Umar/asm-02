import React from 'react';

const RandomSelectButton = ({ onSelectRandom }) => {
  return (
    <button className="random-select-button" onClick={onSelectRandom}>
      Select Random Template
    </button>
  );
};

export default RandomSelectButton;
