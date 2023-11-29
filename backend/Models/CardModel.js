const mongoose = require('mongoose');

// Define the card schema
const cardSchema = new mongoose.Schema({
  pickup: { type: String, required: true },
  destination: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  car: { type: String, required: true },
  capacity: { type: String, required: true },
  userId: { type: String, required: true },
});


module.exports = mongoose.model('CardModel', cardSchema);




