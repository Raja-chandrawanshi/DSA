//Question 1  - String reverse with reversing indivisual words
// input = "my name is khan";
//Output ="nahk si eman ym"

let str = "my name is khan";
function stringReverse(str) {
 let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 = str1 + str[i];
  }
  return str1;
}
console.log(stringReverse(str));
