const student_model = require("../models/student-model.js");

const update_document = (req, res) => {
  async function update_document_method_1(){
    const update_document = await student_model.updateOne(
      // Filtering
      {
        name: "Rawknee" 
      },
      // Updating
      {
        $set:{is_payed_fees: false}  
      }
    );
    console.log(update_document);
    res.status(200).json(update_document);
  };
  update_document_method_1();
};

module.exports = update_document;