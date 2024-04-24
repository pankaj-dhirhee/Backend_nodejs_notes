const student_model = require("../models/student-model.js");

const check_case_secsitive = async (req, res) => {
  /* In mongodb the given things are case sensitive =>
     1. Names of collections
     2. Field name
     3. Value of a field
  */
  
  // Here example is given to show that Value of a field is a case sensitive
  const student = await student_model.findOne({
    name: "Komal"
  })
  console.log(student);
  res.status(200).send(student);
};

module.exports = check_case_secsitive;