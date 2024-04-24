const product_model = require("../models/product-model.js");

const comparison_operators = async (req, res) => {
  /* Notes =>
     * Comparison operators are way to filter data. like:
       Give me document whose field 'price' is greater that 200
  */
  
  /* List of comparison operators =>
     1. $eq    =>  Equals to
     2. $ne    =>  Not equals to
     3. $gt    =>  Greater than
     4. $gte   =>  Greater than or equals to
     5. $lt    =>  Less than
     6. $lte   =>  Less than or equals to 
     7. $in    =>  Value must in. ex: it's value must be one of these [123, 6, 7,]
     8. $nin   =>  Not in. ex: it's value must not be one of these [123, 6, 7,]
  */
  
  /* Syntax to use these operators:
     your_model.find({'price': {$operator: value}});
     
     For $in ans $nin:
     your_model.find({'price': {$operator: [value, value]} });
  */
  
  
  // $eq  =>  Equals to
  async function operator_1(){
    // You can use '$eq' operator with number, string, boolean etc..
    const product = await product_model.find({
      price: {$eq: 60}
    });
    console.log(product);
    res.status(200).send(product);
  };
  operator_1();
  
  
  // $ne  => Not equals to
  async function operator_2(){
    // You can use '$ne' operator with number, string, boolean etc..
    const product = await product_model.find({
      in_stock: {$ne: true}
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_2();
  
  
  // $gt  => Greater than
  async function operator_3(){
    // You can use '$gt' operator only with number. otherwise it will give a blank array
    const product = await product_model.find({
      price: {$gt: 20}
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_3();
  
  
  // $gte  => Greater than or equals to
  async function operator_4(){
    /* You can use '$gte' with number. But it will also return documents if you will use 
       sting or boolean values. If you will use another datatype values accept number,
       then it will return all documents.
    */
    const product = await product_model.find({
      price: {$gte: 60}
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_4();
  
  
  // $lt  => Less than
  async function operator_5(){
    // You can use '$lt' operator with numbers only otherwise it will give a blank array
    const product = await product_model.find({
      product: {$lt: "Copy"}
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_5();
  
  
  // $lte  => Less than or equals to
  async function operator_6(){
    /* You can use '$lte' with number. But if you use it with string still it will
       return the document that matht the field and value.
    */
    const product = await product_model.find({
      product: {$lte: "Copy"}
    })
    console.log(product);
    res.status(200).send(product);
  };
  // operator_6();
  
  
  // $in  => That matches the given values in a array
  async function operator_7(){
    // You can use '$in' with numbers, strings as well as booleans
    const product = await product_model.find({
      price: { $in: [30, 60] }
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_7();
  
  
  // $nin  => That does matches the given values in a array
  async function operator_8(){
    // You can use '$nin' with numbers, strings as well as booleans
    const product = await product_model.find({
      product: { $nin: ["Copy"] }
    });
    console.log(product);
    res.status(200).send(product);
  };
  // operator_8();
  
};

module.exports = comparison_operators;