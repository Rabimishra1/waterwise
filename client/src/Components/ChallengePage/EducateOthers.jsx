import React, { useState } from 'react';
import './EducateOthers.css';

const EducateOthers = () => {
  const [peopleEducated, setPeopleEducated] = useState(1);
  const waterSavedPerPerson = 5; // Water saved per person educated in liters
  const totalWaterSaved = peopleEducated * waterSavedPerPerson;

  const handleSliderChange = (event) => {
    setPeopleEducated(event.target.value);
  };

  return (
    <div className="task educate-others">
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
      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default EducateOthers;
