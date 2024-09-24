const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
app.use(express.json());

const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");
const subjectRoutes = require("./routes/subjects");
const { dbCon } = require("./connections");

dbCon();
app.use("/teachers", teacherRoutes);
app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
