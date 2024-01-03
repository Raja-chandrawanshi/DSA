// Question 3 & 4 -   To find longest word from a string

//WAY1
// let str = "find the longest wordsssss in string ";
// function longestString(str) {
//   let arr = str.split(" ");
//   let greater = "";
//   for (let word of arr) {
//     if (word.length > greater.length) {
//       greater = word;
//     }
//   }
//   return greater;
// }
// console.log(longestString(str));

//WAY2
let str = "find the longest wordsssss in string";
function longestString(str) {
  let arr = str.split(" ");
  let greater = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > greater.length) {
      greater = arr[i];
    }
  }
  return greater;
}
console.log(longestString(str));
