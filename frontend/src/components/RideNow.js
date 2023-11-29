// RideNow.js

import React, { useState, useEffect ,useContext} from 'react';
import Navbar from './Navbar';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';
import { LeftDashboard } from './LeftSidebar/LeftDashboard';
import Dropdown from './ProfileDropdown';
import { sendEmail } from './EmailHandler';
import ProfileModal from './ProfileModal';
import { v4 as uuidv4 } from 'uuid';

const RideNow = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const uniqueId = uuidv4();   
  const [searchResults, setSearchResults] = useState(null);
 

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser);

  if (storedUser) {
    setUser(storedUser);
  }

  // Retrieve cards from localStorage on component mount
  const storedCards = localStorage.getItem('rideNowCards');
  if (storedCards) {
    setCards(JSON.parse(storedCards));
  }
}, []);

 const searchCards = async (searchParams) => {
    try {
      // Make an API call to retrieve matching cards based on searchParams
      const response = await fetch(`http://localhost:3001/api/card/search-cards?pickupCity=${searchParams.pickup}&destinationCity=${searchParams.destination}&date=${searchParams.date}`);
      const data = await response.json();
      console.log(searchParams);
      console.log('Search Results:', data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for cards:', error.message);
    }
  };


const addNewCard = (newCard) => {
  console.log(user);
  const updatedCards = [
    ...cards,
    {
      ...newCard,
      userId: user.id ,
      capacity: parseInt(newCard.capacity, 10)
    }
  ];
  setCards(updatedCards);
  setSearchResults((prevResults) => [...prevResults, newCard]);

  // Store the updated cards in localStorage
  localStorage.setItem('rideNowCards', JSON.stringify(updatedCards));
};



const deleteCard = (index) => {
  const cardToDelete = cards[index];
  console.log(user);
  console.log(cardToDelete);
  console.log(cardToDelete.userId);


  if (user && cardToDelete && cardToDelete.userId === user.id) {
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
      const userEmail = user ? user.email : null;
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

  /*const renderCards = () => {
    const cardsToRender = [...cards];  // Use the spread operator to create a new array
    return cardsToRender.map((card, index) => (
      <Card
        key={index}
        cardData={card}
        currentUser={user}
        onClick={() => deleteCard(index)}
        updateCardCapacity={updateCardCapacity} 
      />
    ));
  }; */

   const renderCards = () => {
    const cardsToRender = searchResults || cards;

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
    localStorage.removeItem('rideNowCards'); 
    navigate('/');
  }; 

 


  return (
    <div>
      <div className='navbar_div'>
        <Navbar />
      </div>

      <LeftDashboard addNewCard={addNewCard} uniqueId={uniqueId}  searchCards={searchCards}  />
      <ProfileModal user={user} />

      {/* Render the cards */}
      <div className='card-container'>
        {renderCards()}
      </div>
    </div>
  );
};

export default RideNow;
