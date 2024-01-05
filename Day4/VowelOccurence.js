//Question 3 - To find vowels and its count in a given string

let str = "AAACCCAAEEBBA";
function checkOccurence(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      if (obj.hasOwnProperty(str[i])) {
        obj[str[i]] = obj[str[i]] + 1;
      } else {
        obj[str[i]] = 1;
      }
    }
  }

  let finalstr = "";
  for (key in obj) {
    finalstr = finalstr + key + obj[key];
  }
  return finalstr;
}
console.log(checkOccurence(str));
