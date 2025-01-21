import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#savings-history">My Savings History</a></li>
        <li><a href="#savings-target">My Savings Target</a></li>
        <li><a href="#saving-summary">Saving Summary</a></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/acknowledgement">Acknowledgements</Link></li>  {/* Use Link for React Router */}
      </ul>
    </nav>
  );
};

export default Navbar;
