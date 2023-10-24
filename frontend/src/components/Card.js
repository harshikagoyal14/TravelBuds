import React from 'react';
import "../App.css";
import PickUpIcon from '../icons/PickupIconCard.svg';
import ToIcon from '../icons/to-icon.svg';
import EnterIcon from '../icons/enter-icon.svg';
import CheckIcon from '../icons/check-icon.svg';
const Card = ({pickupLocation,destLocation}) => {
    return (
        <div className='card'>
           
            <img id="pickup-icon-card"src={PickUpIcon} alt="Pickup Card Icon" />
            <h3 className="custom-h3">Pilani</h3>
          

          
            <img id="to-icon-card"src={ToIcon} alt="To Icon" />
            <h3 className="custom-h3-to">Delhi</h3>
          
            
           
            <h4 className='custom-h4'>TOYOTA FORTUNER</h4>

           
            <img id="check-icon-card" src={CheckIcon} alt="Enter Icon" /> 
          
            <button className="enter-button">Enter</button>
            <img id="enter-icon-card" src={EnterIcon} alt="Enter Icon" />
          

        </div>
       
    );
}

export default Card;