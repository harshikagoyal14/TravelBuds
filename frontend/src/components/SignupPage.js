import React, { useState } from 'react';
import '../App.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here, e.g., API calls or validation
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            required
          />
        </div>
      <div className="form-group">
  <label>Password:</label>
  <div className="password-input">
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      required
    />
    <button type="button" onClick={togglePasswordVisibility}>
      {showPassword ? 'Hide' : 'Show'}
    </button>
  </div>
</div>
<div className="form-group">
  <label>Confirm Password:</label>
  <div className="password-input">
    <input
      type={showPassword ? 'text' : 'password'}
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleInputChange}
      required
    />
    <button type="button" onClick={togglePasswordVisibility}>
      {showPassword ? 'Hide' : 'Show'}
    </button>
  </div>
</div>

        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
