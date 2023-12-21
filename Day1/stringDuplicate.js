// Question 1    - Remove Duplicate Characters from string
// input="raajra"
//output="raj"

//FIRST Way

// let str = "rajaaalee";
// function removeDuplicate(str) {
//   let str1 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!str1.includes(str[i])) {
//       str1 = str1 + str[i];
//     }
//   }
//   return str1;
// }
// console.log(removeDuplicate(str));

//SECOND WAY
// let str = "rajaaaka ";
// function removeDuplicate(str) {
//   let str1 = "";
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = 1;
//   }
//   for (let i in obj) {
//     str1 = str1 + i;
//   }
//   return str1;
// }
// console.log(removeDuplicate(str));

let str = "AAACCCAABBA";
function removeDuplicate(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);
  let str1 = Object.keys(obj).join("");

  return str1;
}
console.log(removeDuplicate(str));
