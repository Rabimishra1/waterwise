import React from 'react';
import Navbar from "../Navbar/Navbar";
import './Homepage.css';
import video from '../Assets/water_conservation.mp4'; // Import video
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const goToChallenges = () => {
    navigate('/challenges');  // Navigate to the ChallengePage when button is clicked
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="logo-container">
        <img src={logo} alt="WaterWise Logo" className="logo" />
      </div>
      <Navbar />
      <div className="homepage-container">
        <div className="left-section">
          <video
            autoPlay
            loop
            muted
            className="video-player"
            src={video}
            alt="Water Conservation Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-section">
          <h1>Welcome to Water Wise</h1>
          <h3>
            Water Wise aims to raise awareness about water conservation and provide actionable steps
            to make a positive environmental impact.
          </h3>
          <div className="savings-container">
            <div className="savings-box">
              <h2>Monthly Savings</h2>
              <p>50-Litres</p>
            </div>
            <div className="savings-box">
              <h2>Yearly Savings</h2>
              <p>600-Litres</p>
            </div>
          </div>
          <button className="challenges-button" onClick={goToChallenges}>
            Go to Challenges
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
