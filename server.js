const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Route for the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");
const subjectRoutes = require("./routes/subjects");
const userRoutes = require("./routes/users");
const { dbCon } = require("./connections");

dbCon();
app.use("/teachers", teacherRoutes);
app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/users", userRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
