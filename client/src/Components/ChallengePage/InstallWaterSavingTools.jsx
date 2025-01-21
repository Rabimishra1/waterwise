import React, { useState } from 'react';
import './InstallWaterSavingTools.css';

const InstallWaterSavingTools = () => {
  const [toolsInstalled, setToolsInstalled] = useState(1);
  const waterPerTool = 20; // Water saved per tool in liters
  const waterSaved = toolsInstalled * waterPerTool;

  const handleSliderChange = (event) => {
    setToolsInstalled(event.target.value);
  };

  return (
    <div className="task install-water-tools">
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
      <div className="effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
};

export default InstallWaterSavingTools;
