import React, { useState, useEffect } from 'react';
import './LeftDashboard.css';
import AddRidePop from './AddRidePop';
import PickupIcon from '../../icons/pickup-icon.svg';
import DestIcon from '../../icons/destination-icon.svg';
import Time from '../../icons/time-icon.svg';
import DateTimePicker from 'react-datetime-picker';


export const LeftDashboard = ({ addNewCard, uniqueId, searchCards  }) => {
  const [addRide, setAddRidePop] = useState(false);
  const [rides, setRides] = useState([]); 
  const closePop = () => setAddRidePop(false);

  const addRideToList = (newRide) => {
    setRides([...rides, newRide]);
    addNewCard(newRide);
  };

  const [searchParams, setSearchParams] = useState({
    pickup: '',
    destination: '',
    date: '',
  });

const handleSearch = () => {
  setSearchParams((prevSearchParams) => ({
    ...prevSearchParams,
    pickup: document.getElementById(`pickup_${uniqueId}`).value,
    destination: document.getElementById(`destination_${uniqueId}`).value,
    date: document.getElementById(`date_${uniqueId}`).value,
  }));
};

useEffect(() => {
  // This effect will be triggered after the component has rendered
  searchCards(searchParams);
}, [searchParams]);

  return (
    <div className='left-dashboard'>
     <div className='pickup-search'>
        <img className='icon1' src={PickupIcon} alt='' />
        <form>
          <label>
            <h5>Pickup</h5>
            <input type='text' id={`pickup_${uniqueId}`} className='search-bar' />
          </label>
        </form>
      </div>

      <div className='dest-search'>
        <img className='icon2' src={DestIcon} alt='' />
        <form>
          <label>
            <h5>Destination</h5>
            <input type='text' id={`destination_${uniqueId}`} className='search-bar' />
          </label>
        </form>
      </div>

      <div className='time'>
        <img className='icon3' src={Time} alt='' />
        <form>
          <label>
            <h5>Date</h5>
            <input type='text' id={`date_${uniqueId}`} className='search-bar' />
          </label>
        </form>
      </div>

      <button className='search-btn' onClick={handleSearch} >
        Search
      </button>

      <button className='addRide-btn' onClick={() => setAddRidePop(true)}>
        Add Ride
      </button>

      {addRide && <AddRidePop closePop={closePop} addRideToList={addRideToList} />}
    </div>
  );
};