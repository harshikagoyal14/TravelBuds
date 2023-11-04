import React,{useState} from 'react'
import PickupIcon from '../../icons/pickup-icon.svg'
import DestIcon from '../../icons/destination-icon.svg'
import Time from '../../icons/time-icon.svg'
import UpcomingRide from '../../icons/upcoming-ride-icon.svg'
import './popUp.css'

const AddRidePop = ({closePop}) => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
       <div className ='popUp-bg'></div>
       <div className = 'pop-container'>
            <button className='cross-btn' onClick ={closePop}>X</button>

            <div className ='pickup-search'>
            <img className='icon1'
                src = {PickupIcon}
                alt =''
            />
                <form>
                    <label>
                        <h5>Pickup</h5>
                        <input
                        type="text"
                        name="inputField"
                        className='search-bar'
                        />
                    </label>
                </form>
           </div>

           <div className ='dest-search'>
            <img className='icon2'
                src = {DestIcon}
                alt =''
            />
            <form>
                <label>
                    <h5>Destination</h5>
                    <input
                    type="text"
                    name="inputField"
                    className='search-bar'
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
            
        </div>

        
        <div className ='name-field'>
            <img className='icon22'
                src = {DestIcon}
                alt =''
            />
            <form>
                <label>
                    <h5>Name</h5>
                    <input
                    type="text"
                    name="inputField"
                    className='search-bar'
                    />
                </label>
            </form>
         </div>

         <div className ='car-field'>
            <img className='icon23'
                src = {DestIcon}
                alt =''
            />
            <form>
                <label>
                    <h5>Car</h5>
                    <input
                    type="text"
                    name="inputField"
                    className='search-bar'
                    />
                </label>
            </form>
         </div>

         <div className ='cap-field'>
            <img className='icon24'
                src = {DestIcon}
                alt =''
            />
            <form>
                <label>
                    <h5>Capacity</h5>
                    <input
                    type="text"
                    name="inputField"
                    className='search-bar'
                    />
                </label>
            </form>
         </div>
         <button className="add-ride-pop" onClick={() => setShowModal(true)}>Proceed</button>
       </div> 
    </>
  )
}

export default AddRidePop;


