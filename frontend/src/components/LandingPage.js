import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-left">
          <h1>"Ride <span className='red'>Smart</span>,</h1>
          <h1> Save <span className='red'>Big</span>,</h1>
          <h1>Choose TravelBud!"</h1>
          <div className="landing-buttons">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </div>
        </div>
        <div className="landing-right">
          <img src="../../public/images/Carpool.jpeg" alt="Carpooling" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
