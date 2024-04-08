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

/* Here, mongoose.model("student", student_schema); we are creating a collection 
   name "student", but mongoose it will automatically add "s" at the last. So 
   name of created collection will be "students". You can go and see.
*/
module.exports = mongoose.model("student", student_schema);