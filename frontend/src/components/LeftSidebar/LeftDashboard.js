import React, {useState} from 'react'
import './LeftDashboard.css'
import AddRidePop from './AddRidePop'
import PickupIcon from '../../icons/pickup-icon.svg'
import DestIcon from '../../icons/destination-icon.svg'
import Time from '../../icons/time-icon.svg'
import UpcomingRide from '../../icons/upcoming-ride-icon.svg'
import DateTimePicker from './dateandtime'
import axios from 'axios';


export const LeftDashboard = ({onSearch}) => {
  const [addRide, setAddRidePop] = useState(false);

  const closePop = () => setAddRidePop(false);

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null); // Use null as the initial state
  const [time, setTime] = useState('');
 

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/search', {pickup, destination, date, time });
      onSearch(response.data.pickups);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='left-dashboard'>


            <div className='top'>
                <div className ='pickup-search'>
                    <div className='one'>
                        <img className='icon1'
                            src = {PickupIcon}
                            alt =''
                        />
                         <h5>Pickup</h5>
                    </div>
                      
                <form onSubmit={handleSubmit}>
                        <label>
                           
                            <input
                            type="text"
                            name="inputField"
                            className='search-bar'
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            />
                        </label>
                    </form>
                </div>

                <div className ='dest-search'>
                    <div className='two'>
                        <img className='icon2'
                            src = {DestIcon}
                            alt =''
                        />
                         <h5>Destination</h5>
                    </div>
                   
                    <form onSubmit={handleSubmit}>
                        <label>
                           
                            <input
                            type="text"
                            name="inputField"
                            className='search-bar'
                            value={fdestination}
                            onChange={(e) => setDestination(e.target.value)}
                            />
                        </label>
                    </form>
                </div>

                <div className ='time'>
                    <img className='icon3'
                        src = {Time}
                        alt =''
                    />
                    <h5>Time & Date</h5>
                    <DateTimePicker
                        selected={dateTime} 
                    />
                   
                    <button type ="submit" className='search-ride'>Search</button>
                </div>
            </div>

        <div className ='upcoming-rides'>
            <img className='icon4'
                src = {UpcomingRide}
                alt =''
            />
            <h5>Upcoming Rides</h5>
        </div>

        <div className='btn'>
            <button className='addRide-btn' onClick = {()=>setAddRidePop(true)}>Add Ride</button>
        </div>
        
        {addRide && <AddRidePop closePop = {closePop}/>}
    </div>
  )
}

