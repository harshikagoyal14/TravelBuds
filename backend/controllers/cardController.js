const express = require("express");
const router = express.Router();
const CardModel = require('../Models/CardModel');

router.get("/getallrides", async (req, res) => {
    try {
      const rides = await CardModel.find({});
      res.send(rides);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
});

router.post("/getroombyid", async (req, res) => {
    try {
      const rideid = req.body.id;
      const ride = await Room.findOne({ _id: rideid });
      res.send(ride);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
});

router.post("/getallrides", async (req, res) => {
    try {
      const rides = await CardModel.find();
      res.send(rides);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  });

