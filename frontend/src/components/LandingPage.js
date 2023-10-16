import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import Features from './Features';
import '../App.css';
const LandingPage = () => {
  return (
    <div className="landing">

      <div className='navbar_div'>
      <Navbar/>
      </div>
      
      <div className="landing-content">
        <div className="landing-left">
          <h1>"Ride <span className='red'>Smart</span>,</h1>
          <h1> Save <span className='red'>Big</span>,</h1>
          <h1>Choose TravelBud!"</h1>
          <div className="landing-buttons">
            <Link to="/login" className="login-button1">Login</Link>
            <Link to="/signup" className="signup-button1">Sign Up</Link>
          </div>
        </div>
        <div className="landing-right">
          <img src= {require("../images/Carpool.jpeg")} alt="Carpooling" />
        </div>
      </div>

      <div>
        <Features/>
      </div>
    </div>
  );
}

export default LandingPage;
