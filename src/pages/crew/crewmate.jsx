import React from 'react';
import './crewmate.css'; // Create a CSS file for styles
import crewmatesImage from '../../assets/group.png'; // Ensure this path is correct
import {Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="create">Create a Crewmate!</Link></li>
          <li><Link to="gallery">Crewmate Gallery</Link></li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to the Crewmate Creator!</h1>
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img src={crewmatesImage} alt="Crewmates and spaceship" />
      </div>
      
    </div>
  );
}

export default Home;
