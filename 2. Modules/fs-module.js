// Modules are the code written by someone, We can import their code & use it.
// File system (fs) module => 

// 1. Reading and writing file in Synchronous way
let fs = require('fs');

function read_and_write_file_in_synchronous_way(){
  let text = fs.readFileSync('text.txt', 'utf-8');
  text = text.replace('Larry', "Harry");
  console.log(text);
  console.log("Creating a new file");
  fs.writeFileSync('new-file.txt', text); 
};
read_and_write_file_in_synchronous_way();


// 2. Reading file in asynchronous way 
function read_file_in_asynchronous_way(){
  fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(`Content of file = ${data}`);
  });
  console.log("First i will run");
};
read_file_in_asynchronous_way();