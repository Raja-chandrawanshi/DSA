let str1 = "bBAABBBBBBbAACDDAcC";
function Occurence(str1) {
  let str = str1.toUpperCase();
  let count = 0;
  let Output = "";
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      Output = Output + count + str[i];
      count = 0;
    }
  }
  return Output;
}
console.log(Occurence(str1));
