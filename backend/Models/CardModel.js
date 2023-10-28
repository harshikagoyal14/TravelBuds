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
      type: Date,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    capacity: {
        type: Integer,
        required: true,
    },
});


module.exports = mongoose.model('CardModel', cardSchema);
