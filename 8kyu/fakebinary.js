function fakeBin(x) {
  const arr = x
    .split('')
    .map((num) => (Number(num) < 5 ? 0 : 1))
    .join('');

  return arr;
}

console.log(fakeBin('45385593107843568'));
