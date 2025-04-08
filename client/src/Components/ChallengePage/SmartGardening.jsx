import React, { useState } from "react";
import Confetti from "react-confetti";
import "./SmartGardening.css";

const SmartGardening = () => {
  const [plants, setPlants] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const waterSaved = plants * 5; // 5 liters per plant per day

  const handleSliderChange = (event) => {
    setPlants(parseInt(event.target.value, 10));
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div className="smart-gardening-container">
      {showConfetti && <Confetti />}
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


      <div className="water-effect">
        <div className="droplet" />
        <div className="droplet" />
        <div className="droplet" />
      </div>
    </div>
  );
};

export default SmartGardening;
