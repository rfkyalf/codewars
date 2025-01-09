// title Find the smallest integer in the array
// url https://www.codewars.com/kata/55a2d7ebe362935a210000b2

function findSmallestInt(arr) {
  const filterArr = arr.sort((a, b) => a - b);
  return filterArr[0];
}

console.log(findSmallestInt([1, 2, 3, 10, -1]));
