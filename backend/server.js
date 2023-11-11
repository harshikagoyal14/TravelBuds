const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/dB');
const userRouter = require('./routes/userRoute');


connectDB();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Phonebook</h1>');
});


app.use('/api/user', userRouter);

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


