import React, { useState } from 'react';
import axios from 'axios';
import './DIYWaterFilter.css';
import filterImage from '../Assets/diy.png';

const DIYWaterFilter = () => {
  const [days, setDays] = useState(0);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  const waterSaved = days * 5; // 5 liters per day

  const handleSliderChange = (event) => {
    setDays(event.target.value);
  };

  const handleSave = async () => {
    setShowYayMessage(true);
    setError(null);

    try {
      const token = localStorage.getItem('waterwise_token');
      await axios.post(
        'http://localhost:5000/api/savings',
        {
          challengeName: 'DIY Water Filter',
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

    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div
      className="task-container diy-filter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>3. DIY Water Filter</h3>
      <p className="description">
        A DIY water filter can help reduce wastage and save water — up to 5 liters daily!
      </p>

      <input
        type="range"
        id="days-slider"
        min="0"
        max="30"
        value={days}
        onChange={handleSliderChange}
        className="slider"
      />

      <p className="highlight">Days used: {days}</p>
      <p className="highlight">Water saved: {waterSaved} liters</p>

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🎉 Yay! You saved <strong>{waterSaved} liters</strong> of water!
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
          <img src={filterImage} alt="DIY Water Filter" />
        </div>
      )}
    </div>
  );
};

export default DIYWaterFilter;
