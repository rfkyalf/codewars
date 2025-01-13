function getAverage(marks) {
  const total = marks.reduce((a, b) => a + b, 0);
  return Math.floor(total / marks.length);
}

console.log(getAverage([1, 5, 87, 45, 8, 8]));
