const express= require("express");
const app = express();
const cors = require('cors');
const connectDB = require('./config/dB');
const userRoute = require('./routes/userRoute');

  connectDB();
  app.use(cors("*"));
  app.use(express.json());

  app.use('/api/user',userRoute);

  app.get('/', (req, res) => {
    res.send('<h1>Phonebook</h1>') })

  
  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })