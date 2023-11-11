const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/dB');
const userRouter = require('./routes/userRoute');
const cardRouter= require('./routes/cardRoute');
const nodemailer = require('nodemailer');


connectDB();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Phonebook</h1>');
});


app.use('/api/user', userRouter);
app.use('/api/card',cardRouter);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'goyalharshika266@gmail.com',
    pass: 'Harshu#goyal@14', // Replace with your email password or use environment variable
  },
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  console.log('Request Body:', req.body);

  const mailOptions = {
    from: 'goyalharshika266@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


