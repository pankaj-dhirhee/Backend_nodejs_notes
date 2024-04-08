const student_model = require("../models/student-model.js");

const insert_document = (req, res) => {
  const new_student_model = new student_model();
  new_student_model.name = "Rawknee";
  new_student_model.standard = 9;
  new_student_model.is_payed_fees = true;
  new_student_model.save()
  .then(() => {
    res.status(200).json({
      "message": "Inserted to db"
    });
  }).catch((error) => {
    console.log(`Eror while inserting to db: ${error}`);
  });
};

module.exports = insert_document;