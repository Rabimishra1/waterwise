import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './InstallWaterSavingTools.css';

const InstallWaterSavingTools = () => {
  const [toolsInstalled, setToolsInstalled] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showYayMessage, setShowYayMessage] = useState(false);

  const waterPerTool = 20; // Water saved per tool in liters
  const waterSaved = toolsInstalled * waterPerTool;

  const handleSliderChange = (event) => {
    setToolsInstalled(event.target.value);
  };

  const handleSave = () => {
    setShowConfetti(true);
    setShowYayMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setShowYayMessage(false), 4000);
  };

  return (
    <div className="task install-water-tools">
      {showConfetti && <Confetti />}
      <h3>1. Install Water Saving Tools</h3>
      <input
        type="range"
        min="1"
        max="10"
        value={toolsInstalled}
        onChange={handleSliderChange}
        step="1"
        className="slider"
      />
      <p className="highlight">Tools installed: {toolsInstalled}</p>
      <p className="highlight">Water saved: {waterSaved} liters</p>

      <button className="save-button" onClick={handleSave}>
        Save
      </button>

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
    </div>
  );
};

export default InstallWaterSavingTools;
