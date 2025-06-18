import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Homepage from "./Components/Homepage/Homepage";
import Acknowledgement from "./Components/Acknowledgement/Acknowledgement";
import AboutUs from "./Components/AboutUs/AboutUs";
import ChallengePage from './Components/ChallengePage/ChallengePage';
import LandingPage from './Components/LandingPage/LandingPage';
import AuthSuccess from "./Components/AuthSuccess";
import { AuthProvider } from "./context/AuthContext";
import SavingsSummaryPage from './Components/SavingsSummaryPage';
import MySavingsPage from './Components/MySavingsPage';

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/waterwise">
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/acknowledgement" element={<Acknowledgement />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/auth/success" element={<AuthSuccess />} />
          <Route path="/saving-summary" element={<SavingsSummaryPage />} />
          <Route path="/savings-history" element={<MySavingsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
