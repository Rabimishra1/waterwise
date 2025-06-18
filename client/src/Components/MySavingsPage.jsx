import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MySavingsPage.css';

// Challenge groups
const challengeGroups = {
  'Home-based': ['Shorter Shower', 'Use Buckets'],
  'Community-based': ['Educate Others', 'Tree Planting Drives'],
  'Awareness-based': ['Spread Awareness', 'DIY Water Filter'],
  'Technical-based': ['Install Water Saving Tools', 'Smart Gardening']
};

const MySavingsPage = () => {
  const [savings, setSavings] = useState([]);
  const [expandedGroup, setExpandedGroup] = useState(null);

  const fetchSavings = () => {
    const token = localStorage.getItem('waterwise_token');
    axios.get('http://localhost:5000/api/savings', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setSavings(res.data))
    .catch(() => setSavings([]));
  };

  useEffect(() => {
    fetchSavings();
    window.addEventListener('focus', fetchSavings);
    return () => window.removeEventListener('focus', fetchSavings);
  }, []);

  // Group by date and challenge group
  const getGroupedSavings = () => {
    return Object.entries(challengeGroups).map(([groupName, challenges]) => {
      const groupSavings = savings.filter(s => challenges.includes(s.challengeName));
      return { groupName, groupSavings };
    });
  };

  const groupedSavings = getGroupedSavings();

  return (
    <div className="savings-dashboard">
      <h1>My Savings Dashboard</h1>
      <button className="refresh-btn" onClick={fetchSavings}>Refresh</button>

      {groupedSavings.length === 0 && <p className="no-savings">No savings yet.</p>}

      <div className="group-columns">
        {groupedSavings.map(({ groupName, groupSavings }) => (
          <div 
            key={groupName}
            className={`group-column ${expandedGroup === groupName ? 'expanded' : ''}`}
            onClick={() => setExpandedGroup(expandedGroup === groupName ? null : groupName)}
          >
            <h2>{groupName}</h2>
            {expandedGroup === groupName && (
              <div className="group-tasks">
                {groupSavings.length === 0 ? (
                  <p className="no-tasks">No tasks completed yet</p>
                ) : (
                  groupSavings.map((entry, idx) => (
                    <div key={idx} className="task-card">
                      <h3>{entry.challengeName}</h3>
                      <p>{entry.litres} litres saved</p>
                      <p className="task-date">{new Date(entry.date).toLocaleDateString()} at {new Date(entry.date).toLocaleTimeString()}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySavingsPage;
