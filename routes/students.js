const express = require("express");
const router = express.Router();
const { Student } = require("../models/studentmodel");

router.get("/", async (req, res) => {
  try {
    const fetchedStudents = await Student.find({});
    res.send(fetchedStudents);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fetchedStudent = await Student.findById(req.params.id);
    res.send(fetchedStudent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).send(savedStudent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updatedStudent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.send(deletedStudent);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
