// Question 1&2 - To check the string or number is palindrome

//WAY1
// let number = 1231;
// function checkPalindrome(number) {
//   let number1 = number + "";
//   let arr = number1.split("").reverse().join("");

//   if (number == arr) {
//     return "it is palindrome";
//   } else {
//     return "it is not palindrome";
//   }
// }

// console.log(checkPalindrome(number));

//Way2

// Way2
let data = "madam";
function checkPalindrome(data) {
  let length = parseInt(data.length / 2);
  for (let i = 0; i < length; i++) {
    if (data[i] != data[data.length - 1 - i]) {
      return "it is not palindrome";
    }
  }

  return "it is palindrome";
}
console.log(checkPalindrome(data));
