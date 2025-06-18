import React from "react";
import { Navigate } from "react-router-dom";
import "./LoginSignup.css";

// Importing assets (adjust path based on your structure)
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import logo from "../Assets/logo.png";
import google_icon from "../Assets/google.png";

const LoginSignup = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const handleGoogleSignIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login-signup-page"> {/* Add this wrapper div */}
      <div className="logo-container">
        <img src={logo} alt="WaterWise Logo" className="logo" />
      </div>
      <div className="tagline">Join the water conservation movement!</div>

      <div className="container">
        <div className="header">
          <div className="text">Welcome</div>
          <div className="underline"></div>
        </div>

        <div className="google-signin" onClick={handleGoogleSignIn}>
          <img src={google_icon} alt="Google Icon" />
          <span>Sign in with Google</span>
        </div>

        <div className="divider"><span>OR</span></div>

        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Email Id" disabled style={{ opacity: 0.5 }} />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Enter your password" disabled style={{ opacity: 0.5 }} />
          </div>
        </div>

        <div className="submit-container">
          <button className="submit" disabled style={{ opacity: 0.5 }}>
            Coming Soon
          </button>
          <div className="toggle-action">
            <span>Manual login will be enabled soon.</span>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default LoginSignup;