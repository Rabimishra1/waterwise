import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';

import landingVideo from '../Assets/landing_intro.mp4'; 
import teamVideo from '../Assets/teamvid.mp4'; 
import logo from '../Assets/logo.png'; 

const facts = [
  "🌍 1 in 3 people globally don’t have access to safe drinking water.",
  "🚰 By 2025, half of the world’s population may be living in water-stressed areas.",
  "💧 844 million people lack basic drinking water access.",
  "⚠️ Every 90 seconds, a child dies from a water-related disease.",
  "📉 Agriculture consumes more than 70% of global freshwater.",
  "🌡️ Climate change is intensifying droughts and floods.",
  "🧼 3 billion people lack basic handwashing facilities at home.",
  "💧 India is facing the worst water crisis in its history.",
  "⏳ Women and girls spend 200 million hours daily collecting water.",
  "🌊 Unsafe water kills more people than violence each year.",
  "🌾 1,800 gallons of water are needed to produce 1 pound of beef.",
  "🧪 Industrial waste pollutes 70% of India’s water.",
  "🌆 In Cape Town, people were limited to 50 liters/day during the crisis.",
  "🔬 Over 80% of wastewater globally is released untreated.",
  "💸 In developing countries, people can spend up to 25% of income on water.",
  "🚱 In rural Africa, people walk an average of 6 km to fetch water.",
  "🍼 Diarrhea caused by dirty water kills more children than malaria.",
  "⛰️ Glacier melting is reducing freshwater sources in the Himalayas.",
  "📉 1 in 4 health care facilities lacks basic water services.",
  "🧊 Antarctica holds 60% of the world's freshwater — frozen and inaccessible.",
  "🌾 Water scarcity affects more than 40% of the global population.",
  "🥤 A single bottle of water takes 3 liters of water to produce.",
  "🔁 Only 1% of the Earth’s water is usable by humans.",
  "🏭 Water stress affects over 2 billion people worldwide.",
  "🔥 Droughts are increasing due to global warming.",
  "🐟 Water pollution threatens 33% of freshwater fish species.",
  "⛲ Every dollar invested in water returns four in economic benefits.",
  "💡 Desalination is energy-intensive and costly for most nations.",
  "🚿 5-minute showers can use 50 liters of water.",
  "⛅ Over 2 billion people live in countries with high water stress."
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showFact, setShowFact] = useState(true);
  const [showTeamVideo, setShowTeamVideo] = useState(false);

  const goToLogin = () => navigate('/login');
  const goToAboutUs = () => navigate('/aboutus');
  const handleMeetTeamClick = () => setShowTeamVideo(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFact(false);
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % facts.length);
        setShowFact(true);
      }, 7000); // Small pause between fading out and showing new fact
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <video className="landing-video" autoPlay muted loop playsInline>
        <source src={landingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="landing-title">
          {["Let's", "Embark", "on", "a", "Noble", "Journey", "Together"].map((word, index) => (
            <span
              key={index}
              className="word"
              style={{ animationDelay: `${index * 0.6}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p className="landing-subtext">Be proud, you've chosen a noble cause 🌍💧</p>

        <button className="login-button" onClick={goToLogin}>Enter</button>

        <div className="slider-track">
          <div className="sliding-text" onClick={goToAboutUs}>🌊 Our Mission</div>
          <div className="sliding-text" onClick={handleMeetTeamClick}>🤝 Meet the Team</div>
          <div className="sliding-text" onClick={goToLogin}>🚀 Explore More</div>
        </div>

        {showTeamVideo && (
          <div className="team-video-overlay">
            <video 
              className="team-video" 
              src={teamVideo} 
              autoPlay 
              playsInline 
              onEnded={() => setShowTeamVideo(false)} 
            />
            <button className="close-button" onClick={() => setShowTeamVideo(false)}>✖ Close</button>
          </div>
        )}

        <div className={`fact-popup ${showFact ? 'fade-in' : 'fade-out'}`}>
          {facts[currentFactIndex]}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
