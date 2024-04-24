const mongoose = require("mongoose");
const product_model = require("../models/product-model.js");

const cursors_in_mongodb = (req, res) => {
  /* Cursors in mongodb are used to efficiently retrieve large number of result sets  
     from query. like: 
     Counting numbers of document.
     Limiting the numbers of document that should be returned. and etc..
  */
  
  /* List of cursor methods =>
     1. count()  =>  Counting the numbers of document.
     2. limit()  =>  Limiting the numbers of document that should be returnes.
     3. skip()   =>  Skiping the documents.
     4. sort()   =>  Sorting the documents.
  */
  
  /* Syntax for using this cursor methods:
     find({ }).count(); All are only like this.
  */
  
  // .count() method: Returns the numbers of documents
  async function cursor_method_1(){
    const products_count = await product_model.find({
      product: "Copy"
    }).count();
    console.log(`Product count is: ${products_count}`);
    res.status(200).send(`Product count is: ${products_count}`);
  }
  cursor_method_1();
  
  
  // .count() method: Returns the numbers of documents
  async function cursor_method_2(){
    const products = await product_model.find({
      product: "Copy"
    }).limit(2);
    console.log(products);
    res.status(200).send(products);
  }
  // cursor_method_2();
  
  
  // skip() method: Skips the given numbers of documents
  async function cursor_method_3(){
    const products = await product_model.find({
      product: "Copy"
    }).skip(2);
    console.log(products);
    res.status(200).send(products);
  }
  // cursor_method_3();
  
  
  // sort() method: arrange the documents in ascending or descending order
  async function cursor_method_4(){
    const products = await product_model.find({
      product: "Copy"
    }).sort({ price: -1 });
    // '1' means arrange then in increasing order.
    // '-1' means arrange them in decreasing order.
    
    console.log(products);
    res.status(200).send(products);
  }
  // cursor_method_4();
  
};

module.exports = cursors_in_mongodb;