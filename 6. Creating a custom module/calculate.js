// Program for addition
const addition = ((array) => {
  let sum = 0
  array.forEach((number) => {
    sum += number;
  });
  return sum;
});


// Programme for subtaction
const subtraction = ((array) => {
  let subtract = array[0];
  for(let i = 1; i < array.length; i++){
    subtract -= array[i]
  }
  return subtract;
});


/* If you want to export only one thing => module.exports = addition;
   Then for importing it : const addition = require('addition');
   Then for using it : addition([2, 4, 5])
*/

/* Exporting multiple things =>
   If you have exported like this, then for importing it you can use:
   const calculator = require(./calculate.js);
   And for using it, you can do like this:
   calculator.addition([2, 4, 5])
*/
module.exports = {
  addition,
  subtraction: subtraction,
}
