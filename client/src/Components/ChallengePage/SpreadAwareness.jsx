import React, { useState } from 'react';
import axios from 'axios';
import './SpreadAwareness.css';
import awarenessImage from '../Assets/awareness.png';

const SpreadAwareness = () => {
  const [peopleReached, setPeopleReached] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  const waterPerPerson = 2;
  const waterSaved = peopleReached * waterPerPerson;

  const handleSliderChange = (event) => {
    setPeopleReached(event.target.value);
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
          challengeName: 'Spread Awareness',
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
      className="task spread-awareness"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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

      {hovered && (
        <div className="hover-image">
          <img src={awarenessImage} alt="Spread Awareness" />
        </div>
      )}
    </div>
  );
};

export default SpreadAwareness;
