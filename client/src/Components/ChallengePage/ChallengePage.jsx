import React, { useState } from "react";
import "./ChallengePage.css";
import ShorterShower from "./ShorterShower";
import UseBuckets from "./UseBuckets";
import EducateOthers from "./EducateOthers";
import SpreadAwareness from "./SpreadAwareness";
import InstallWaterSavingTools from "./InstallWaterSavingTools";
import SmartGardening from "./SmartGardening";
import TreePlantingDrives from "./TreePlantingDrives";
import DIYWaterFilter from "./DIYWaterFilter";

// Correct path to the Assets folder
import videoSrc from "../Assets/BG.mp4"; // Adjusted the path

const ChallengePage = () => {
  const [activeSection, setActiveSection] = useState("homeTasks");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "homeTasks":
        return (
          <div className="section-content">
            <ShorterShower />
            <UseBuckets />
          </div>
        );
      case "communityTasks":
        return (
          <div className="section-content">
            <EducateOthers />
            <TreePlantingDrives />
          </div>
        );
      case "awarenessTasks":
        return (
          <div className="section-content">
            <SpreadAwareness />
            <DIYWaterFilter />
          </div>
        );
      case "technicalTasks":
        return (
          <div className="section-content">
            <InstallWaterSavingTools />
            <SmartGardening />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="challenge-page">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="navbar">
        <button
          className="nav-button"
          onClick={() => setActiveSection("homeTasks")}
        >
          Home-based Tasks
        </button>
        <button
          className="nav-button"
          onClick={() => setActiveSection("communityTasks")}
        >
          Community-based Tasks
        </button>
        <button
          className="nav-button"
          onClick={() => setActiveSection("awarenessTasks")}
        >
          Awareness-based Tasks
        </button>
        <button
          className="nav-button"
          onClick={() => setActiveSection("technicalTasks")}
        >
          Technical-based Tasks
        </button>
      </div>
      {renderSectionContent()}
    </div>
  );
};

export default ChallengePage;
