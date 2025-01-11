function findAverage(array) {
  const total = array.reduce((a, b) => a + b, 0);
  const avg = total / array.length;

  return array.length === 0 ? 0 : avg;
}
