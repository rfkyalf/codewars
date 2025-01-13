function sumArray(array) {
  return array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0)
    : 0;
}

console.log(sumArray([1, 2, 3]));
