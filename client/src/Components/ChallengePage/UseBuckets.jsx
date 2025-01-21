import React, { useState } from 'react';
import './UseBuckets.css';

const UseBuckets = () => {
  const [bucketsUsed, setBucketsUsed] = useState(1);
  const waterPerBucket = 10; // Water saved per bucket in liters
  const waterSaved = bucketsUsed * waterPerBucket;

  const handleSliderChange = (event) => {
    setBucketsUsed(event.target.value);
  };

  return (
    <div className="task use-buckets">
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
      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default UseBuckets;
