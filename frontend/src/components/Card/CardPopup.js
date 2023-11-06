import React from "react";
import './CardPopup.css'

const CardPopup = ({ closeModal}) => {

  return(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
          <p>Do you want to proceed? </p>
            <div className="btn-div">
              <button id='yes'>Yes</button>
              <button id='no' onClick={closeModal}>No</button>
            </div>
      </div>
    </>
  );
};

export default CardPopup;