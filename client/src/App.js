import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Homepage from "./Components/Homepage/Homepage";
import Acknowledgement from "./Components/Acknowledgement/Acknowledgement";  // Import Acknowledgement page
import AboutUs from "./Components/AboutUs/AboutUs";
import ChallengePage from './Components/ChallengePage/ChallengePage'; 

const App = () => {
  return (
    <Router basename="/Water-Wise">
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/acknowledgement" element={<Acknowledgement />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/challenges" element={<ChallengePage />} />
      </Routes>
    </Router>
  );
};

export default App;
