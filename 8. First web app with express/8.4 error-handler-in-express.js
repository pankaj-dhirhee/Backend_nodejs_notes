const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.status(200).send('This is home route');
});


/* Logic of error handler:
   When you will hit the route '/error' then the route '/error' will throw error 
   an it will go to error handler middleware, that will render error page
*/
// This is error route, this will throw error
app.get("/error", (req, res) => {
  throw new Error("This is a server error");
});

// This is express error handler middleware
// Imp note => Put this after your all route. otherwise it will not work
app.use(function(err, req, res, next){
  if(res.headersSent){
    return next(err);
  };
  res.status(500).render('error', {
    error: err.message
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`)
});