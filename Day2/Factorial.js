//Question3 -Find factorial of user input number

// WAY1

// let number = 5;
// function findFactorial(number) {
//   let output = 1;
//   for (let i = 5; i >= 1; i--) {
//     output = output * i;
//   }
//   return output;
// }
// console.log(findFactorial(number));

//WAY2
let number = 5;
let output = 1;
function findFactorial(number) {
  if (number >= 1) {
    output = output * number;
    findFactorial(number - 1);
  }
  return output;
}
console.log(findFactorial(number));
