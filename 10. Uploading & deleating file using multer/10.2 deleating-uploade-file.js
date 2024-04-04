const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("./public"));

// We will use fs(file system) module to delete files.

// Step 1. Require fs(File system) module
const fs = require("fs");

// Delete route to delete the file 
app.get("/delete", (req, res) => {
  const file_to_be_deleated = './public/uploads/tree.png'
  // Deleating the file
  fs.unlink(file_to_be_deleated, function(error){
    if(error) throw error;
    console.log("File deleated");
  });
  res.send({
    msg: "file deleated!!"
  });
});


const port = 4600;
app.listen(port, () => {
  console.log(`Server is running at: http://loaclhost:${port}`);
});