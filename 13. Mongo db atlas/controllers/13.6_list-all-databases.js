const list_all_databases = async (req, res) => {
  try{
     /* We are importing 'mongoose.connection', We are importing inside function 
        because:
        This will be exported from another file when mongodb would be successfully 
        connected. and if we import this outside of function then it will be 
        undefined if mongodb would not connected successfully.
     */
     const connection = require("../13.1_connecting-to-mongo-db.js")
     // Switch to the 'admin' database
     const adminDb = connection.useDb('admin');
     // Execute the listDatabases command
     const result = await adminDb.db.admin().listDatabases();
     // Extract database names from the result
     console.log(`Database object: ${JSON.stringify(result)}`)
     // Extracting name of databases
     const databaseNames = result.databases.map(db => db.name);
     console.log(`Names of databases: ${databaseNames}`);
     res.send(databaseNames); 
  }catch(error){
     console.log(`{ Error while listing all databases: ${error} }`)
     res.status(500).send("Try after some seconds");
  };
};

module.exports = list_all_databases;