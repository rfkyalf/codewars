// title Convert number to reversed array of digits
// url https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  const toArr = n.toString().split('').reverse();
  return toArr.map(Number);
}

console.log(digitize(101212));
