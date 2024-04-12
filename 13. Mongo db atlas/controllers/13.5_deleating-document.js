const student_model = require("../models/student-model.js");

const delete_document = (req, res) => {
  async function delete_only_one_document(){
    const delete_document = await student_model.deleteOne({
      /* If i stored "Ritu nirala" with single space and after it if i try to 
         delete it by giving double space, then it will not recognised and not 
         deleated. So spaces also metter in case of mongodb.
      */
      name: "Ritu nirala"
    });
    console.log(delete_document);
    res.status(200).json(delete_document);
  };
  delete_only_one_document()
  
  async function delete_many_documents(){
    const delete_document = await student_model.deleteMany({
      name: "Ritu nirala"
    });
    console.log(delete_document);
    res.json(delete_document);
  };
  // delete_many_documents()
};

module.exports = delete_document;