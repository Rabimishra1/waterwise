import React from "react";
import "./AboutUs.css";
import video from "../Assets/BG.mp4"; // Import the video file

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {/* About Content */}
      <div className="about-container">
        <div className="about-header">
          <h1>About Water-Wise</h1>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <section className="about-intro">
            <h2>Our Mission</h2>
            <p>
              Water-Wise is a project dedicated to promoting water conservation
              through engaging activities, challenges, and educational resources.
              Our goal is to empower individuals and communities to save water in
              their everyday lives, creating a sustainable future for generations
              to come.
            </p>
          </section>

          <section className="about-values">
            <h2>Our Values</h2>
            <ul>
              <li>Environmental Responsibility: Committed to preserving the planet.</li>
              <li>Education: Raising awareness about the importance of water conservation.</li>
              <li>Community Engagement: Inspiring people to take action together.</li>
              <li>Innovation: Using technology to create fun, impactful ways to conserve water.</li>
            </ul>
          </section>

          <section className="about-how-it-works">
            <h2>How It Works</h2>
            <p>
              Water-Wise allows users to participate in daily challenges that
              encourage water-saving behaviors. By completing these challenges, users
              earn points, which they can track and use to compare their progress with
              others. The more you save, the more you contribute to a sustainable future!
            </p>
          </section>

          <section className="about-join-us">
            <h2>Join Us</h2>
            <p>
              Every drop counts! Join the Water-Wise community today, start saving
              water, and make a real difference. Together, we can build a better,
              more sustainable world.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
