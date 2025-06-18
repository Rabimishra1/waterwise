import React, { useState } from 'react';
import axios from 'axios';
import './EducateOthers.css';
import educateImage from '../Assets/educate.png';

const EducateOthers = () => {
  const [peopleEducated, setPeopleEducated] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  const waterSavedPerPerson = 5;
  const totalWaterSaved = peopleEducated * waterSavedPerPerson;

  const handleSliderChange = (event) => {
    setPeopleEducated(parseInt(event.target.value, 10));
  };

  const handleSave = async () => {
    setShowConfetti(true);
    setShowPopup(true);
    setError(null);

    try {
      const token = localStorage.getItem('waterwise_token');
      await axios.post(
        'http://localhost:5000/api/savings',
        {
          challengeName: 'Educate Others',
          litres: totalWaterSaved
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
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <div className="task educate-others">
      <h3>3. Educate Others</h3>
      <input
        type="range"
        min="1"
        max="50"
        value={peopleEducated}
        onChange={handleSliderChange}
        step="1"
        className="slider"
      />
      <p className="highlight">People educated: {peopleEducated}</p>
      <p className="highlight">Water saved: {totalWaterSaved} liters</p>

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {showPopup && (
        <div className="yay-popup">
          <div className="popup-content">
            🎉 Great! You helped save <strong>{totalWaterSaved} liters</strong> of water!
          </div>
        </div>
      )}

      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>

      {/* Hover Image */}
      <div className="task-hover-image">
        <img src={educateImage} alt="Educate Others Visual" />
      </div>
    </div>
  );
};

export default EducateOthers;
