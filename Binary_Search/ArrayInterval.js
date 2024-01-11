 //let arr= [ [1, 4], [3, 5] , [8, 9],[12,14]];
// let arr = [[1, 3], [4, 12], [6, 12], [14, 21]]

 let arr = [
   [1, 3],
   [4, 9],
   [6, 12],
   [11, 18],
   [17, 21],
 ];



function Range(arr) {
  let finalResult = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i][1] >= arr[i + 1][0]) {
      result.push([arr[i][0], arr[i + 1][1]]);
      i++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(Range(arr));
