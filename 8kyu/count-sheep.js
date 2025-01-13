var countSheep = function (num) {
  let total = [];

  for (let i = 1; i <= num; i++) {
    total += i + ' sheep...';
  }

  return num > 0 ? total : '';
};

console.log(countSheep(5));
