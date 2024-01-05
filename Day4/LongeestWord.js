//Question  1 - To find longest word from string using custom code

let str = "find the longest word from stringggg";
function reverseString(str) {
  let store = "";
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    store = store + str[i];
    console.log(arr);
    if (str[i] == " " || i == str.length - 1) {
      arr[count] = store;
      store = "";
      count = count + 1;
    }
  }
  console.log(arr);
  let greater = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > greater.length) {
      greater = arr[i];
    }
  }
  return greater;
}
console.log(reverseString(str));
