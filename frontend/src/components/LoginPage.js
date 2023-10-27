import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // If login is successful, save user data to local storage
      localStorage.setItem('user', JSON.stringify(formData));

      console.log('Login-Successful');
      navigate('/ride-now');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className='box2'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            <button className="login-button" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
