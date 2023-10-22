const express= require("express");
require('dotenv').config();
const app = express();
const connectDB = require('./config/dB');
const cors = require('cors');

  connectDB();

  const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  app.get('/', (req, res) => {
    res.send('<h1>Phonebook</h1>') })

  app.use(cors());
  app.use(express.json());

  app.get('/autocomplete', async (req, res) => {
    try {
      const { input } = req.query;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${googlePlacesApiKey}`
      );
      res.json(response.data.predictions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })

