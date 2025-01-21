import React, { useState } from 'react';
import './SpreadAwareness.css';

const SpreadAwareness = () => {
  const [peopleReached, setPeopleReached] = useState(1);
  const waterPerPerson = 2; // Water saved per person in liters
  const waterSaved = peopleReached * waterPerPerson;

  const handleSliderChange = (event) => {
    setPeopleReached(event.target.value);
  };

  return (
    <div className="task spread-awareness">
      <h3>1. Spread Awareness</h3>
      <input
        type="range"
        min="1"
        max="50"
        value={peopleReached}
        onChange={handleSliderChange}
        step="1"
        className="slider"
      />
      <p className="highlight">People reached: {peopleReached}</p>
      <p className="highlight">Water saved: {waterSaved} liters</p>
      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default SpreadAwareness;
