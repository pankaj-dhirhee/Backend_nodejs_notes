const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
if(dotenv.error){
  console.log(`Dotenv error: ${dotenv.error}`)
};


const chapter_routes = require("./routes/chapter-routes.js")

app.use("/", chapter_routes);
// Function to connect to mongo db
// You can call this function to test your db connection
/* 1. Here we are creating database named 'practice-db'. in the url you will 
      find it. 
   2.  Here database is created. but you cannot see that in mongodb atlas 
       beecause it does not have any document.
*/
const connect_to_database = () => {
  const db_url = process.env.DB_URL;
  mongoose.connect(db_url)
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch(error => {
    console.log(error)
  });
};
connect_to_database();

/* Notes: 
   1. In a database there are collection.
   2. In a collection there are documents.
*/






const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at; http://localhost:${port}`);
});