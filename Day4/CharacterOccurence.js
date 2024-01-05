// Question 4 -   To find character occurance from the string
let str = "AAACCCAABBA";
function checkOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  let finalstr = "";
  for (key in obj) {
    finalstr = finalstr + key + obj[key];
  }
  return finalstr;
}
console.log(checkOccurence(str));
