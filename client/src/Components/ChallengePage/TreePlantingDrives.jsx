import React, { useState } from 'react';
import axios from 'axios';
import './TreePlantingDrives.css';
import treeImage from '../Assets/plantTrees.png';

const TreePlantingDrives = () => {
  const [treesPlanted, setTreesPlanted] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);
  const [error, setError] = useState(null);
  const [hovered, setHovered] = useState(false);

  const waterSaved = treesPlanted * 30;

  const handleSliderChange = (e) => {
    setTreesPlanted(e.target.value);
  };

  const handleSave = async () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setError(null);

    try {
      await axios.post(
        'http://localhost:5000/api/savings',
        {
          challengeName: 'Tree Planting Drives',
          litres: waterSaved
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('waterwise_token')}`
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
      className="task tree-planting-drive"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>3. Tree Planting Drives</h3>
      <input
        type="range"
        min="1"
        max="20"
        value={treesPlanted}
        onChange={handleSliderChange}
        step="1"
        className="slider"
      />
      <p className="highlight">Trees Planted: {treesPlanted}</p>
      <p className="highlight">Water Saved: {waterSaved} liters</p>

      <button className="save-button" onClick={handleSave}>Save</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showYayMessage && (
        <div className="yay-popup">
          <div className="popup-content">
            🌳 Yay! You saved <strong>{waterSaved} liters</strong> of water!
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
          <img src={treeImage} alt="Tree Planting" />
        </div>
      )}
    </div>
  );
};

export default TreePlantingDrives;
