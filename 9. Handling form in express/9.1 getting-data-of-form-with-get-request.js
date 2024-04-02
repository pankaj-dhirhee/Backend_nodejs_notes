const express = require("express");
const app = express();
app.set('view engine', 'ejs');


// Getting data of form with get request
/* Note =>
   * Data of form will come in req.query (Because of get request).
   * You have to give name attribute to all the inputs.
   * Here you dont need any midddleware.
*/
app.get("/form", (req, res) => {
  res.render("form-get-req");
});

app.get("/formdata", (req, res) => {
  res.render('home', {
    fullname: req.query.fullname,
    email: req.query.email
  });
});


const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});