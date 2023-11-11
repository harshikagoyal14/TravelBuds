const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    pickup: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    capacity: {
        type: Integer,
        required: true,
    },
});


module.exports = mongoose.model('CardModel', cardSchema);