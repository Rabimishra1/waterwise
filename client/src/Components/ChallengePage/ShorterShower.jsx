import React, { useState } from 'react';
import './ShorterShower.css';

const ShorterShower = () => {
  const [minutes, setMinutes] = useState(5);
  const waterPerMinute = 9.5;
  const waterSaved = minutes * waterPerMinute;

  const handleSliderChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <div className="task shorter-shower">
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
      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default ShorterShower;
