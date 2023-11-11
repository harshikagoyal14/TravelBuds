
import React from 'react';
import './CardPopup.css';


const CardPopup = ({ closeModal, cardData, updateCardCapacity }) => {

  if (!cardData) {
    return null;
  }

  const handleYesClick = () => {
    if (cardData.capacity > 0) {
      updateCardCapacity(cardData.id); // Pass the card ID to the update function
    }
    closeModal();
  };


  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <p>Do you want to proceed? </p>
        <div className="btn-div">
          <button id='yes' onClick={handleYesClick} >
            Yes
          </button>
          <button id='no' onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPopup;
