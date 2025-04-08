import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './UseBuckets.css';

const UseBuckets = () => {
  const [bucketsUsed, setBucketsUsed] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);

  const waterPerBucket = 10; // Water saved per bucket in liters
  const waterSaved = bucketsUsed * waterPerBucket;

  const handleSliderChange = (event) => {
    setBucketsUsed(event.target.value);
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div className="task use-buckets">
      {showConfetti && <Confetti />}
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
    </div>
  );
};

export default UseBuckets;
