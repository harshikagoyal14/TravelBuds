import React from 'react';
import '../App.css';

const Features = () => {
  return (
    <div>
      <div className="question-box">
        <h3>What is TravelBud?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur elit vel orci vehicula, sed auctor dui dapibus.</p>
      </div>
      <div className="features-box">
        <div className="feature-column">
          <h4>Feature 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-column">
          <h4>Feature 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-column">
          <h4>Feature 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
