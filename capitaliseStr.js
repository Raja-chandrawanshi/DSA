let str = "mY namEE Is raJa";
function capitaliseStr(str) {
  let str1 = str.toLowerCase();
  let arr = str1.split(" ");
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    const store =
      arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length);
    output = `${output}${store} `;
  }
  return output.trim();
}
console.log(capitaliseStr(str));
