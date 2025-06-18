import React, { useState } from 'react';
import axios from 'axios';
import './ShorterShower.css';
import shortShowerImg from '../Assets/shortShower.png';

const ShorterShower = () => {
  const [minutes, setMinutes] = useState(5);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const waterPerMinute = 9.5;
  const waterSaved = minutes * waterPerMinute;

  const handleSliderChange = (event) => {
    setMinutes(event.target.value);
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
          challengeName: 'Shorter Shower',
          litres: waterSaved.toFixed(2)
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
      className="task shorter-shower"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
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

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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

      {showImage && (
        <div className="task-hover-image">
          <img src={shortShowerImg} alt="Shorter Shower" />
        </div>
      )}
    </div>
  );
};

export default ShorterShower;
