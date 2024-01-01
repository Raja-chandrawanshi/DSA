

// //Question2 -String reverse without using inbuild mathod

let str = "my name is khan";
function reverseString(str) {
  let store = "";
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    store = store + str[i];

    if (str[i] == " " || i == 0) {
      str1 = str1 + " " + store;
      store = "";
    }
  }
  return str1;
}
console.log(reverseString(str));
