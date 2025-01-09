// title Sum of positive
// url https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
    total += arr[i];
  }
  return total;
}

console.log(positiveSum([1, 2, -4, 3]));
