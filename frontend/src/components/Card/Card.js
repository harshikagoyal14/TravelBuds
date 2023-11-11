import React, { useState }  from 'react';
import PickUpIcon from '../../icons/PickupIconCard.svg';
import ToIcon from '../../icons/to-icon.svg';
import CheckIcon from '../../icons/check-icon.svg';
import CardPopup from './CardPopup';


const Card = ({ cardData, currentUser, onClick, updateCardCapacity}) => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  if (!cardData) {
    return null; 
  }

  const handleEnterClick = () => {
    setPopupVisible(true);
  };

  const handleCloseModal = () => {
    setPopupVisible(false);
  };
  
  return (
    <div className="card">
      <div className="top">
        <div className="from">
          <img src={PickUpIcon} alt="PickUp" />
          <p style={{ color: '#FD4438', backgroundColor: '#0F0F13' }}>
            {cardData.pickup}
          </p>
        </div>

        <div className="to">
          <img src={ToIcon} alt="To" />
          <p style={{ color: '#FD4438', backgroundColor: '#0F0F13' }}>
            {cardData.destination}
          </p>
        </div>
      </div>

      <div className="car-name">
        <span style={{ backgroundColor: '#0F0F13', color: '#D0D0DA' }}>
          Car: {cardData.car}
        </span>
      </div>

      <div className="date-n-time">
        <p>Time & Date: {cardData.time}</p>
      </div>

      <div className="car-booker">
        <span style={{ backgroundColor: '#0F0F13', color: '#D0D0DA' }}>
          Name: {cardData.name}
        </span>
      </div>

      <div className="bottom">
        <div className="capacity">
          <img src={CheckIcon} alt="Check" />
          Capacity: {cardData.capacity}
        </div>

        <button className="enter-button" onClick={handleEnterClick}>
          Enter
        </button>
        {isPopupVisible && (
        <CardPopup closeModal={handleCloseModal} cardData={cardData} updateCardCapacity={updateCardCapacity} />
      )}

      {cardData.userId === currentUser.id && (
            <button className="delete-button" onClick={onClick}>
              Delete
            </button>
          )}
      </div>
    </div>
  );
};

export default Card;
