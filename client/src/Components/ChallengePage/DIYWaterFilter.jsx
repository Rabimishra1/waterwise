import React, { useState } from 'react';
import Confetti from 'react-confetti';

import './DIYWaterFilter.css';

const DIYWaterFilter = () => {
  const [days, setDays] = useState(0);
  const [showYayMessage, setShowYayMessage] = useState(false);

  const handleSliderChange = (event) => {
    setDays(event.target.value);
  };

  const handleSave = () => {
    setShowYayMessage(true);
    setTimeout(() => setShowYayMessage(false), 4000); // hide after 4s
  };

  const waterSaved = days * 5; // 5 liters per day

  return (
    <div className="task-container">
      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🎉 Yay! You saved <strong>{waterSaved} liters</strong> of water!
          </div>
        </div>
      )}

      <div className="task-header">
        <h2>2. DIY Water Filter</h2>
        <p>A DIY water filter could potentially save up to 5 liters per day by reducing water wastage or promoting better water use.</p>
      </div>
      
      <div className="slider-container">
        <label htmlFor="days-slider">Number of Days: {days}</label>
        <input
          type="range"
          id="days-slider"
          min="0"
          max="30"
          value={days}
          onChange={handleSliderChange}
        />
      </div>
      
      <div className="water-saved-info">
        <p><strong>Total Water Saved:</strong> {waterSaved} liters</p>
      </div>
      
      <button className="save-button" onClick={handleSave}>Save</button>
      {showYayMessage && <Confetti />}

      <div className="task-footer">
        <p>Install a simple DIY water filter to save water and reduce wastage!</p>
      </div>
    </div>
    

  );
};

export default DIYWaterFilter;
