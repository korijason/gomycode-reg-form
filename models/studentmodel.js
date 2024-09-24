/* -adm
-name
 */
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    adm: { type: Number, unique: true, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
module.exports = { Student };
