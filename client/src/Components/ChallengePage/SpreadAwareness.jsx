import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './SpreadAwareness.css';

const SpreadAwareness = () => {
  const [peopleReached, setPeopleReached] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);

  const waterPerPerson = 2; // Water saved per person in liters
  const waterSaved = peopleReached * waterPerPerson;

  const handleSliderChange = (event) => {
    setPeopleReached(event.target.value);
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div className="task spread-awareness">
      {showConfetti && <Confetti />}
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

      <button className="save-button" onClick={handleSave}>
        Save
      </button>

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🌍 Yay! You saved <strong>{waterSaved} liters</strong> of water!
          </div>
        </div>
      )}

      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default SpreadAwareness;
