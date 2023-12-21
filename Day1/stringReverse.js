// Question 4  - String reverse without reversing of individual words
//INPUT=  "my name is khan"
//Output= "khan is name my"

//WAY 1
let str = "my name is khan";
let store = "";
let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  store = str[i] + store;

  if (str[i] == " " || i == 0) {
    str1 = str1 + " " + store;
    store = "";
  }
}
console.log(str1);

//WAY 2
// let str = "my name is khan";
// function stringReverse(str) {
//   let arr = str.split(" ");
//   let str1 = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     str1 = str1 + " " + arr[i];
//   }
//   return str1;
// }

// console.log(stringReverse(str));
