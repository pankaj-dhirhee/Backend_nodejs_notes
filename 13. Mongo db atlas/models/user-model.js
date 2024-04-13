const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: {
    type: String,
    /* This will remove the whitespaces of begining and of end, before inserting 
       in the mongodb.
       The while spaces in the between would not removed.
    */
    trim: true,
  },
  email: {
    type: String,
    unique: true,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student'
  }]
});

module.exports = mongoose.model("user", user_schema);