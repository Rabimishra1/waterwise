import React from 'react';
import './Acknowledgement.css';


const Acknowledgement = () => {
  return (
    <div className="acknowledgement-container">
     
      <h1>Acknowledgement</h1>
      <p>
        We, the team members of this project, would like to express our heartfelt gratitude and sincere appreciation to everyone who supported and guided us throughout the course of this final year project.
      </p>
      
      <h2>Team Members:</h2>
      <ul>
        <li>Rabi Kumar Mishra</li>
        <li>Shreya Mitra</li>
        <li>Ayush Tiwari</li>
        <li>Avishek Mallick</li>
      </ul>
      
      <p>
        Each of us contributed our knowledge and skills in developing this project. The collaboration between us strengthened our approach and helped us achieve a comprehensive and successful outcome. We worked together to plan, develop, and execute each phase of the project to the best of our abilities.
      </p>

      <h2>Mentor:</h2>
      <ul>
        <li>Dr. Swapnadeep De</li>
      </ul>

      <p>
        We would like to extend our deepest gratitude to our mentor, Dr. Swapnadeep De, for providing us with valuable guidance, constructive feedback, and constant support throughout the project. His expertise, patience, and encouragement were crucial in bringing this project to completion.
      </p>

      <button>Back to Home</button>
    </div>
  );
};

export default Acknowledgement;
