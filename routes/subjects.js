const express = require("express");
const router = express.Router();
const { Subject } = require("../models/subjectmodel");

router.get("/", async (req, res) => {
  try {
    const fetchedSubjects = await Subject.find({});
    res.send(fetchedSubjects);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fetchedSubject = await Subject.findById(req.params.id);
    res.send(fetchedSubject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const savedSubject = await newSubject.save();
    res.status(201).send(savedSubject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updatedSubject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
    res.send(deletedSubject);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
