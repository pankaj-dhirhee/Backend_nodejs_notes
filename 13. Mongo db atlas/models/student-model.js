const mongoose = require("mongoose");

const student_schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  standard: {
    type: Number,
    required: true
  },
  is_payed_fees: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("student", student_schema)