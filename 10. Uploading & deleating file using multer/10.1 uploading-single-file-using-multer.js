const express = require('express');
const fs = require("fs");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("./public"));

// Uploading single file using multer. step by step
// Step 1. Install multer: npm i multer

//step 2. require multer
const multer = require('multer');

// Step 3. Make route to render home page
app.get("/", (req, res) => {
  res.render("home")
});

/* Step 4. Make route to render form page
   Make sure in form tag thre must be:
   1. mothod="POST" 
   
   2. enctype="multipart/form-data"
      It specifies how the form data should be encoded before it's sent to the 
      server.
      It tells the browser that the form data will contain binary data, such as 
      files being uploaded, and that it should be encoded using the MIME type 
      multipart/form-data. This encoding method allows the form to send files 
      and other types of non-ASCII data.
      The default encoding type is application/x-www-form-urlencoded, which
      is suitable for sending text data but not for uploading files.
      
   3. <input type="file" name="image"/>
*/
app.get("/form", (req, res) => {
  res.render("form");
});

// Step 5. Prepare a diskstorage for multer
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    const upload_directory = "./public/uploads";
    // Checking if upload_directory is already created or not.
    fs.access(upload_directory, (error) => {
      // If directory did not created then create it
      if(error){
        // Creating the directory
        fs.mkdir(upload_directory, {reculsive: true}, (error) => {
          // If error accured while creating the directory
          if(error){
            console.log(`Error while creating a directory: ${error}`);
            return cd(error, null)
          }
          // else means, if error did not accure while creating upload_directory
          else{
            /* first argument of function cb() is : For error
                              and
               Second argument is: For directory where files should be uploaded
            */
            return cb(null, upload_directory)
          }
        });
      }
      // Else means, if the upload_directory has already created
      else{
        return cb(null, upload_directory)
      };
    });
  },
  filename: function(req, file, cb){
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// step 4. Give diskStorage to multer
const upload = multer({
  storage,
});

// Step 5. Route for file oploading
/* Here We have attached a multer middleware: upload.single("image")
   It will upload the file and after it, the callback function of this route 
   will be executed.
*/
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
});


const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`)
});