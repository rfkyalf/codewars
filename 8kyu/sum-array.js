function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
