const express = require("express");
const app = express();

// Static files are: images, html, css, js
/* Steps to configure static files with express:
   1. app.use(express.static("./public"))
      Now you told to express that, all the static files will be in folder 'public'
      
   2. Make threee folders 'images', 'stylesheets' and 'javascripts' inside public
      folder.
   
   3. Now for imaporting stylesheets and other files in ejs:
      you can do: '/stylesheets/file.css'
                  '/images/image.png'
                  '/javascripts/script.js'
      It means you dont nedd to mention like this '../public/stylesheets/file.css'.
      If you write '/public' by yourself then file will not linked. 
*/
app.use(express.static("./public"))

app.get("/", (req, res) => {
  res.render("for-express-static.ejs")
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});