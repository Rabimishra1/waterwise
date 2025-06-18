import React, { useState } from 'react';
import axios from 'axios';
import './UseBuckets.css';
import bucketsImage from '../Assets/buckets.png'; // Adjust the path as needed

const UseBuckets = () => {
  const [bucketsUsed, setBucketsUsed] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  const waterPerBucket = 10;
  const waterSaved = bucketsUsed * waterPerBucket;

  const handleSliderChange = (event) => {
    setBucketsUsed(event.target.value);
  };

  const handleSave = async () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setError(null);

    try {
      await axios.post(
        'http://localhost:5000/api/savings',
        {
          challengeName: 'Use Buckets',
          litres: waterSaved
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('waterwise_token')}`
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
      className="task use-buckets"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>2. Use Buckets</h3>
      <input
        type="range"
        min="1"
        max="10"
        value={bucketsUsed}
        onChange={handleSliderChange}
        step="1"
        className="slider"
      />
      <p className="highlight">Buckets used: {bucketsUsed}</p>
      <p className="highlight">Water saved: {waterSaved} liters</p>

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🪣 Yay! You saved <strong>{waterSaved} liters</strong> of water!
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
          <img src={bucketsImage} alt="Use Buckets" />
        </div>
      )}
    </div>
  );
};

export default UseBuckets;
