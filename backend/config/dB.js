const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://goyalharshika266:harshika14@cluster0.qgtjgwr.mongodb.net/?retryWrites=true&w=majority");

    console.log('Mongoose connected');
  } catch (error) {
    console.error('Mongoose connection error:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
