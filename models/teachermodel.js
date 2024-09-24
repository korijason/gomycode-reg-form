/* -name
-subject
*/
const { Schema, models, model } = require("mongoose");  


const teacherSchema = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: Array, required: true },
  },
  { timestamps: true }
);

const Teacher = models.Teacher || model("Teacher", teacherSchema);
module.exports = { Teacher };
