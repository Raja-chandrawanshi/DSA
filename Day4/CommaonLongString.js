// Question  2- Find the longest common string from array of strings

let str =
  "fdddddddddddddthe longe wordss in stringss findsssssssss findssssssssss  findsssss";
function longestString(str) {
  let arr = str.split(" ");
  let greater = "";
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= greater.length) {
      greater = arr[i];
      arr1.push(greater);

      if (
        arr1.length >= 2 &&
        arr1[arr1.length - 2].length < arr1[arr1.length - 1].length
      ) {
        console.log(arr1);
        arr1.splice(0, arr1.length - 1);
      }
    }
  }
  return arr1;
}
console.log(longestString(str));
