const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//Mongoose will enforce type check by default to all the data that is being inserted into it.
//Validation will fail if any of the required field is absent in request.

module.exports = mongoose.model("User", userSchema); // exports the schema as model
