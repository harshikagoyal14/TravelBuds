import React from 'react';
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
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
        <div className="landing-right">
          <img src= "../../public/images/Carpool.jpeg" alt="Carpooling" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
