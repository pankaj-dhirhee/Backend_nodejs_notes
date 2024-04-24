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
  
  
  /* Notes =>
     * If you have more than 20 documents, then only 20 document will be shown at a 
       time. If you want to see more documents then you can type 'it' and press enter.
       
     * While importing document in mongodb it must be smaller than 16 MB.
  */
};

module.exports = read_document;