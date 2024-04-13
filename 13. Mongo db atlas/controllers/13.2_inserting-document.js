const student_model = require("../models/student-model.js");
const user_model = require("../models/user-model.js");

const insert_document = (req, res) => {
  // Inserting only 1 document at a time
  function insert_method_1(){
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
  // insert_method_1()
  
  
  // Inserting multiple documents at a time
  async function insert_method_2(){
    /* * Function insertMany() takes an array of objects to insert more than 1 
         document at a time.
       * You can also use this to insert only 1 Document.
       * This function returns the inserted documents.
       * You cannot use 'insertOne()' in mongoose. you can only use that in
         'mongodb' package
    */
    const insert = await student_model.insertMany([
      // Document 1 
      {
        name: "Lalit",
        standard: 1,
        is_payed_fees: false
      },
      // Document 2
      {
        name: "Angel",
        standard: 5,
        is_payed_fees: true
      },
      // Document 3
      {
        name: "Priya",
        standard: 7,
        is_payed_fees: false
      }
    ]);
    console.log(insert)
    res.status(200).send(insert)
  };
  // insert_method_2()
  
  
  /* Ordered and unordered insert :
     1. Ordered: While inserting multiple documents, if error comes, then the
        documents will be inserted that will before the erorr document. The 
        documents that would after the error document would not inserted.
     2. Unordered: Only error documents would not be inserted, and all the 
        documents accept error documents will be inserted.
        Error document like: Where dublicate email and etc...
     >> default is ordered insert.
     
     To enable unordered insert:
      await user_model.insertMany([ {document1}, {document2}, {ordered: fallse}]);
      Here we have used: {ordered: fallse} to enable unordered insert.
     >>  Remember that, it will insert the all documents accept error document.
         but it will give error, and server will be stopped due to error. you need 
         to handle that error.
  */
  async function enable_unordered_insert(){
    try{
      const insert = await user_model.insertMany([
        // Document 1 
        {
          name: "Lalit",
          email: "test2@gmail.com", // Error document: dublicate email
        },
        // Document 2
        {
          name: "Lalit",
          email: "test8@gmail.com",
        },
        // Document 3
        {
          name: "Lalit",
          email: "test9@gmail.com",
        }
      ], {ordered: false} );
      res.status(200).json({"message": "Inserted to db"}) 
    }catch(error){
      res.status(200).json({
        "message": "Inserted to db, but there was some dublicate documents"
      });
      console.log(`Error accured while inserting multiple Document: ${error}`);
    };
  };
  // enable_unordered_insert()
  
  
  // Inserting an ObjectId
  async function insert_and_object_id(){
    /* Here, If you will try to acces '_id' in one line using:
       const object_id = await student_model.findOne({})._id;
       then the value will be null. because You're attempting to access the 
       '_id' property immediately after calling findOne(). However, since 
       findOne() is an asynchronous operation, the await keyword is waiting for 
       the query to complete and is resolving to the entire document (or null if 
       no document is foun).
       
       If you want to acces that in 1 line you can use object destructuring
       const { _id } = await student_model.findOne({});
    */
    const found_document = await student_model.findOne({});
    console.log(`found_document: ${found_document}`)
    const object_id = found_document._id;
    console.log(`object_id: ${object_id}`)
    const new_user_model = new user_model();
    new_user_model.name = "Ritu nirala"
    /* Note: If you did not give email, and in mongoose schema you have not 
       gave 'required: true'. but if you have given 'unique: true' then if you
       dont give email then its default value will null and if you again did not 
       give email then it will return error of 'dublicate email'
    */
    new_user_model.email= "dshggaas"
    new_user_model.friends.push(object_id)
    console.log(`new_user_model: ${new_user_model}`)
    await new_user_model.save();
    res.status(200).send(new_user_model);
  };
  insert_and_object_id()
};

module.exports = insert_document;