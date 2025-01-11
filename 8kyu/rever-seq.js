const reverseSeq = (n) => {
  let arr = [];

  for (let i = n; i > 0; i--) {
    arr += i > 1 ? i + ',' : i;
  }

  return arr.split(',').map((num) => Number(num));
};

console.log(reverseSeq(5));
