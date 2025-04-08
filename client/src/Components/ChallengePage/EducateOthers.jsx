import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './EducateOthers.css';

const EducateOthers = () => {
  const [peopleEducated, setPeopleEducated] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const waterSavedPerPerson = 5;
  const totalWaterSaved = peopleEducated * waterSavedPerPerson;

  const handleSliderChange = (event) => {
    setPeopleEducated(parseInt(event.target.value, 10));
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowPopup(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <div className="task educate-others">
      {showConfetti && <Confetti />}
      <h3>1. Educate Others</h3>
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

      {showPopup && (
        <div className="yay-popup">
          <div className="popup-content">
            🎉 Awesome! You helped save <strong>{totalWaterSaved} liters</strong> of water!
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

export default EducateOthers;
