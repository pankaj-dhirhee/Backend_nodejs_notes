const expresss = require("express");
const app = express()

// connecting to db
const connect_db = require("./11.1 connecting-to-mongo-db.js");
connect_db();


const port = 4600;
app.listen(port, () => {
  console.log(`Servers is running at: http://localhost:${port}`);
});