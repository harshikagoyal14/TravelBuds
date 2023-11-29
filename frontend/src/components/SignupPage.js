import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    rollNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

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
  // Create a JavaScript object to represent the form data
  const postData = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    rollNumber: formData.rollNumber,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  };

  // Send the form data to the server
  axios.post('http://localhost:3001/api/user/signup', postData)
    .then((response) => {
      console.log("Data sent to server successfully");
      navigate('/login');
    })
    .catch((error) => {
      console.error("Error sending data to server:", error.message);
      // Handle the error if needed
    });
};

  return (
    <div className="signup-container" style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/19/68/32/360_F_419683225_7RYa2h2m54UkGLCeEC6tHXoahX7Ymv8k.jpg")' }}>
      <div className='box1'>
        <h1>Signup</h1>
        <form action="/signup" method="post" onSubmit={handleSubmit}>
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
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
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
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={togglePasswordVisibility}
              ></i>
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
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="signup-button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;






