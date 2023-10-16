const express= require("express");
const app = express();
const connectDB = require('./config/dB');

  connectDB();

  app.get('/', (req, res) => {
    res.send('<h1>Phonebook</h1>') })

  
  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })