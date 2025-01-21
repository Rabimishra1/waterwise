import React, { useState } from 'react';
import './DIYWaterFilter.css';

const DIYWaterFilter = () => {
  const [days, setDays] = useState(0);

  const handleSliderChange = (event) => {
    setDays(event.target.value);
  };

  const waterSaved = days * 5; // 5 liters of water saved per day

  return (
    <div className="task-container">
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
      
      <div className="task-footer">
        <p>Install a simple DIY water filter to save water and reduce wastage!</p>
      </div>
    </div>
  );
};

export default DIYWaterFilter;
