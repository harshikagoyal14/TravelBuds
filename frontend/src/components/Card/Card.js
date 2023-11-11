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
           <div className ='top'> 
                <div className ='from'>
                <img src={PickUpIcon} style={{ backgroundColor: '#0F0F13' }} />
                    
                    <p style = {{color: '#FD4438', backgroundColor: '#0F0F13' }} id='picklocation'>Pilani</p>
                </div>

                <div className ='to'>
                <img src = {ToIcon}  style={{ backgroundColor: '#0F0F13' }} />
                   
                    <p style = {{color: '#FD4438', backgroundColor: '#0F0F13'  }} id='destlocation'>Delhi</p>
                </div>
            </div>

            <div className ='car-name'>
                <span style={{ backgroundColor: '#0F0F13',color:'#D0D0DA' }} >TOYOTA FORTUNER</span>
            </div>

            <div className ='date-n-time'>
                <p>Date and Time </p>
            </div>

            <div className='car-booker'>
                <span style={{ backgroundColor: '#0F0F13',color:'#D0D0DA' }} >NAME</span>
            </div>

            <div className='bottom'>
                    <div className='capacity'>
                        <img src = {CheckIcon}  style={{ backgroundColor: '#0F0F13' }} />
                    </div>
                
                    <button className="enter-button" onClick={() => setShowModal(true)}>Enter</button>
                    {showModal && <CardPopup closeModal={closeModal}/>}
            </div>
          

        </div>
       
    );
}

export default Card;