import React, { useState } from "react";
import axios from "axios";
import "./SmartGardening.css";
import gardeningImage from "../Assets/gardening.png"; // 👈 Image path

const SmartGardening = () => {
  const [plants, setPlants] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  const waterSaved = plants * 5;

  const handleSliderChange = (event) => {
    setPlants(parseInt(event.target.value, 10));
  };

  const handleSave = async () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setError(null);

    try {
      const token = localStorage.getItem('waterwise_token');
      await axios.post(
        'http://localhost:5000/api/savings',
        {
          challengeName: 'Smart Gardening',
          litres: waterSaved
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    } catch (err) {
      setError('Failed to save your progress. Please try again.');
      console.error('Error saving challenge:', err);
    }

    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div
      className="smart-gardening-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>2. Smart Gardening</h2>
      <p>
        Use smart gardening methods like drip irrigation and moisture sensors to save water efficiently.
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
      <p className="highlight">Number of plants: {plants}</p>
      <p className="highlight">Water saved: {waterSaved} liters/day</p>

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🎉 Yay! You saved <strong>{waterSaved}</strong> liters of water!
          </div>
        </div>
      )}

      <div className="water-effect">
        <div className="droplet" />
        <div className="droplet" />
        <div className="droplet" />
      </div>

      {hovered && (
        <div className="hover-image">
          <img src={gardeningImage} alt="Smart Gardening" />
        </div>
      )}
    </div>
  );
};

export default SmartGardening;
