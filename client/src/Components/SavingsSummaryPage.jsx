import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavingsSummaryPage.css';


// Challenge groups
const challengeGroups = {
  'Home-based': ['Shorter Shower', 'Use Buckets'],
  'Community-based': ['Educate Others', 'Tree Planting Drives'],
  'Awareness-based': ['Spread Awareness', 'DIY Water Filter'],
  'Technical-based': ['Install Water Saving Tools', 'Smart Gardening']
};

// Motivational quotes
const waterQuotes = [
  "Every drop counts—save water, save life!",
  "Water is precious, use it wisely.",
  "Conserving water today ensures a better tomorrow.",
  "Be the change: save water, inspire others!",
  "Don’t let the future run dry—conserve water now."
];

const SavingsSummaryPage = () => {
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('waterwise_token');
    axios.get('http://localhost:5000/api/savings', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setSavings(res.data))
    .catch(() => setSavings([]));
  }, []);

  const randomQuote = waterQuotes[Math.floor(Math.random() * waterQuotes.length)];

  // Calculate total savings for each group
  const getGroupTotals = () => {
    return Object.entries(challengeGroups).map(([groupName, challenges]) => {
      const groupSavings = savings.filter(s => challenges.includes(s.challengeName));
      const total = groupSavings.reduce((sum, s) => sum + s.litres, 0);
      return { groupName, total };
    });
  };

  const groupTotals = getGroupTotals();

  return (
    
    <div className="savings-summary-page">
      
      <h2>Savings Summary</h2>
      <p className="motivational-quote">"{randomQuote}"</p>
      <div className="savings-groups">
        {groupTotals.map(({ groupName, total }, idx) => (
          <div key={idx} className="saving-group">
            <h3>{groupName}</h3>
            <p className="total-savings">{total} litres saved</p>
          </div>
        ))}
      </div>
      <p className="no-savings">
        {groupTotals.reduce((sum, g) => sum + g.total, 0) === 0 && "No savings recorded yet."}
      </p>
    </div>
  );
};

export default SavingsSummaryPage;
