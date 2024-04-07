const express = require("express");
const app = express();

/* Steps to configure .env file
   Step 1. Install 'dotenv' package: npm i dotenv
   Step 2. Require the package 'dotenv':
           const dotenv = require("dotenv");;
   Step 3. Configure dotenv:
           const dotenv = require("dotenv").config();
           // If any error accured in dotenv then you can see in console
           if(dotenv.error){
             console.log(`Dotenv error: ${dotenv.error}`);
           };
   Step 4. Make '.env' file exactly where your your file is kept which has 
           express server code. if you make .env file in root directory, and 
           your file in which express server code is written is in another folder 
           then the value will be undefined. 
           In this case you can see error in your terminal because of:
           if(dotenv.error){
             console.log(`Dotenv error: ${dotenv.error}`);
           };
   Step 5. make variable inside '.env' file : PORT = 4600
   Step 6. To acces your environment variable: process.env.PORT
*/

const dotenv = require("dotenv").config();
// If any error accured in dotenv then you can see in console
if(dotenv.error){
  console.log(`Dotenv error: ${dotenv.error}`);
};

// Go and see in '.env' file that, how to store string data
console.log(`Text: ${process.env.STRING}`)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`)
})