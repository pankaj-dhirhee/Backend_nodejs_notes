const express = require("express");
const user_routes = require("./routes/user-routes.js");
const app = express();

/* Notes:
  * In "routes" folder you will make file then define routes and call a funcction 
    for each route. but you will define that function in another file inside of 
    "controllers" folder. and import in your routes file.
    This is concept of routes and controllers.
*/

/* When you will hit "http://localhost:4600/user" then it will handles by:
   "./routes/user-routes.js"
*/
app.use("/user", user_routes);

const port = 4600;
app.listen(port, (req, res) => {
  console.log(`Server is running at: http://localhost:${port}`);
});