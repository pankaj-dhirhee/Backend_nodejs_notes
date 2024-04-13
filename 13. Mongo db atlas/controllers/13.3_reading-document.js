const student_model = require("../models/student-model.js");

const read_document = async (req, res) => {
  async function finding_document_method_1(){
    const data = await student_model.find({}).limit(2);
    console.log(`Data: ${data}`);
    res.status(200).json(data);  
  };
  // finding_document_method_1();
  
  async function finding_document_method_2(){
    // Filtering data on the basis of field "name" and "is_payed_fees"
    const data = await student_model.find({
      name: "lalit",
      is_payed_fees: true
    }).limit(2);
    console.log(`Data: ${data}`);
    res.status(200).json(data)
  };
  finding_document_method_2();
};

module.exports = read_document;