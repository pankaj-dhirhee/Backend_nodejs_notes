const express = require('express');
const app = express();

// Middleware => It is a code that executes before any reute.
/* Note =>
   If you place this middleware at the end of all the routes, then you will notice 
   that you dont need to call function 'next()'. express will automatically go to 
   next(); 
   But if you have written your middleware before all the routes, then you will 
   need to call function next() if you want that your middleware will move to the 
   next route.
*/
app.use((req, res, next) => {
  console.log("I am middleware")
  next();
});

// Handling get request
app.get("/", (req, res) => {
  res.send("<h1> This is home page. Serving as html </h1>");
});

// Handling post request
app.post("/data", (req, res) => {
 res.json({
   "message": "You have made post request"
 });
});

// Sending responce with status code
app.get("/statuscode", (req, res) => {
  res.status(200).send("<h1> This is with status code </h1>");
});

// Dynamic routing
app.get("/details/:name", (req, res) => {
  res.send(`<h1> Your name is ${req.params.name} </h1>`)
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at: http://loaclhost:${port}`);
});