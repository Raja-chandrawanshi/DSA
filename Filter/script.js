let number = -213;
let str = number.toString();
let str1 = "";
let arr = str.split("");
console.log(arr);
if (number < 0) {
  console.log("raja");
  str1 = arr[0];
  arr[0] = [];
}

for (let i = arr.length - 1; i >= 0; i--) {
  str1 += arr[i];
}
console.log(str1);
