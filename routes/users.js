const express = require("express");
const router = express.Router();
const { User } = require("../models/usermodel");

router.get("/", async (req, res) => {
  try {
    const fetchedUsers = await User.find({});
    res.send(fetchedUsers);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fetchedUser = await User.findById(req.params.id);
    res.send(fetchedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
