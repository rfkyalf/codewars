// title Generate range of integers
// url https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(generateRange(1, 10, 1));
