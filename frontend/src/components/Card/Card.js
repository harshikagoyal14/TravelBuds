import React,{useState} from 'react';
import './CardPopup.css';
import PickUpIcon from '../../icons/PickupIconCard.svg';
import ToIcon from '../../icons/to-icon.svg';
import EnterIcon from '../../icons/enter-icon.svg';
import CheckIcon from '../../icons/check-icon.svg';
import CardPopup from './CardPopup';

const Card = ({pickupLocation,destLocation}) => {

    
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    
    
    return (
        <div className='card'>
           
            <div clasName ='from'>
                <img src = {PickUpIcon}/>
                <p>From</p>
            </div>

            <div clasName ='to'>
               <img src = {ToIcon}/>
                <p>To</p>
            </div>

            <div clasName ='car-name'>
                <p>TOYOTA FORTUNER</p>
            </div>

            <div clasName ='date-n-time'>
                <p>Date and Time </p>
            </div>

            <div className='car-booker'>
                <p>NAME</p>
            </div>

            <div className='capacity'>
                <img src = {CheckIcon}/>
            </div>
          
             <button className="enter-button" onClick={() => setShowModal(true)}>Enter</button>
             {showModal && <CardPopup closeModal={closeModal}/>}
          
          

        </div>
       
    );
}

export default Card;