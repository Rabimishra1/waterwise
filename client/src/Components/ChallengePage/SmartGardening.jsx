import React, { useState } from "react";
import "./SmartGardening.css";

const SmartGardening = () => {
  const [plants, setPlants] = useState(1);
  const waterSaved = plants * 5; // 5 liters per plant per day

  const handleSliderChange = (event) => {
    setPlants(parseInt(event.target.value, 10));
  };

  return (
    <div className="smart-gardening-container">
      <h2>2. Smart Gardening</h2>
      <p>
        Use smart gardening methods like drip irrigation and moisture sensors to
        save water efficiently.
      </p>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="50"
          value={plants}
          onChange={handleSliderChange}
          className="slider"
        />
        <div className="slider-values">
          <span>1</span>
          <span>10</span>
          <span>50</span>
        </div>
      </div>
      <p>
        Number of plants: <strong>{plants}</strong>
      </p>
      <p>
        Water saved: <strong>{waterSaved} liters/day</strong>
      </p>
      <div className="water-effect">
        <div className="droplet" />
        <div className="droplet" />
        <div className="droplet" />
      </div>
    </div>
  );
};

export default SmartGardening;
