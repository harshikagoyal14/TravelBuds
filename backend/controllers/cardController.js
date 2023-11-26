const CardModel = require('../Models/CardModel');

// Search for Cards
const search_cards = async (req, res) => {
  try {
    const { pickupCity, destinationCity, date } = req.query;

    let query = {};

    // Check if search criteria are provided
    if (pickupCity || destinationCity || date) {
      query = {
        $or: [
          { pickup: { $regex: pickupCity, $options: 'i' } },
          { destination: { $regex: destinationCity, $options: 'i' } },
          // Add more conditions for other search criteria (e.g., date)
        ],
      };
    }

    const cards = await CardModel.find(query);
    res.json(cards);
    console.log(res);
  } catch (error) {
    console.error('Error performing search:', error.message);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Adding a Card
const add_card = (req, res) => {
  const newCard = new CardModel(req.body);
  newCard
    .save()
    .then((card) => res.json(card))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    });
};

// Delete a Card
const remove_card = (req, res) => {
  CardModel.findByIdAndDelete({ _id: req.params.id })
    .then(function (card) {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    });
};

module.exports = {
  search_cards,
  add_card,
  remove_card,
};
