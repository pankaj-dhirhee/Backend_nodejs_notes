const express = require("express");
// Now in latest version of express it is not needed
const body_parser = require("body-parser");
const app = express();
app.set("view engine", "ejs");

// Getting form data with post request
/* Note =>
  * In post request, data will come in 'req.body'
  * As of Express version 4.16.0, Express comes with its own built-in middleware 
    for parsing request bodies, removing the need for the separate body-parser 
    module.
*/

//app.use(body_parser({extended: true}));
// Using express body parser to parse json data.
app.use(express.json());
// Using express body parser to parse urlencoded data
app.use(express.urlencoded({extended: true}));

// Rendering form page
app.get("/form", (req, res) => {
  res.render("form-post-req");
});

// By submitting form, this route would run
app.post("/formdata", (req, res) => {
  res.render('home', {
    fullname: req.body.fullname,
    email: req.body.email
  });
});


const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});