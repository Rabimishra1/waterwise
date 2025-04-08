import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './TreePlantingDrives.css';

const TreePlantingDrives = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);

  const waterSaved = treesPlanted * 30; // 30 liters per tree

  const handleSliderChange = (event) => {
    setTreesPlanted(event.target.value);
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div className="task-container">
      {showConfetti && <Confetti />}
      
      <div className="task-header">
        <h2>2. Tree Planting Drives</h2>
        <p>Each tree planted can save about 30 liters of water per month due to improved soil moisture and local ecosystem changes.</p>
      </div>
      
      <div className="slider-container">
        <label htmlFor="trees-slider">Number of Trees Planted: {treesPlanted}</label>
        <input
          type="range"
          id="trees-slider"
          min="0"
          max="100"
          value={treesPlanted}
          onChange={handleSliderChange}
        />
      </div>
      
      <div className="water-saved-info">
        <p><strong>Total Water Saved:</strong> {waterSaved} liters per month</p>
      </div>

      <button className="save-button" onClick={handleSave}>Save</button>

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🌱 Yay! You saved <strong>{waterSaved} liters</strong> per month!
          </div>
        </div>
      )}
    </div>
  );
};

export default TreePlantingDrives;
