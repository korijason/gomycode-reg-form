/* - name
- code
*/
const { Schema, models, model } = require("mongoose");

const subjectSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    code: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const Subject = models.Subject || model("Subject", subjectSchema);
module.exports = { Subject };
