const student_model = require("../models/student-model.js");

const insert_document = (req, res) => {
  const new_student_model = new student_model();
  new_student_model.name = "Ritu nirala"
  new_student_model.standard = 8,
  new_student_model.is_payed_fees = true
  new_student_model.save()
  .then(() => {
    res.status(200).send({
      "message": "Inserted to db"
    })
  }).catch((error) => {
    console.log(error)
  })
};

module.exports = insert_document;