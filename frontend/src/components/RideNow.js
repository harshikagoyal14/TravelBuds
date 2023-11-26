import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card/Card';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';
import { LeftDashboard } from './LeftSidebar/LeftDashboard';
import AddRidePop from './LeftSidebar/AddRidePop';
import Dropdown from './ProfileDropdown';
import CardPopup from './Card/CardPopup';
import { sendEmail } from './EmailHandler';

const RideNow = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }

    // Retrieve cards from localStorage on component mount
    const storedCards = localStorage.getItem('rideNowCards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const addNewCard = (newCard) => {
    const updatedCards = [...cards, { ...newCard, userId: user ? user.id : null, capacity: parseInt(newCard.capacity, 10) }];
    console.log(user.id);
    setCards(updatedCards);

    // Store the updated cards in localStorage
    localStorage.setItem('rideNowCards', JSON.stringify(updatedCards));
  };

  const deleteCard = (index) => {
    const cardToDelete = cards[index];

    // Check if the user trying to delete the card is the card owner
    if (user && cardToDelete.userId === user.id) {
      const updatedCards = cards.filter((_, i) => i !== index);
      setCards(updatedCards);

      // Update localStorage after deleting a card
      localStorage.setItem('rideNowCards', JSON.stringify(updatedCards));
    } else {
      // Notify the user that they are not authorized to delete the card
      alert("You are not authorized to delete this card.");
    }
  };

  const openPopup = (card) => {
    setPopupOpen(true);
    setSelectedCard(card);
  };

  const updateCardCapacity = (cardId, userEmail) => {
    // Find the card in the state by its ID
    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, capacity: card.capacity - 1 } : card
    );

    setCards(updatedCards);

    const cardToUpdate = updatedCards.find((card) => card.id === cardId);
    if (cardToUpdate && cardToUpdate.capacity === 0) {
      const userEmail = user ? user.email : null; // replace 'email' with the actual property name
      console.log('Sending email to:', userEmail);
      sendEmail(userEmail, cardId);
    }

    // Update localStorage after updating the card's capacity
    localStorage.setItem('rideNowCards', JSON.stringify(updatedCards));
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedCard(null);
  };

  const renderCards = () => {

    const cardsToRender =  cards;
    return cardsToRender.map((card, index) => (
      <Card
        key={index}
        cardData={card}
        currentUser={user}
        onClick={() => deleteCard(index)}
        updateCardCapacity={updateCardCapacity} 
      />
    ));
  };

  const logoutHandler = () => {
    // Remove user data from local storage
    localStorage.removeItem('userInfo');
    localStorage.removeItem('rideNowCards'); // Clear rideNowCards on logout
    navigate('/');
  };

  return (
    <div>
      <div className='navbar_div'>
        <Navbar />
      </div>

      <LeftDashboard addNewCard={addNewCard}  />
      <Dropdown />

      {/* Render the cards */}
      <div className='card-container'>
        {renderCards()}
      </div>
    </div>
  );
};

export default RideNow;