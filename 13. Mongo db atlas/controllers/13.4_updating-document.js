const student_model = require("../models/student-model.js");

const update_document = (req, res) => {
  async function update_only_one_document(){
    /* updateOne() Returns the information about update operation like: 
       1. modifiCount: Tells that, how many documents has updated
       2. matchedCount: Tells that, how many documents are matches to your
          given fields and value. Here given field and value is:
          is_payed_fees: false
    */
    const update_document = await student_model.updateOne(
      // Finding document to update that
      {
        is_payed_fees: false
      },
      // Updating the document
      {
        $set: {is_payed_fees: true}
      }
    )
    console.log(update_document);
    res.status(200).send(update_document);
  };
  update_only_one_document();
  
  async function update_many_documents(){
    /* updateMany() Returns the information about update operation like: 
       1. modifiCount: Tells that, how many documents has updated
       2. matchedCount: Tells that, how many documents are matches to your
          given fields and value. Here given field and value is:
          is_payed_fees: false
    */
    const update_document = await student_model.updateMany(
      // Finding document to update that
      {
        is_payed_fees: false
      },
      // Updating the document
      {
        $set: {is_payed_fees: true}
      }
    )
    console.log(update_document);
    res.status(200).send(update_document);
  };
  // update_many_documents();
};


module.exports = update_document;