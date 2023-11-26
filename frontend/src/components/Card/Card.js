import React, { useState } from 'react';
import PickUpIcon from '../../icons/PickupIconCard.svg';
import ToIcon from '../../icons/to-icon.svg';
import CheckIcon from '../../icons/check-icon.svg';
import CardPopup from './CardPopup';

const Card = ({ cardData, currentUser, onClick, updateCardCapacity }) => {
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
  const isDeleteButtonVisible = currentUser && cardData.userId === currentUser.id;

  return (
    <div className="card">
      <div className="top">
        <div className="from">
          <img src={PickUpIcon} alt="PickUp" />
          <p style={{ color: '#FD4438', backgroundColor: '#2e2e31' }}>
            {cardData.pickup}
          </p>
        </div>

        <div className="to">
          <img src={ToIcon} alt="To" />
          <p style={{ color: '#FD4438', backgroundColor: '#2e2e31' }}>
            {cardData.destination}
          </p>
        </div>
      </div>

      <div className="car-name">
        <span style={{ backgroundColor: '#2e2e31', color: '#D0D0DA' }}>
          Car: {cardData.car || 'N/A'}
        </span>
      </div>

      <div className="date-n-time">
        <span style={{ backgroundColor: '#2e2e31', color: '#D0D0DA' }}>
          Time & Date: {cardData.time || 'N/A'}
        </span>
      </div>

      <div className="car-booker">
        <span style={{ backgroundColor: '#2e2e31', color: '#D0D0DA' }}>
          Name: {cardData.name || 'N/A'}
        </span>
      </div>

      <div className="capacity">
        Capacity: {cardData.capacity || 'N/A'}
      </div>

      <div className="bottom">
        <button className="enter-button" onClick={handleEnterClick}>
          Enter
        </button>

        {isPopupVisible && (
          <CardPopup closeModal={handleCloseModal} cardData={cardData} updateCardCapacity={updateCardCapacity} />
        )}

          {isDeleteButtonVisible && (
          <button className="delete-button" onClick={onClick}>
            Delete
          </button>
        )}
          
        
      </div>
    </div>
  );
};

export default Card;
