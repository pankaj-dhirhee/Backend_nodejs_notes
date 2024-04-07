const express = require("express");
const app = express();

/* Template engines are like html but it has some special power that html 
   Dont have.
   We will use here ejs
   
   To configure ejs:
   1. Install ejs => npm i ejs
   2. Set view engine to ejs => app.set('view engine', 'ejs');
   3. Make folder name 'views' (This is default folder by ejs view engine)
   4. Make ejs file inside views.
   5. to Server => res.render("home")
*/
app.set("view engine", "ejs");

// Rendering home page and sending a data in the form of an object
app.get("/home", (req, res) => {
  // Here we are rendering home.ejs inside views foleder.
  // We are also sending a data in the form of an object.
  res.render("home", {
    name: "sheryiance coding school"
  })
});


// Sending data in a array
app.get("/data", (req, res) => {
  res.render("data", {
    array_of_employees: [
      {
        name: "Harry",
        roll_no: 13
      },
      {
        name: "Rohan",
        roll_no: 14
      }
    ],
    note: "Go to data.ejs and check how to receive this data" 
  });
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});