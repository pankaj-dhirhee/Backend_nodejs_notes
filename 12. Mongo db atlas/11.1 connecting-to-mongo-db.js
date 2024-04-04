const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Function to connect to mongo db
// You can call this function to test your db connection
/* 1. Here we are creating database named 'practice-db'. in the url you will 
      find it. 
   2.  Here database is created. but you cannot see that in mongodb atlas 
       beecause it does not have any document.
*/
const connect_to_database = () => {
  const db_url = "mongodb+srv://dhirheepankaj:dhirhee_mongodb@cluster0.g9il8qo.mongodb.net/practice-db?retryWrites=true&w=majority";
  mongoose.connect(db_url)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch(error => {
    console.log(error)
  });
};
// connect_to_database();

/* Notes: 
   1. In a database there are collection.
   2. In a collection there are documents.
*/



/* This function is for exporting to another files. 
   We need to export this function because mongodb connection will be needed 
   in other files also.
*/
const connect_db = (database_url) => {
  const db_url = database_url;
  mongoose.connect(db_url)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch(error => {
    console.log(error)
  });
};
module.exports = connect_db


const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at; http://localhost:${port}`);
});