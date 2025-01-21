import React, { useState } from 'react';
import './TreePlantingDrives.css';

const TreePlantingDrives = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);

  const handleSliderChange = (event) => {
    setTreesPlanted(event.target.value);
  };

  const waterSaved = treesPlanted * 30; // 30 liters of water per tree

  return (
    <div className="task-container">
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
      
      <div className="task-footer">
      </div>
    </div>
  );
};

export default TreePlantingDrives;
