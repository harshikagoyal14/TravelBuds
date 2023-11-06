import React, { useState } from 'react';
import axios from 'axios';
import PickupIcon from '../../icons/pickup-icon.svg';
import DestIcon from '../../icons/destination-icon.svg';
import Time from '../../icons/time-icon.svg';
import './popUp.css';
import { useNavigate } from 'react-router-dom';

const AddRidePop = ({ closePop }) => {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    time: '',
    name: '',
    car: '',
    capacity: '',
  });

  const handleSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/card/add-card', formData);

    if (response.status === 200) {
      console.log('Card added successfully');
      setFormData({
        pickup: '',
        destination: '',
        time: '',
        name: '',
        car: '',
        capacity: '',
      });
      closePop();
    } else {
      console.log('Card addition failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="popUp-bg"></div>
      <div className="pop-container">
        <button className="cross-btn" onClick={closePop}>
          X
        </button>

        <div className="input-field">
          <img className="icon" src={PickupIcon} alt="" />
          <form>
            <label>
              <h5>Pickup</h5>
              <input
                type="text"
                name="pickup"
                className="search-bar"
                value={formData.pickup}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <div className="input-field">
          <img className="icon" src={DestIcon} alt="" />
          <form>
            <label>
              <h5>Destination</h5>
              <input
                type="text"
                name="destination"
                className="search-bar"
                value={formData.destination}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <div className="input-field">
          <img className="icon" src={Time} alt="" />
          <form>
            <label>
              <h5>Time & Date</h5>
              <input
                type="text"
                name="time"
                className="search-bar"
                value={formData.time}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <div className="input-field">
          <img className="icon" src={DestIcon} alt="" />
          <form>
            <label>
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                className="search-bar"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <div className="input-field">
          <img className="icon" src={DestIcon} alt="" />
          <form>
            <label>
              <h5>Car</h5>
              <input
                type="text"
                name="car"
                className="search-bar"
                value={formData.car}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <div className="input-field">
          <img className="icon" src={DestIcon} alt="" />
          <form>
            <label>
              <h5>Capacity</h5>
              <input
                type="text"
                name="capacity"
                className="search-bar"
                value={formData.capacity}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>

        <button className="add-ride-pop" onClick={handleSubmit}>
          Proceed
        </button>
      </div>
    </>
  );
};

export default AddRidePop;
