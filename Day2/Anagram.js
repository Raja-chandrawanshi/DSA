//Question 3 - Check if a string is an Anagram

//WAY1
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//       console.log("Invalid Input");
//       return;
//     }
//     let str1 = a.split("").sort().join("");
//     let str2 = b.split("").sort().join("");
//     if (str1 === str2) {
//       console.log("True");
//     } else {
//       console.log("False");
//     }
//   }
//   checkStringsAnagram("indian", "ndiani");

// WAY2
let str1 = "aab";
let str2 = "aba";
function checkAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length != arr2.length) {
    return "it is not palindrome";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  if (arr2.length == 0) {
    return "it is Anagram";
  }
}
console.log(checkAnagram(str1, str2));
