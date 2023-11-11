import React from 'react';
import '../App.css';

const Features = () => {
  return (
    <div>
   
      <div className="circles">
        <div className="circle">1</div>
        <div className="double-arrow">&#10234;</div>
        <div className="circle">2</div>
        <div className="double-arrow">&#10234;</div>
        <div className="circle">3</div>
      </div>
      <div className="feature-columns">
       <div className="feature-column">
       <div className="feature">
        <img src={require("../images/wheel.png")} alt="car" />
        <h2>Choose a ride</h2>
        <p>Search in existing rides or add new ride . Get a list of carpools in one GO !</p>
      </div>
       </div>
       <div className="feature-column">
       <div className="feature">
        <img src={require("../images/link.png")} alt="car" />
        <h2>Invite Members</h2>
        <p>Invite members to your carpool, and save earnings.</p>
        </div>
       </div>
       <div className="feature-column">
       <div className="feature">
        <img src={require("../images/link.png")} alt="car" />
        <h2>Get Notified</h2>
        <p>Get notifications about every update to your ride at your fingertips.</p>
       </div>
       </div>
      </div>
    
    </div>
  );
}

export default Features;