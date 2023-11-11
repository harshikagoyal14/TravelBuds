import React,{useState} from 'react'
import PickupIcon from '../../icons/pickup-icon.svg'
import DestIcon from '../../icons/destination-icon.svg'
import Time from '../../icons/time-icon.svg'
import UpcomingRide from '../../icons/upcoming-ride-icon.svg'
import DateTimePicker from './dateandtime'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './popUp.css'

const AddRidePop = ({closePop}) => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  
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
       <div className ='popUp-bg'></div>
       <div className = 'pop-container'>
          
            
            
            <div className='left-col'>
                    <div className='enter-pickup' >
                        <div className='pick-holder'>
                            <img className='icon111'
                                src = {PickupIcon}
                                alt =''
                            />
                             <h5>Pickup</h5>
                        </div>
                            <form>
                                <label>
                                   
                                    <input
                                    type="text"
                                    name="pickup"
                                    className='search-bar-pop'
                                    value= {formData.pickup}
                                    onChange={handleChange}
                                    />
                                </label>
                            </form>
                    </div>

                    <div className='enter-dest' >
                        <div className='dest-holder'>
                            <img className='icon222'
                                src = {DestIcon}
                                alt =''
                                />
                            <h5>Destination</h5>
                        </div>
                           
                        <form>
                            <label>
                              
                                <input
                                type="text"
                                name="destination"
                                className='search-bar-pop'
                                value={formData.destination}
                                onChange={handleChange}
                                />
                            </label>
                        </form>
                    </div>

                    <div className='enter-time'>
                        <div className='time-holder'>
                            <img className='icon333'
                                src = {Time}
                                alt =''
                            />
                            <h5 id ='pop'>Time & Date</h5>

                        </div>
                           
                        <DateTimePicker/>
                    </div>
            </div>

            
            <div className='right-col'>
                    <button className='cross-btn' onClick ={closePop}>X</button>
                    <div className ='name-field'>
                        <div className='name-holder'>
                            <img className='icon22'
                                src = {DestIcon}
                                alt =''
                            />
                             <h5>Name</h5>
                        </div>
                        <form>
                            <label>
                               
                                <input
                                type="text"
                                name="name"
                                className='search-bar-pop'
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </label>
                        </form>
                    </div>

                    <div className ='car-field'>
                        <div className='car-holder'>
                            <img className='icon23'
                                src = {DestIcon}
                                alt =''
                            />
                             <h5>Car</h5>
                        </div>
                        <form>
                            <label>
                               
                                <input
                                type="text"
                                name="car"
                                className='search-bar-pop'
                                value={formData.car}
                                onChange={handleChange}
                                />
                            </label>
                        </form>
                    </div>

                                
                    <div className ='cap-field'>
                        <div className='cap-holder'>
                            <img className='icon24'
                                src = {DestIcon}
                                alt =''
                            />
                            <h5>Capacity</h5>
                        </div>
                        <form>
                            <label>
                                
                                <input
                                type="text"
                                name="capacity"
                                className='search-bar-pop'
                                value={formData.capacity}
                                onChange={handleChange}
                                />
                            </label>
                        </form>
                    </div>

                    <button className="add-ride-pop" onClick={handleSubmit}>Proceed</button>

            </div>
        </div> 
    </>
  )
}

export default AddRidePop;


