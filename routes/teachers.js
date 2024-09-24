const express = require("express");
const router = express.Router();
const { Teacher } = require("../models/teachermodel");

router.get("/", async (req, res) => {
  try {
    const fetchedTeachers = await Teacher.find({});
    res.send(fetchedTeachers);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fetchedTeacher = await Teacher.findById(req.params.id);
    res.send(fetchedTeacher);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher = await newTeacher.save();
    res.status(201).send(savedTeacher);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updatedTeacher);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    res.send(deletedTeacher);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
