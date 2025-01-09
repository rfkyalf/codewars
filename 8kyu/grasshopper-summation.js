// title Grasshopper - Summation
// url https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = (num) => {
  let nomor = 0;
  for (let i = 1; i <= num; i++) {
    nomor += i;
  }
  return nomor;
};

console.log(summation(2));
