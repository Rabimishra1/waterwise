import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

// Importing assets
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import logo from "../Assets/logo.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = () => {
    navigate("/home");
    if (!email || !password || (action === "Sign Up" && !name)) {
      alert("Please fill all required fields!");
      return;
    }
    // Simulating login or signup logic
    console.log(`${action} successful!`);
    console.log("Email:", email);
    if (action === "Sign Up") {
      console.log("Name:", name);
    }

    // Redirect to homepage
    
  };

  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="WaterWise Logo" className="logo" />
      </div>
      <div className="tagline">
      
      </div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" && (
            
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          {/* Email Input */}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          {/* Submit Button */}
          <button className="submit" onClick={handleSubmit}>
            {action}
          </button>
          {/* Toggle Between Login and Sign Up */}
          <div className="toggle-action">
            {action === "Login" ? (
              <span onClick={() => setAction("Sign Up")}>
                Don’t have an account? Sign Up
              </span>
            ) : (
              <span onClick={() => setAction("Login")}>
                Already have an account? Login
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
