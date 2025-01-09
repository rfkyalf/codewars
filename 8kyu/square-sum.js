// title Square(n) Sum
// url https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] ** 2;
  }

  return total;
}

console.log(squareSum([1, 2]));
