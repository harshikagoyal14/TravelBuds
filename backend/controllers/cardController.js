const CardModel = require('../Models/CardModel');

// Search Card ??

// Adding the Card
const add_card = (req,res) => {
    const newCard = new CardModel(req.body);
    newCard.save().then( card => res.json(card));
}

// Delete the card

const remove_card = (req,res) =>{
    CardModel.findByIdAndDelete({_id: req.params.id}).then(function(card){
        res.json({success: true});
    });
}

module.exports = {
    add_card,
    remove_card,

};