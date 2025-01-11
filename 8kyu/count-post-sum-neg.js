function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }

  const neg = input.filter((num) => num < 0);
  const sumNeg = neg.reduce((a, b) => a + b, 0);

  const pos = input.filter((num) => num > 0);
  const countPos = pos.length;

  return countPos === 0 && sumNeg === 0 ? [] : [countPos, sumNeg];
}

console.log(countPositivesSumNegatives([null]));
