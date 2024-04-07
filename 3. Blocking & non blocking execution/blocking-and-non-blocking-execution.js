/* 1, Synchronuus or blocking execution
     Executes line by line.
   2. Asynchronous or non blocking execution
     Line by line execution is not guaranteed.
*/

// Example of asynchronous code 
const fs = require('fs');

function asynchronous_code(){
  fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(`content of file is: ${data}`)
  });
  console.log("First i will execute");
};
asynchronous_code();