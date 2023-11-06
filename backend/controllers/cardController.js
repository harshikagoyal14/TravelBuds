const CardModel = require('../Models/CardModel');

// Search for Cards
const search_cards = (req, res) => {
  const searchQuery = req.query.search; // Assuming you're passing the search query as a query parameter

  // Use a regular expression to perform a case-insensitive search on the 'pickup' and 'destination' fields
  CardModel.find({
    $or: [
      { pickup: { $regex: searchQuery, $options: 'i' } },
      { destination: { $regex: searchQuery, $options: 'i' } },
    ],
  })
    .then((cards) => {
      res.json(cards);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    });
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
