import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

// ✅ Import assets with correct path
import logo from "../Assets/logo.png";
import defaultUserIcon from "../Assets/person.png";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo & title */}
       

        {/* Navigation links */}
        <ul className="navbar-links">
          <li><Link to="/savings-history">My Savings History</Link></li>
          <li><Link to="/savings-target">My Savings Target</Link></li>
          <li><Link to="/saving-summary">Saving Summary</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/acknowledgement">Acknowledgements</Link></li>
        </ul>

        {/* Auth user info */}
        <div className="nav-user">
          {isAuthenticated && user ? (
            <div className="user-info">
              <img
                src={user.photo || defaultUserIcon}
                alt="Profile"
                className="user-avatar"
              />
              <span className="user-name">{user.name}</span>
              <div className="user-stats">
                <span className="points">🏆 {user.points || 0} pts</span>
                <span className="level">⭐ Level {user.level || 1}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-link">
             
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;