import React, { useState } from 'react';
import './LeftDashboard.css';
import AddRidePop from './AddRidePop';
import PickupIcon from '../../icons/pickup-icon.svg';
import DestIcon from '../../icons/destination-icon.svg';
import Time from '../../icons/time-icon.svg';
import UpcomingRide from '../../icons/upcoming-ride-icon.svg';
import CardList from '../Card/Card';
import DateTime from './dateandtime';

export const LeftDashboard = ({ addNewCard }) => {
  const [addRide, setAddRidePop] = useState(false);
  const [rides, setRides] = useState([]); // To store the list of rides

  const closePop = () => setAddRidePop(false);

  
  const addRideToList = (newRide) => {
    setRides([...rides, newRide]);
    // Assuming addNewCard is a function passed down to update cards in RideNow component
    addNewCard(newRide);
  };

  return (
    <div className='left-dashboard'>
      <div className='pickup-search'>
        <img className='icon1' src={PickupIcon} alt='' />
        <form>
          <label>
            <h5>Pickup</h5>
            <input type='text' name='inputField' className='search-bar' />
          </label>
        </form>
      </div>

      <div className='dest-search'>
        <img className='icon2' src={DestIcon} alt='' />
        <form>
          <label>
            <h5>Destination</h5>
            <input type='text' name='inputField' className='search-bar' />
          </label>
        </form>
      </div>

      <div className='time'>
        <img className='icon3' src={Time} alt='' />
        <h5>Time & Date</h5>
      </div>

      <div className='upcoming-rides'>
        <img className='icon4' src={UpcomingRide} alt='' />
        <h5>Upcoming Rides</h5>
      </div>

      <button className='addRide-btn' onClick={() => setAddRidePop(true)}>
        Add Ride
      </button>

      {addRide && (
        <AddRidePop closePop={closePop} addRideToList={addRideToList} />
      )}

      {/* Render CardList with the rides */}
      <CardList rides={rides} />
    </div>
  );
};
