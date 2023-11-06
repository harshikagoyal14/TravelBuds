const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();

// Route for adding a card
router.post('/add-card', cardController.add_card);

// Route for removing a card by ID
router.delete('/remove-card/:id', cardController.remove_card);

// Route for searching cards
router.get('/search-cards', cardController.search_cards);

module.exports = router;
