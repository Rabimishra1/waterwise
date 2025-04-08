import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './ShorterShower.css';

const ShorterShower = () => {
  const [minutes, setMinutes] = useState(5);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const waterPerMinute = 9.5;
  const waterSaved = minutes * waterPerMinute;

  const handleSliderChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti disappears after 3s
    setTimeout(() => setShowYayMessage(false), 4000); // Message disappears after 4s
  };

  return (
    <div className="task shorter-shower">
      {showConfetti && <Confetti />}
      <h3>1. Shorter Shower</h3>
      <input
        type="range"
        min="5"
        max="15"
        value={minutes}
        onChange={handleSliderChange}
        step="5"
        className="slider"
      />
      <p className="highlight">Shower duration: {minutes} minutes</p>
      <p className="highlight">Water saved: {waterSaved.toFixed(2)} liters</p>

      <button className="save-button" onClick={handleSave}>
        Save
      </button>

      {showYayMessage && (
  <div className="yay-popup">
    <div className="popup-content">
      🎉 Yay! You saved <strong>{waterSaved.toFixed(2)} liters</strong> of water!
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

export default ShorterShower;
